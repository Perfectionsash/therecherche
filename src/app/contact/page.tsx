import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Recherche — book a free design visit, request a brochure, or ask us a question about your project.",
};

export default function Contact() {
  return <ContactForm />;
}