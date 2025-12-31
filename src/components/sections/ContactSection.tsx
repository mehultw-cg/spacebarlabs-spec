"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, ContactFormValues } from "@/lib/data/about";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
  });

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
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Ready to launch your project? Send us a signal.
          </p>
        </div>

        {/* MacOS Window Card */}
        <div className="rounded-xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl shadow-2xl dark:shadow-xl dark:shadow-neutral-900/30 overflow-hidden">
          {/* Window Header */}
          <div className="h-10 bg-neutral-100/50 dark:bg-white/5 border-b border-neutral-200 dark:border-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-4 text-xs text-neutral-500 font-medium">New Message</div>
          </div>

          {/* Window Content */}
          <div className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label htmlFor="name" className="text-sm my-2 font-medium text-neutral-700 dark:text-neutral-300">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    className={cn(
                      "w-full my-2 px-4 py-2 rounded-md bg-neutral-100/20 dark:bg-black/30 border border-neutral-200 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all",
                      errors.name && "border-red-500 focus:ring-red-500/50"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    className={cn(
                      "w-full my-2 px-4 py-2 rounded-md bg-neutral-100/20 dark:bg-black/30 border border-neutral-200 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all",
                      errors.email && "border-red-500 focus:ring-red-500/50"
                    )}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  className={cn(
                    "w-full my-2 px-4 py-2 rounded-md bg-neutral-100/20 dark:bg-black/30 border border-neutral-200 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all",
                    errors.subject && "border-red-500 focus:ring-red-500/50"
                  )}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="text-xs text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className={cn(
                    "w-full my-2 px-4 py-2 rounded-md bg-neutral-100/20 dark:bg-black/30 border border-neutral-200 dark:border-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none",
                    errors.message && "border-red-500 focus:ring-red-500/50"
                  )}
                  placeholder="Tell us about your idea..."
                />
                {errors.message && (
                  <p className="text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              <div className="flex justify-end">
                <RainbowButton
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full"
                  variant="outline"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </RainbowButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
