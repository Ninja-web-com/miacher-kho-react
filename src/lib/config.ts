export const CONFIG = {
  whatsapp: "923001234567",
  phone: "+92 300 1234567",
  phoneTel: "+923001234567",
  email: "hello@miacherkho.com",
  maps: "https://maps.google.com/?q=Nagar+Valley+Gilgit-Baltistan",
  siteName: "Miacher Kho",
  fullName: "Miacher Kho Camping & Nature Retreat",
  location: "Nagar Valley, Gilgit-Baltistan",
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(waLink(message), "_blank", "noopener,noreferrer");
}

export const DEFAULT_WA_MESSAGES = {
  book: "Hi, I would like to book a stay at Miacher Kho.",
  availability: "Hi, I would like to check availability at Miacher Kho. Please share available dates and options.",
  enquire: "Hi, I am interested in Miacher Kho.",
  services: "Hi, I would like to know more about the services at Miacher Kho.",
  contact: "Hi, I found Miacher Kho online and would like to get in touch.",
} as const;
