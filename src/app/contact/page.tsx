"use client";

import { useState } from "react";
import { Metadata } from "next";
import { CustomImage } from "@/components/ui/Image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Recherche — book a free design visit, request a brochure, or ask us a question about your project.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Workshop",
    details: "Unit 12, Park Royal Industrial Estate, London NW10 7JF",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+44 203 561 0820",
    href: "tel:+442035610820",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@therecherche.co.uk",
    href: "mailto:info@therecherche.co.uk",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    projectType: "",
    roomSize: "",
    style: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    postcode: "",
    message: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          projectType: "", roomSize: "", style: "", timeline: "", budget: "",
          name: "", email: "", phone: "", postcode: "", message: "",
        });
        setCurrentStep(1);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <CustomImage
            src="/heroes/contact-hero.jpg"
            alt="Contact The Recherche"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-12 md:pb-20">
          <div className="max-w-xl">
            <p className="font-ui text-xs text-brass mb-2">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-[1.1]">
              Start Your Project
            </h1>
            <p className="text-chalk text-lg font-body leading-relaxed">
              Book a free design visit, request a brochure, or simply ask a question — we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 md:py-20 bg-paper">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl md:text-3xl font-light text-charcoal mb-8">
                Let's Talk
              </h2>

              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-none border border-steel group-hover:border-brass transition-colors flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-charcoal group-hover:text-brass transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-ui text-xs text-brass mb-1">{info.title}</p>
                      <p className="text-warm-grey font-body leading-relaxed group-hover:text-brass transition-colors">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Key Details */}
              <div className="border-t border-steel pt-8 space-y-4">
                <div>
                  <p className="font-ui text-xs text-brass mb-1">Minimum Project</p>
                  <p className="text-warm-grey font-body">£2,500 + VAT (subject to specification, size & access)</p>
                </div>
                <div>
                  <p className="font-ui text-xs text-brass mb-1">Service Area</p>
                  <p className="text-warm-grey font-body">Central, North & West London + Home Counties</p>
                </div>
                <div>
                  <p className="font-ui text-xs text-brass mb-1">Workshop Hours</p>
                  <p className="text-warm-grey font-body">Mon–Fri 8:30am–6pm, Sat 9am–1pm</p>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2 bg-charcoal p-6 md:p-8">
              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-none border-2 border-sage mb-6">
                    <Send className="h-8 w-8 text-sage" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-4">
                    Thank you for your enquiry
                  </h3>
                  <p className="text-chalk font-body leading-relaxed max-w-md mx-auto mb-8">
                    We've received your details and will be in touch within one working day to discuss your project.
                  </p>
                  <Button variant="secondary" onClick={() => setSubmitStatus("idle")}>
                    Send Another Enquiry
                  </Button>
                </div>
              ) : submitStatus === "error" ? (
                <div className="text-center py-12">
                  <h3 className="font-display text-2xl md:text-3xl font-light text-white mb-4">
                    Something went wrong
                  </h3>
                  <p className="text-chalk font-body leading-relaxed max-w-md mx-auto mb-8">
                    Please try again or call us directly on +44 203 561 0820.
                  </p>
                  <Button variant="primary" onClick={() => setSubmitStatus("idle")}>
                    Try Again
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Progress Indicator */}
                  <div className="flex items-center gap-2 mb-8" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={3}>
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex-1 flex items-center gap-2">
                        <div className={cn(
                          "flex h-1 transition-colors",
                          step <= currentStep ? "bg-brass" : "bg-mid-timber"
                        )} />
                        {step < 3 && <span className="font-ui text-[10px] text-warm-grey hidden sm:block">Step {step}</span>}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Project Type */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="projectType" className="font-ui text-xs text-brass mb-2 block">
                          What are you planning?
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-dark-oak border border-steel focus:border-brass focus:outline-none text-white font-body placeholder:text-warm-grey"
                        >
                          <option value="">Select project type</option>
                          <option value="kitchen">Bespoke Kitchen</option>
                          <option value="wardrobe">Fitted Wardrobe</option>
                          <option value="other">Other Joinery (Media Wall, Home Office, Utility, Boot Room)</option>
                          <option value="unsure">Not Sure Yet</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="roomSize" className="font-ui text-xs text-brass mb-2 block">
                          Approximate Room Size
                        </label>
                        <select
                          id="roomSize"
                          name="roomSize"
                          value={formData.roomSize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-oak border border-steel focus:border-brass focus:outline-none text-white font-body placeholder:text-warm-grey"
                        >
                          <option value="">Select size</option>
                          <option value="small">Small (under 10m²)</option>
                          <option value="medium">Medium (10–20m²)</option>
                          <option value="large">Large (20–40m²)</option>
                          <option value="xlarge">Very Large (40m²+)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="style" className="font-ui text-xs text-brass mb-2 block">
                          Style Preference
                        </label>
                        <select
                          id="style"
                          name="style"
                          value={formData.style}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-oak border border-steel focus:border-brass focus:outline-none text-white font-body placeholder:text-warm-grey"
                        >
                          <option value="">Select style</option>
                          <option value="contemporary">Contemporary / Modern</option>
                          <option value="traditional">Traditional / Shaker</option>
                          <option value="painted">Painted / Colour</option>
                          <option value="mixed">Mixed / Eclectic</option>
                          <option value="unsure">Open to Suggestions</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="timeline" className="font-ui text-xs text-brass mb-2 block">
                          When are you looking to start?
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-oak border border-steel focus:border-brass focus:outline-none text-white font-body placeholder:text-warm-grey"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-3">1–3 Months</option>
                          <option value="3-6">3–6 Months</option>
                          <option value="6-12">6–12 Months</option>
                          <option value="planning">Just Planning</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="font-ui text-xs text-brass mb-2 block">
                          Indicative Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-dark-oak border border-steel focus:border-brass focus:outline-none text-white font-body placeholder:text-warm-grey"
                        >
                          <option value="">Select budget</option>
                          <option value="2.5-10">£2,500 – £10,000</option>
                          <option value="10-25">£10,000 – £25,000</option>
                          <option value="25-50">£25,000 – £50,000</option>
                          <option value="50-100">£50,000 – £100,000</option>
                          <option value="100+">£100,000+</option>
                          <option value="unsure">Prefer to Discuss</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="font-ui text-xs text-brass mb-2 block">
                          Tell Us More (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-dark-oak border border-steel focus:border-brass focus:outline-none text-white font-body placeholder:text-warm-grey resize-none"
                          placeholder="Any specific requirements, layout challenges, or inspiration images you'd like to share?"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Details */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="font-ui text-xs text-brass mb-2 block">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-dark-oak border border-steel focus:border-brass focus:outline-none text-white font-body placeholder:text-warm-grey"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="font-ui text-xs text-brass mb-2 block">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-dark-oak border border-steel focus:border-brass focus:outline-none text-white font-body placeholder:text-warm-grey"
                            placeholder="email@domain.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="font-ui text-xs text-brass mb-2 block">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-dark-oak border border-steel focus:border-brass focus:outline-none text-white font-body placeholder:text-warm-grey"
                            placeholder="+44 20 1234 5678"
                          />
                        </div>
                        <div>
                          <label htmlFor="postcode" className="font-ui text-xs text-brass mb-2 block">
                            Postcode *
                          </label>
                          <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-dark-oak border border-steel focus:border-brass focus:outline-none text-white font-body placeholder:text-warm-grey"
                            placeholder="SW1A 1AA"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4 border-t border-mid-timber mt-8">
                    {currentStep > 1 && (
                      <Button variant="ghost" onClick={prevStep}>
                        Previous
                      </Button>
                    )}
                    {currentStep < 3 ? (
                      <Button variant="arrow" onClick={nextStep} type="button">
                        Next
                      </Button>
                    ) : (
                      <Button variant="arrow" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Submit Enquiry"}
                      </Button>
                    )}
                  </div>

                  <p className="text-xs text-warm-grey/60 text-center">
                    * Required fields. We'll only use your details to respond to your enquiry.
                    <a href="/privacy" className="underline hover:text-brass transition-colors ml-1">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Brochure CTA */}
      <section className="py-16 md:py-24 bg-dark-oak" aria-label="Brochure request">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-6 max-w-2xl mx-auto">
            Prefer to browse first?
          </h2>
          <p className="text-chalk text-base md:text-lg mb-10 max-w-xl mx-auto font-body leading-relaxed">
            Download our full brochure with kitchen and wardrobe collections, material samples, and process overview.
          </p>
          <Button variant="secondary" asChild size="lg">
            <a href="/contact/brochure">Download Brochure (PDF) →</a>
          </Button>
        </div>
      </section>
    </>
  );
}