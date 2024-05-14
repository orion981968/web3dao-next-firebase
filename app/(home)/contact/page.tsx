"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { ref, push } from "firebase/database";
import { database1 } from "@/firebase/firebase";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faDiscord } from "@fortawesome/free-brands-svg-icons";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const SubmissionConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold text-green-600">Thank You!</h2>
      <p className="mt-4 text-lg">Your message has been sent successfully.</p>
      <p className="mt-2">We will contact you soon.</p>
    </div>
  );
};

function ContactPage() {
  const [contact, setContact] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const contactsRef = ref(database1, "contacts");
      await push(contactsRef, contact);

      const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_DISCORD_WEBHOOK_URL;
      if (webhookUrl) {
        await axios.post(webhookUrl, {
          content: `New contact message from ${contact.name} (${contact.email}): ${contact.message}`,
        });
      }

      setSubmitted(true);
      setContact({ name: "", email: "", message: "" });
    } catch (error: any) {
      setError("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  if (submitting) {
    return (
      <p className="flex animate-pulse items-center justify-center">
        Submitting...
      </p>
    );
  }

  if (submitted) {
    return <SubmissionConfirmation />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 dark:bg-gray-900 md:p-24">
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          Contact Us - Web3 DAO
        </h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          We&apos;re always happy to hear from you. Reach out to us anytime, and
          we&apos;ll get back to you as soon as possible.
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              name="name"
              value={contact.name}
              onChange={handleChange}
              className="w-full rounded-md border border-red-500 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              name="email"
              value={contact.email}
              onChange={handleChange}
              className="w-full rounded-md border border-red-500 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              name="message"
              value={contact.message}
              onChange={handleChange}
              className="w-full rounded-md border border-red-500 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows={4}
              placeholder="Your Message"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-red-600 px-6 py-3 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://wa.me/+27625658750"
              className="inline-flex items-center rounded-md bg-green-500 px-6 py-3 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />{" "}
              WhatsApp Us
            </a>
            <a
              href=" https://discord.gg/RJZP2VbbUs"
              className="inline-flex items-center rounded-md bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FontAwesomeIcon icon={faDiscord} className="mr-2 h-5 w-5" /> Join
              our Discord
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ContactPage;
