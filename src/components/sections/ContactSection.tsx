"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, ContactFormValues } from "@/lib/data/about";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { headingFont, nasaFont } from "@/app/page";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import confetti from "canvas-confetti";
import { ShieldCheck } from "lucide-react";

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

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const protocol = watch("subject");

  const TEMPLATES: Record<string, string> = {
    "PING_HELLO": "Hi Aurorys,\n\nI've been following your work and really like your approach. I wanted to reach out regarding my current setup.\n\nMy product is essentially _______, and I'd love some advice on scalability and architecture. Looking forward to chatting!",
    "INIT_MIGRATION": "Hi Aurorys,\n\nOur team is looking to move away from _______ to a more sovereign infrastructure.\n\nOur current stack is mostly _______, and we want to make sure we do this right (zero downtime, no data loss). Can you help us plan this transition!",
    "REQ_AUDIT": "Hi Aurorys,\n\nWe need a fresh pair of eyes on our system, specifically _______.\n\nWe're concerned about potential vulnerabilities and compliance issues. When would you be available for an audit?",
    "START_BUILD": "Hi Aurorys,\n\nYour approach to security caught my eye. I'm building a new platform for _______, and I want to get the foundation right from day one.\n\nI'd love your help designing a secure architecture and maybe even implementing the core. Let's build something resilient.",
  };

  const placeholders: Record<string, string> = {
    "PING_HELLO": "Brief us on your mission parameters...",
    "INIT_MIGRATION": "Tell us about your current infrastructure and migration goals...",
    "REQ_AUDIT": "Describe the scope of the system to be audited...",
    "START_BUILD": "What are you building? Share your vision and requirements...",
  };

  useEffect(() => {
    const subject = searchParams.get("subject");
    const validSubjects = ["PING_HELLO", "INIT_MIGRATION", "REQ_AUDIT", "START_BUILD"];
    
    // 1. Handle Subject
    if (subject && validSubjects.includes(subject)) {
      setValue("subject", subject as any);
      
      // 2. Handle Message (Priority: URL Param > Template > Empty)
      const messageParam = searchParams.get("message");
      if (messageParam) {
           setValue("message", messageParam);
      } else {
           // Use template if no specific message is passed
           setValue("message", TEMPLATES[subject]);
      }
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    if (!turnstileToken) {
       alert("Security verification is pending. Please wait.");
       return;
    }

    try {
      const payload = { ...data, turnstileToken };
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to transmit message');
      }

      // Trigger standard magic UI confetti wrapper via canvas-confetti
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      }

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Transmission Error:", error);
      alert("Failed to transmit securely. Please try routing directly via email.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent text-black dark:text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[radial-gradient(circle,rgba(var(--color-1-rgb),0.15)_0%,transparent_70%)]" />
        <div className="absolute top-[70%] left-[25%] w-[30rem] h-[30rem] bg-[radial-gradient(circle,rgba(var(--color-5-rgb),0.1)_0%,transparent_70%)]" />
        <div className="absolute -bottom-[2%] right-1/4 w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(var(--color-4-rgb),0.1)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className={cn("text-4xl md:text-5xl font-bold mb-4", nasaFont.className)}>Get in Touch</h2>
          <p className="text-neutral-200 dark:text-neutral-200 italic text-shadow-sm/30">
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
              <div className="text-xs text-neutral-700 dark:text-neutral-500 font-mono opacity-70 hidden sm:block">secure_uplink@aurorys-labs:~/connect</div>
              <div className="text-[10px] text-emerald-700/80 dark:text-emerald-500/80 font-mono tracking-tight">Connection: Encrypted (TLS 1.3)</div>
          </div>

          {/* Window Content */}
          <div className="relative p-8 min-h-[400px]">
              
              {/* Success Overlay */}
              {isSuccess && (
                <div className="absolute inset-0 z-20 bg-emerald-950/40 dark:bg-emerald-950/70 backdrop-blur-lg flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500 rounded-b-xl border-t border-white/5">
                   <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)] inline-flex animate-bounce">
                      <ShieldCheck className="w-8 h-8" />
                   </div>
                   <h3 className={cn("text-2xl font-bold text-white mb-2 shadow-black drop-shadow-md", headingFont.className)}>Transmission Successful</h3>
                   <p className="text-emerald-100/90 font-mono text-sm max-w-sm leading-relaxed mb-8 drop-shadow-md">
                      Secure channel established. Acknowledgment receipt dispatched to your coordinates. We will respond within 48 hours.
                   </p>
                   <RainbowButton onClick={() => setIsSuccess(false)} variant="outline" className="text-xs px-6 py-2 h-auto opacity-80 hover:opacity-100">
                      Reset Terminal
                   </RainbowButton>
                </div>
              )}

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
                  data-lenis-prevent
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

              <div className="flex flex-col gap-4 pt-2">
                 <p className="text-sm text-emerald-800 dark:text-emerald-500 font-mono">
                   Prefer establishing a direct protocol? Route your secure comms to <a href="mailto:hi@auroryslabs.com" className="font-semibold underline underline-offset-2 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">hi@auroryslabs.com</a>
                 </p>
                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                   <div className="flex flex-col gap-1">
                      <Turnstile 
                         siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"} 
                         onSuccess={(token) => setTurnstileToken(token)}
                         options={{ theme: "auto" }}
                      />
                      <p className="text-xs text-neutral-700 dark:text-neutral-500 font-mono pl-1">0% Spam Probability. Secured by Turnstile.</p>
                   </div>
                   <RainbowButton
                    type="submit"
                    disabled={isSubmitting || !turnstileToken}
                    className="rounded-full font-mono text-sm w-full sm:w-auto"
                    variant="outline"
                  >
                    {isSubmitting ? "Transmitting..." : "Transmit Securely"}
                  </RainbowButton>
                 </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
