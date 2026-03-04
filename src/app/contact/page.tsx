"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EMAILJS_SERVICE_ID = "service_7dxtm3h";
const EMAILJS_TEMPLATE_ID = "template_ss9g916";
const EMAILJS_PUBLIC_KEY = "kSsg5E6I3bh7G1nvp";

const ContactMap = dynamic(() => import("@/components/ContactMap"), {
  ssr: false,
});

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevents browser from reloading the page on submit
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      // reset form after success
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <main className="pt-6">
      {/* <Navbar /> */}

      <section className="container-narrow mt-12 pb-6">
        {/* heading */}
        <div className="mb-8">
          <p className="text-white/40 text-sm mb-2">Want to collaborate?</p>
          <h1 className="text-white font-bold text-4xl mb-3">
            Let&apos;s Connect.
          </h1>
          {/* open to opport badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2196F3] bg-[#2196F3]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2196F3] animate-pulse" />
            <span className="text-[#2196F3] text-xs">
              Open to opportunities
            </span>
          </div>
        </div>

        {/* map banner */}
        <div>
          <ContactMap />
        </div>

        {/* conent */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* left — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-white/50 text-xs">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/50 text-xs">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/50 text-xs">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>

            {/* submit button — label changes based on status */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white transition-all duration-250 hover:text-[#2196F3] text-sm font-semibold hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : <>Send</>}
            </button>

            {/* feedback messages */}
            {status === "success" && (
              <p className="text-green-400 text-xs">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-xs">
                Something went wrong. Try emailing me directly.
              </p>
            )}
          </form>

          {/* right — social links + info */}
          <div className="flex flex-col mt-4 gap-6">
            <div>
              <p className="text-white/50 text-sm leading-relaxed">
                I&apos;m currently open to{" "}
                <span className="text-[#2196F3] font-medium">
                  new opportunities
                </span>{" "}
                and available for{" "}
                <span className="text-[#2196F3] font-medium">
                  full-time positions
                </span>{" "}
                and freelance work.
                <br />
                <br />
                If you have a project in mind or just want to say hi, feel free
                to reach out.
              </p>
            </div>

            {/* social links */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:davidupdesign@gmail.com"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">davidupdesign@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/david-k21/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/20 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-sm">linkedin.com/in/david-k21</span>
              </a>

              <a
                href="https://github.com/davidupdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/20 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <span className="text-sm">github.com/davidupdesign</span>
              </a>

              {/* instagram */}
              <a
                href="https://instagram.com/davidupdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/20 transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="text-sm">instagram.com/davidupdesign</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
