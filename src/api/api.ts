export async function api<T>(url: string, method = "GET"): Promise<T> {
  const response = await fetch(url, { method });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}