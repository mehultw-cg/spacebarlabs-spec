"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, ContactFormValues } from "@/lib/data/about";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { spacebarFont } from "@/app/page";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
// ... imports

export function ContactSection() {
  const searchParams = useSearchParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      subject: "PING_HELLO"
    }
  });

  const protocol = watch("subject");

  const placeholders: Record<string, string> = {
    "PING_HELLO": "Brief us on your mission parameters...",
    "INIT_MIGRATION": "Tell us about your current infrastructure and migration goals...",
    "REQ_AUDIT": "Describe the scope of the system to be audited...",
    "START_BUILD": "What are you building? Share your vision and requirements...",
  };

  useEffect(() => {
    const subject = searchParams.get("subject");
    if (subject) {
      setValue("subject", subject);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent text-black dark:text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-(--color-1)/20 rounded-full blur-[3.5rem]" />
        <div className="absolute top-[70%] left-[25%] w-64 h-64 bg-(--color-5)/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-[2%] right-1/4 w-96 h-96 bg-(--color-4)/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className={cn("text-4xl font-bold mb-4", spacebarFont.className)}>Get in Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Ready to launch your project? Send us a signal.
          </p>
        </div>

        {/* MacOS Window Card */}
        <div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-xl shadow-2xl dark:shadow-xl dark:shadow-neutral-900/30 overflow-hidden">
          {/* Window Header */}
          <div className="h-10 bg-neutral-100/50 dark:bg-black/60 border-b border-neutral-200 dark:border-white/5 flex items-center justify-between px-4 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs text-neutral-500 font-mono opacity-70 hidden sm:block">secure_uplink@spacebar-labs:~/connect</div>
              <div className="text-[10px] text-emerald-500/80 font-mono tracking-tight">Connection: Encrypted (TLS 1.3)</div>
          </div>

          {/* Window Content */}
          <div className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label htmlFor="name" className="text-sm my-2 font-medium text-neutral-700 dark:text-neutral-300 font-mono">
                    Identity (Name)
                  </label>
                  <input
                    {...register("name")}
                    className={cn(
                      "w-full my-2 px-4 py-2 rounded-md bg-neutral-100/20 dark:bg-black/30 border border-neutral-200 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-mono text-sm",
                      errors.name && "border-red-500 focus:ring-red-500/50"
                    )}
                    placeholder="John Doe (CEO)"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 font-mono">
                    Coordinates (Email)
                  </label>
                  <input
                    {...register("email")}
                    className={cn(
                      "w-full my-2 px-4 py-2 rounded-md bg-neutral-100/20 dark:bg-black/30 border border-neutral-200 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-mono text-sm",
                      errors.email && "border-red-500 focus:ring-red-500/50"
                    )}
                    placeholder="john.doe@company.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 font-mono">
                  Protocol
                </label>
                <div className="relative">
                  <select
                    {...register("subject")}
                    defaultValue="PING_HELLO"
                    className={cn(
                      "w-full my-2 px-4 py-2 rounded-md bg-neutral-100/20 dark:bg-black/30 border border-neutral-200 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-mono text-sm appearance-none",
                      errors.subject && "border-red-500 focus:ring-red-500/50"
                    )}
                  >
                    <option value="PING_HELLO">PING_HELLO</option>
                    <option value="INIT_MIGRATION">INIT_MIGRATION</option>
                    <option value="REQ_AUDIT">REQ_AUDIT</option>
                    <option value="START_BUILD">START_BUILD</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                {errors.subject && (
                  <p className="text-xs text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 font-mono">
                  Payload (Message)
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className={cn(
                    "w-full my-2 px-4 py-2 rounded-md bg-neutral-100/20 dark:bg-black/30 border border-neutral-200 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none font-mono text-sm",
                    errors.message && "border-red-500 focus:ring-red-500/50"
                  )}
                  placeholder={placeholders[protocol] || placeholders["PING_HELLO"]}
                />
                {errors.message && (
                  <p className="text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              <div className="flex justify-between items-center pt-2">
                 <p className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">0% Spam Probability. We respect your inbox.</p>
                 <RainbowButton
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full font-mono text-sm"
                  variant="outline"
                >
                  {isSubmitting ? "Transmitting..." : "Transmit Securely"}
                </RainbowButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
