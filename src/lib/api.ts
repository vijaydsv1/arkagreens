const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8001";

class ApiError extends Error {}

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.json().catch(() => null);
    throw new ApiError(
      typeof detail?.detail === "string" ? detail.detail : "Something went wrong. Please try again.",
    );
  }

  return res.json() as Promise<T>;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export function submitContact(payload: ContactPayload) {
  return post<{ id: number }>("/api/contact", payload);
}

export function subscribeNewsletter(email: string) {
  return post<{ id: number }>("/api/newsletter", { email });
}

export interface OrderItemPayload {
  name: string;
  unit: string;
  unit_price: number;
  quantity: number;
}

export interface OrderPayload {
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  notes?: string;
  items: OrderItemPayload[];
}

export function submitOrder(payload: OrderPayload) {
  return post<{ id: number; total: number }>("/api/orders", payload);
}
