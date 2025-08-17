export const buildWhatsAppLink = (number: string, msg?: string) => {
  const digits = number.replace(/\D/g, ""); // -> "5491122986080"
  const q = msg ? `?text=${encodeURIComponent(msg)}` : "";
  return `https://wa.me/${digits}${q}`;
};