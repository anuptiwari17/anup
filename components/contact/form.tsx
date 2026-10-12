"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LINK } from "@/constants/links";

type FormStatus = "idle" | "submitting" | "success" | "error";

export const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(LINK.EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`,
            _template: "box",
          }),
        }
      );

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to deliver message");
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Could not send message. Please contact directly via email."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/15 p-6 text-center space-y-3 animate-in fade-in-50 duration-200">
        <div className="size-12 rounded-full bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="size-6" />
        </div>
        <h3 className="text-lg font-medium text-foreground tracking-tight">
          Message sent successfully!
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Thanks for reaching out. Your message was delivered directly to my
          inbox ({LINK.EMAIL}) and I’ll get back to you soon.
        </p>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
          >
            Name <span className="text-destructive">*</span>
          </label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
          >
            Email <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
        >
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, idea, or just say hi..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          disabled={status === "submitting"}
        />
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive flex items-center justify-between gap-2">
          <span>{errorMessage}</span>
          <a
            href={`mailto:${LINK.EMAIL}?subject=Contact&body=${encodeURIComponent(formData.message)}`}
            className="underline underline-offset-2 font-medium shrink-0"
          >
            Open Mail Client
          </a>
        </div>
      )}

      <div className="flex items-center justify-between pt-1">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="min-w-36"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin mr-1.5" />
              Sending...
            </>
          ) : (
            <>
              <Send className="size-3.5 mr-1.5" />
              Send Message
            </>
          )}
        </Button>

        <span className="text-xs text-muted-foreground font-mono">
          Free & Direct Delivery
        </span>
      </div>
    </form>
  );
};
