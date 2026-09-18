import { useNavigate } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lines, subtotal, setQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-forest-950/40 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-forest-900/10 px-6 py-5">
          <h2 className="font-display text-lg font-semibold text-forest-950">Your Cart</h2>
          <button onClick={onClose} aria-label="Close cart" className="text-forest-950">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-ink-500">
              <ShoppingBag className="h-10 w-10 text-forest-900/20" />
              <p className="mt-4">Your cart is empty.</p>
            </div>
          ) : (
            <ul className="space-y-5">
              {lines.map((line) => (
                <li key={line.id} className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-forest-950">{line.name}</p>
                    <p className="text-xs text-ink-500">{line.unit}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(line.id, line.quantity - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-forest-900/15 text-forest-900"
                        aria-label={`Decrease quantity for ${line.name}`}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-5 text-center text-sm">{line.quantity}</span>
                      <button
                        onClick={() => setQuantity(line.id, line.quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-forest-900/15 text-forest-900"
                        aria-label={`Increase quantity for ${line.name}`}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-forest-950">
                      {formatINR(line.unitPrice * line.quantity)}
                    </p>
                    <button
                      onClick={() => removeItem(line.id)}
                      className="mt-2 text-ink-300 hover:text-red-600"
                      aria-label={`Remove ${line.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-forest-900/10 px-6 py-6">
            <div className="flex items-center justify-between text-sm text-ink-500">
              <span>Subtotal</span>
              <span className="font-display text-lg font-semibold text-forest-950">
                {formatINR(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-ink-500">Delivery calculated at checkout.</p>
            <button
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
              className="mt-5 w-full rounded-full bg-forest-900 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest-800"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
