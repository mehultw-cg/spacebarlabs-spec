"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { privacyPolicy, termsOfService, cookiePolicy } from "../../lib/data/policies";

export function PrivacyModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent data-lenis-prevent className="w-[95vw] max-w-[95vw] max-h-[85vh] overflow-y-auto bg-white/70 dark:bg-black/60 backdrop-blur-xl border-neutral-200 dark:border-neutral-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">{privacyPolicy.title}</DialogTitle>
          <DialogDescription>Effective Date: {new Date().toLocaleDateString()}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-4">
          <div className="text-base">{privacyPolicy.intro}</div>
          {privacyPolicy.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">{section.title}</h3>
              <div>{section.content}</div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function TermsModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent data-lenis-prevent className="w-[95vw] max-w-[95vw] max-h-[85vh] overflow-y-auto bg-white/70 dark:bg-black/60 backdrop-blur-xl border-neutral-200 dark:border-neutral-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">{termsOfService.title}</DialogTitle>
          <DialogDescription>Last Updated: {new Date().toLocaleDateString()}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-4">
          <div className="text-base">{termsOfService.intro}</div>
          {termsOfService.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">{section.title}</h3>
              <div>{section.content}</div>
            </div>
          ))}
          
          <div className="my-8 h-px bg-neutral-200 dark:bg-neutral-800" />
          
          {termsOfService.legalDisclaimers.map((disclaimer, idx) => (
            <div key={`disclaimer-${idx}`} className="bg-neutral-100 dark:bg-neutral-900/50 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-md font-bold text-neutral-900 dark:text-white mb-2">{disclaimer.title}</h3>
              <div>{disclaimer.content}</div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CookieModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent data-lenis-prevent className="w-[95vw] max-w-[95vw] max-h-[85vh] overflow-y-auto bg-white/70 dark:bg-black/60 backdrop-blur-xl border-neutral-200 dark:border-neutral-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">{cookiePolicy.title}</DialogTitle>
          <DialogDescription>Effective Date: {new Date().toLocaleDateString()}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-4">
          <div className="text-base">{cookiePolicy.intro}</div>
          {cookiePolicy.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">{section.title}</h3>
              <div>{section.content}</div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
