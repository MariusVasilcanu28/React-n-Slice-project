export async function getAddress({ latitude, longitude }) {
  const baseUrl = import.meta.env.VITE_BIGDATA_API_URL;
  const res = await fetch(
    `${baseUrl}?latitude=${latitude}&longitude=${longitude}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
