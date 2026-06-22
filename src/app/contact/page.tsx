"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Mail, Phone, Calendar, Send } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDirectChat, setIsDirectChat] = useState(false);
  const [formData, setFormData] = useState({
    day: "Monday",
    time: "11:30 am",
  });

  const getAvailableTimes = (day: string) => {
    if (day === "Sunday") {
      return ["9:00 am", "10:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm"];
    }
    return ["11:30 am", "3:30 pm", "6:30 pm", "9:30 pm"];
  };

  const handleDayChange = (selectedDay: string) => {
    const isSunday = selectedDay === "Sunday";
    const defaultTime = isSunday ? "9:00 am" : "11:30 am";
    setFormData((prev) => ({
      ...prev,
      day: selectedDay,
      time: defaultTime,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDirectChat(false);

    const predefinedMessage = `Hello Selio Marketing Co,

I would like to schedule a strategic consultation.

*Preferred Slot:* ${formData.day} at ${formData.time}`;

    const encodedMessage = encodeURIComponent(predefinedMessage);
    const whatsappUrl = `https://wa.me/971558680335?text=${encodedMessage}`;

    // Open WhatsApp lead in a new window/tab
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  const handleDirectChat = () => {
    setIsDirectChat(true);

    const predefinedMessage = `Hello Selio Marketing Co,

I would like to schedule a strategic consultation.`;

    const encodedMessage = encodeURIComponent(predefinedMessage);
    const whatsappUrl = `https://wa.me/971558680335?text=${encodedMessage}`;

    // Open WhatsApp lead in a new window/tab
    window.open(whatsappUrl, "_blank");
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
              Ready to scale your brand? Select your preferred consultation day and time slot to start a conversation directly via WhatsApp.
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
                    className="text-gray-400 hover:text-brand-violet transition-colors font-medium"
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
                    href="tel:+971558680335"
                    className="text-gray-400 hover:text-brand-cyan transition-colors font-medium"
                  >
                    +91 73062 60004
                  </a>
                </div>
              </div>
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
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-md relative overflow-hidden">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="border-b border-white/5 pb-4">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Schedule a Consultation</h3>
                    <p className="text-gray-400 text-sm">Select your day and preferred time slot to proceed to WhatsApp booking.</p>
                  </div>

                  {/* Booking Slots */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-1.5">
                        <Calendar size={16} className="text-brand-cyan" />
                        Select Day
                      </label>
                      <select
                        value={formData.day}
                        onChange={(e) => handleDayChange(e.target.value)}
                        className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-violet transition-colors cursor-pointer"
                      >
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
                          <option key={d} value={d} className="bg-brand-charcoal text-white">
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Available Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-brand-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-violet transition-colors cursor-pointer"
                      >
                        {getAvailableTimes(formData.day).map((t) => (
                          <option key={t} value={t} className="bg-brand-charcoal text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit button & Direct Chat */}
                  <div className="space-y-4 pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-cyan text-brand-onyx font-bold rounded-xl hover:bg-brand-cyan/90 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer text-base shadow-[0_4px_20px_rgba(0,229,255,0.25)] font-semibold"
                    >
                      <Send size={18} />
                      Book & Send to WhatsApp
                    </button>

                    <div className="flex items-center justify-center">
                      <span className="w-1/3 h-[1px] bg-white/10"></span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest px-3 font-bold">Or</span>
                      <span className="w-1/3 h-[1px] bg-white/10"></span>
                    </div>

                    <button
                      type="button"
                      onClick={handleDirectChat}
                      className="w-full py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer text-base font-semibold"
                    >
                      Chat Directly on WhatsApp
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                    <CheckCircle2 size={40} className="text-brand-cyan" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-4">Redirecting...</h3>
                  <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                    {isDirectChat ? (
                      <>We are redirecting you to WhatsApp to start your strategic consultation chat directly.</>
                    ) : (
                      <>
                        Your preferences have been saved, and we are redirecting you to WhatsApp to complete your slot booking at{" "}
                        <strong className="text-white">{formData.day} ({formData.time})</strong>.
                      </>
                    )}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                      }}
                      className="px-6 py-3 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all text-sm cursor-pointer font-semibold"
                    >
                      {isDirectChat ? "Go Back" : "Change Preferences"}
                    </button>
                    <a
                      href={
                        isDirectChat
                          ? `https://wa.me/971558680335?text=${encodeURIComponent(
                              `Hello Selio Marketing Co,\n\nI would like to schedule a strategic consultation.`
                            )}`
                          : `https://wa.me/971558680335?text=${encodeURIComponent(
                              `Hello Selio Marketing Co,\n\nI would like to schedule a strategic consultation.\n\n*Preferred Slot:* ${formData.day} at ${formData.time}`
                            )}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-brand-violet text-white font-bold rounded-xl hover:bg-brand-violet/90 transition-all text-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_4px_15px_rgba(138,43,226,0.3)] font-semibold"
                    >
                      Re-open WhatsApp
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


