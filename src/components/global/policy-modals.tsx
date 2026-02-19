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

export function PrivacyModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-white/70 dark:bg-black/60 backdrop-blur-xl border-neutral-200 dark:border-neutral-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">Privacy Policy</DialogTitle>
          <DialogDescription>Effective Date: {new Date().toLocaleDateString()}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-4">
          <p>
            At Spacebar Labs ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          
           <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">3. Contact Us</h3>
           <p>
             If you have questions or comments about this Privacy Policy, please contact us at privacy@spacebarlabs.com.
           </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function TermsModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-white/70 dark:bg-black/60 backdrop-blur-xl border-neutral-200 dark:border-neutral-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">Terms of Service</DialogTitle>
          <DialogDescription>Last Updated: {new Date().toLocaleDateString()}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-4">
           <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Spacebar Labs website (the "Service") operated by Spacebar Labs ("us", "we", or "our").
           </p>
           <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">1. Conditions of Use</h3>
           <p>
             By accessing this website we assume you accept these terms and conditions. Do not continue to use Spacebar Labs if you do not agree to take all of the terms and conditions stated on this page.
           </p>
           <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">2. Intellectual Property</h3>
           <p>
             The Service and its original content, features, and functionality are and will remain the exclusive property of Spacebar Labs and its licensors.
           </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CookieModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-white/70 dark:bg-black/60 backdrop-blur-xl border-neutral-200 dark:border-neutral-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">Cookie Policy</DialogTitle>
          <DialogDescription>Effective Date: {new Date().toLocaleDateString()}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-4">
           <p>
             This Cookie Policy explains what cookies are and how we use them. You should read this policy so you can understand what type of cookies we use, or the information we collect using cookies and how that information is used.
           </p>
           <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-6">What are Cookies?</h3>
           <p>
             Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.
           </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
