import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/path-to-your-cv.pdf";
  link.download = "Ali_Fahmi_CV.pdf";
  link.click();
};
export const contactOnWhatsApp = () => {
  const phoneNumber = "+916366313572";
  const message = encodeURIComponent("Hello, I’d like to get in touch!");
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
};
