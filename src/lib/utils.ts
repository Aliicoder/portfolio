import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/25_ali_fahmi_omar_resume.pdf";
  link.download = "25_ali_fahmi_omar_resume.pdf";
  link.click();
};
export const contactOnWhatsApp = () => {
  const phoneNumber = "+916366313572";
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  window.open(whatsappURL, "_blank");
};
