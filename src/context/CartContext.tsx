import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";

export interface CartLine {
  id: string;
  name: string;
  unit: string;
  unitPrice: number;
  quantity: number;
}

interface CartState {
  lines: CartLine[];
}

type CartAction =
  | { type: "ADD"; item: Omit<CartLine, "quantity">; quantity: number }
  | { type: "REMOVE"; id: string }
  | { type: "SET_QUANTITY"; id: string; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; state: CartState };

const STORAGE_KEY = "arkagreens-cart";

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.lines.find((l) => l.id === action.item.id);
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.id === action.item.id ? { ...l, quantity: l.quantity + action.quantity } : l,
          ),
        };
      }
      return { lines: [...state.lines, { ...action.item, quantity: action.quantity }] };
    }
    case "REMOVE":
      return { lines: state.lines.filter((l) => l.id !== action.id) };
    case "SET_QUANTITY":
      if (action.quantity <= 0) {
        return { lines: state.lines.filter((l) => l.id !== action.id) };
      }
      return {
        lines: state.lines.map((l) => (l.id === action.id ? { ...l, quantity: action.quantity } : l)),
      };
    case "CLEAR":
      return { lines: [] };
    case "HYDRATE":
      return action.state;
    default:
      return state;
  }
}

function loadInitialState(): CartState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { lines: [] };
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed?.lines)) return parsed as CartState;
    return { lines: [] };
  } catch {
    return { lines: [] };
  }
}

interface CartContextValue {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  addItem: (item: Omit<CartLine, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitialState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore write failures (private browsing, storage full, etc.)
    }
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = state.lines.reduce((sum, l) => sum + l.quantity, 0);
    const subtotal = state.lines.reduce((sum, l) => sum + l.quantity * l.unitPrice, 0);
    return {
      lines: state.lines,
      itemCount,
      subtotal,
      addItem: (item, quantity = 1) => dispatch({ type: "ADD", item, quantity }),
      removeItem: (id) => dispatch({ type: "REMOVE", id }),
      setQuantity: (id, quantity) => dispatch({ type: "SET_QUANTITY", id, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
