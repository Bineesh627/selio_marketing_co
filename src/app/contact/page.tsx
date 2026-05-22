"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MapPin, Mail, Phone, Calendar } from "lucide-react";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="pt-32 pb-20 relative overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] mix-blend-screen" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="w-full lg:w-5/12">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">Talk.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Ready to scale your brand? Fill out the form or reach out to us directly to schedule a strategic consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-violet shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <a
                    href="mailto:selioagencyy@gmail.com"
                    className="text-gray-400 hover:text-brand-violet transition-colors"
                  >
                    selioagencyy@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <a
                    href="tel:+917306260004"
                    className="text-gray-400 hover:text-brand-cyan transition-colors"
                  >
                    +91 73062 60004
                  </a>
                </div>
              </div>
              {/* <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-amber shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visit Us</h4>
                  <p className="text-gray-400">120 Digital Avenue, Suite 400<br/>San Francisco, CA 94103</p>
                </div>
              </div> */}
            </div>
            
            {/* Mock Map */}
            <div className="mt-12 w-full h-48 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-luminosity"></div>
              <div className="w-10 h-10 bg-brand-violet rounded-full flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(138,43,226,0.5)]">
                <MapPin size={18} className="text-white" />
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-md">
              {!isSubmitted ? (
                <>
                  {/* Progress Indicator */}
                  <div className="flex items-center space-x-2 mb-10">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= num ? 'bg-brand-violet text-white' : 'bg-white/10 text-gray-500'}`}>
                          {num}
                        </div>
                        {num < 3 && <div className={`w-12 h-1 mx-2 rounded-full transition-colors ${step > num ? 'bg-brand-violet' : 'bg-white/10'}`} />}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                          <h3 className="text-2xl font-bold text-white mb-6">What's your focus?</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {["Branding", "Web Development", "SEO / Marketing", "Video Production", "Full Service", "Other"].map((service) => (
                              <label key={service} className="relative flex cursor-pointer rounded-xl border border-white/10 bg-white/5 p-4 focus:outline-none hover:bg-white/10 transition-colors">
                                <input type="radio" name="service" className="peer sr-only" />
                                <span className="text-white font-medium">{service}</span>
                                <span className="absolute inset-0 rounded-xl border-2 border-transparent peer-checked:border-brand-violet"></span>
                              </label>
                            ))}
                          </div>
                          <div className="flex justify-end">
                            <button type="button" onClick={nextStep} className="px-8 py-3 bg-brand-violet text-white font-bold rounded-full hover:bg-brand-violet/90 transition-all">Next Step</button>
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                          <h3 className="text-2xl font-bold text-white mb-6">Your Details</h3>
                          <div className="space-y-4 mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-violet transition-colors" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                                <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-violet transition-colors" />
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                              <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-violet transition-colors" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-violet transition-colors" />
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <button type="button" onClick={prevStep} className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all">Back</button>
                            <button type="button" onClick={nextStep} className="px-8 py-3 bg-brand-violet text-white font-bold rounded-full hover:bg-brand-violet/90 transition-all">Next Step</button>
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                          <h3 className="text-2xl font-bold text-white mb-6">Schedule a Call (Optional)</h3>
                          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-center">
                            <Calendar className="w-12 h-12 text-brand-cyan mx-auto mb-4" />
                            <h4 className="text-lg text-white font-bold mb-2">Pick a time that works for you</h4>
                            <p className="text-gray-400 text-sm mb-6">Select a 30-minute slot for your strategic consultation.</p>
                            <button type="button" className="px-6 py-3 border border-brand-cyan text-brand-cyan font-bold rounded-full hover:bg-brand-cyan hover:text-brand-onyx transition-colors">
                              Open Calendar
                            </button>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Anything else we should know?</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-violet transition-colors mb-8"></textarea>
                          </div>

                          <div className="flex justify-between">
                            <button type="button" onClick={prevStep} className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all">Back</button>
                            <button type="submit" className="px-8 py-3 bg-brand-amber text-brand-onyx font-bold rounded-full hover:bg-brand-amber/90 transition-all">Submit Request</button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-4">Request Sent!</h3>
                  <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                    Thank you for reaching out. One of our strategists will be in touch with you within 24 hours.
                  </p>
                  <button onClick={() => {setStep(1); setIsSubmitted(false);}} className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                    Send another request
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
