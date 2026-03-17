"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    description: "dibyanshuchaubey95@gmail.com",
    href: "mailto:dibyanshuchaubey95@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    description: "Kanpur, Uttar Pradesh, India",
  },
];

const serviceOptions = [
  { value: "flask-apis", label: "Flask REST API Development" },
  { value: "fullstack", label: "Full Stack (Flask + React)" },
  { value: "database", label: "Database Design (MySQL / SQLite)" },
  { value: "dashboard", label: "Dashboard & Analytics (Power BI / Streamlit)" },
  { value: "other", label: "Other Collaboration" },
];

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[-()\s\d]{7,20}$/;
const recipientEmail = "dibyanshuchaubey95@gmail.com";

const validateForm = (formData) => {
  const nextErrors = {};

  if (!formData.firstName.trim()) {
    nextErrors.firstName = "First name is required.";
  }

  if (!formData.lastName.trim()) {
    nextErrors.lastName = "Last name is required.";
  }

  if (!formData.email.trim()) {
    nextErrors.email = "Email address is required.";
  } else if (!emailPattern.test(formData.email)) {
    nextErrors.email = "Enter a valid email address.";
  }

  if (!formData.phone.trim()) {
    nextErrors.phone = "Phone number is required.";
  } else if (!phonePattern.test(formData.phone)) {
    nextErrors.phone = "Enter a valid phone number.";
  }

  if (!formData.service) {
    nextErrors.service = "Please select a service.";
  }

  if (!formData.message.trim()) {
    nextErrors.message = "Message is required.";
  } else if (formData.message.trim().length < 20) {
    nextErrors.message = "Please enter at least 20 characters.";
  }

  return nextErrors;
};

const buildGmailComposeUrl = ({ subject, body }) => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: recipientEmail,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
};

const buildMailtoUrl = ({ subject, body }) => {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${recipientEmail}?${params.toString()}`;
};

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });
  };

  const handleServiceChange = (value) => {
    setFormData((currentData) => ({
      ...currentData,
      service: value,
    }));

    setErrors((currentErrors) => {
      if (!currentErrors.service) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors.service;
      return nextErrors;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({
        type: "error",
        message: "Please review the highlighted fields and try again.",
      });
      return;
    }

    const subject = `Portfolio inquiry: ${formData.service}`;
    const body = [
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.service}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const gmailUrl = buildGmailComposeUrl({ subject, body });
    const openedWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");

    if (!openedWindow) {
      window.location.href = buildMailtoUrl({ subject, body });
    }

    setStatus({
      type: "success",
      message: "Gmail compose opened with your details pre-filled.",
    });
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.4,
                ease: "easeIn",
              },
            }
      }
      className="py-8 xl:py-12"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto">
        <div className="mb-10 xl:mb-14 flex max-w-3xl flex-col gap-4">
          <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/75">
            Contact
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white xl:text-6xl">
            Let&apos;s Build High-Impact Digital Products Together.
          </h1>
          <p className="max-w-2xl text-white/65 xl:text-lg">
            Open to freelance engagements and product-focused collaborations
            where execution quality, speed, and ownership matter.
          </p>
        </div>

        <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-8">
          <div className="order-2 xl:order-none xl:w-[58%]">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/[0.05] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.14)] backdrop-blur-md md:p-10"
            >
              <div className="space-y-3">
                <h2 id="contact-heading" className="text-3xl font-bold text-white xl:text-4xl">
                  Let&apos;s Work Together
                </h2>
                <p id="contact-description" className="text-white/60">
                  Feel free to reach out for collaborations, freelance projects,
                  or high-impact opportunities. I&apos;m always open to meaningful
                  work that creates measurable value.
                </p>
              </div>

              {status.message ? (
                <p
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={
                    status.type === "error"
                      ? "rounded-md border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                      : "rounded-md border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
                  }
                >
                  {status.message}
                </p>
              ) : null}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm text-white/80">
                    First name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={
                      errors.firstName ? "firstName-error" : undefined
                    }
                    className={errors.firstName ? "border-red-400" : ""}
                  />
                  {errors.firstName ? (
                    <p id="firstName-error" className="text-sm text-red-300">
                      {errors.firstName}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm text-white/80">
                    Last name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    className={errors.lastName ? "border-red-400" : ""}
                  />
                  {errors.lastName ? (
                    <p id="lastName-error" className="text-sm text-red-300">
                      {errors.lastName}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white/80">
                    Email address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={errors.email ? "border-red-400" : ""}
                  />
                  {errors.email ? (
                    <p id="email-error" className="text-sm text-red-300">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-white/80">
                    Phone number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={errors.phone ? "border-red-400" : ""}
                  />
                  {errors.phone ? (
                    <p id="phone-error" className="text-sm text-red-300">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm text-white/80">
                  Service needed
                </label>
                <Select value={formData.service} onValueChange={handleServiceChange}>
                  <SelectTrigger
                    id="service"
                    aria-label="Select a service"
                    aria-invalid={Boolean(errors.service)}
                    className={`w-full ${errors.service ? "border-red-400" : ""}`}
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service ? (
                  <p id="service-error" className="text-sm text-red-300">
                    {errors.service}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-white/80">
                  Project details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className={errors.message ? "min-h-[200px] border-red-400" : "min-h-[200px]"}
                  placeholder="Tell me about your project, goals, and timeline"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : "message-help"}
                />
                <div className="flex items-center justify-between gap-4 text-sm text-white/50">
                  <p id="message-help">Minimum 20 characters.</p>
                  <p>{formData.message.length}/1000</p>
                </div>
                {errors.message ? (
                  <p id="message-error" className="text-sm text-red-300">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <Button
                type="submit"
                size="md"
                className="max-w-44"
              >
                Open Gmail
              </Button>
            </form>
          </div>

          <div className="order-1 mb-8 flex flex-1 items-start xl:order-none xl:mb-0 xl:justify-end">
            <div className="w-full max-w-[420px] space-y-6">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-md">
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent/90">
                  Availability
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  Freelance, product collaboration, and backend-heavy roles.
                </h3>
                <p className="mt-3 text-white/60">
                  Best for discussions around Flask APIs, full-stack products,
                  database-backed systems, and workflow-driven platforms.
                </p>
              </div>

              <address className="not-italic rounded-[32px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md">
              <ul className="flex flex-col gap-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.title} className="flex items-center gap-6">
                      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-accent xl:h-[72px] xl:w-[72px]">
                        <div className="text-[28px]" aria-hidden="true">
                          <Icon />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-xl transition-colors hover:text-accent focus:text-accent focus:outline-none"
                          >
                            {item.description}
                          </a>
                        ) : (
                          <p className="text-xl text-white">{item.description}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </address>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
