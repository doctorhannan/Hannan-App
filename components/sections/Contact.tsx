import React, { useState } from "react";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        const name = (form.elements.namedItem("entry.2005620554") as HTMLInputElement).value.trim();
        const email = (form.elements.namedItem("entry.1045781291") as HTMLInputElement).value.trim();
        const project = (form.elements.namedItem("entry.1065046570") as HTMLInputElement).value.trim();
        const message = (form.elements.namedItem("entry.1166974658") as HTMLTextAreaElement).value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        setLoading(true);

        // ✅ Create hidden form for Google Forms POST
        const googleForm = document.createElement("form");
        googleForm.method = "POST";
        googleForm.action =
            "https://docs.google.com/forms/d/e/1FAIpQLSetqOJX7NS2eM13Wvmm0ng9Kqjry4Ma_aKC8Cpbqgjoxgb48w/formResponse";

        googleForm.target = "hidden_iframe";

        const fields: Record<string, string> = {
            "entry.2005620554": name,
            "entry.1045781291": email,
            "entry.1065046570": project,
            "entry.1166974658": message,
        };

        Object.entries(fields).forEach(([key, value]) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = value;
            googleForm.appendChild(input);
        });

        document.body.appendChild(googleForm);
        googleForm.submit();
        document.body.removeChild(googleForm);

        form.reset();
        setSubmitted(true);
        setLoading(false);

        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-radial from-indigo-500/5 via-transparent to-transparent bg-navy-900"
        >
            {/* ✅ Hidden iframe (prevents redirect) */}
            <iframe name="hidden_iframe" style={{ display: "none" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 bg-indigo-500/10 border border-indigo-500/25">
                        <span className="text-indigo-400 text-sm font-medium">
                            Get In Touch
                        </span>
                    </div>

                    <h2 className="font-heading text-4xl font-bold text-white mb-4">
                        Start Your <span className="gradient-text">AI Journey</span>
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto">
                        Have a project in mind? Let's discuss how AI automation can transform your business operations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading text-white text-xl font-bold mb-6">
                            Let's Connect
                        </h3>

                        <div className="space-y-4 mb-8">
                            {[
                                { icon: "📧", label: "Email", value: "doctorhannan447@gmail.com" },
                                { icon: "💬", label: "WhatsApp", value: "+92 3104737764" },
                                { icon: "⏰", label: "Response Time", value: "Within 24 hours" },
                                { icon: "🌍", label: "Availability", value: "Remote — Worldwide" },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 glass-card rounded-2xl p-4 border border-indigo-500/15 bg-white/5 backdrop-blur-md"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-gray-400 text-xs">
                                            {item.label}
                                        </div>
                                        <div className="text-white text-sm font-medium">
                                            {item.value}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="glass-card rounded-2xl p-8 border border-indigo-500/20 bg-white/5 backdrop-blur-md">
                        <form
                            className="space-y-5"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.currentTarget;
                                const name = (form.elements[0] as HTMLInputElement).value.trim();
                                const email = (form.elements[1] as HTMLInputElement).value.trim();
                                const project = (form.elements[2] as HTMLInputElement).value.trim();
                                const message = (form.elements[3] as HTMLTextAreaElement).value.trim();

                                // Build Google Form prefill URL
                                const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSetqOJX7NS2eM13Wvmm0ng9Kqjry4Ma_aKC8Cpbqgjoxgb48w/viewform?usp=pp_url&entry.2005620554=${encodeURIComponent(
                                    name
                                )}&entry.1045781291=${encodeURIComponent(email)}&entry.1065046570=${encodeURIComponent(
                                    project
                                )}&entry.1166974658=${encodeURIComponent(message)}`;

                                // Open Google Form in a new tab
                                window.open(formURL, "_blank");

                                // Optionally, reset your form
                                form.reset();
                            }}
                        >
                            {/* Name and Email */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-gray-400 text-xs font-medium mb-2 block">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Smith"
                                        required
                                        className="contact-input w-full px-4 py-3 rounded-md text-sm bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/60"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-400 text-xs font-medium mb-2 block">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        required
                                        className="contact-input w-full px-4 py-3 rounded-md text-sm bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/60"
                                    />
                                </div>
                            </div>

                            {/* Project Type */}
                            <div>
                                <label className="text-gray-400 text-xs font-medium mb-2 block">Project Type</label>
                                <input
                                    type="text"
                                    placeholder="AI Chatbot Development, CRM, etc."
                                    required
                                    className="contact-input w-full px-4 py-3 rounded-md text-sm bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/60"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-gray-400 text-xs font-medium mb-2 block">Message</label>
                                <textarea
                                    placeholder="Tell me about your project, goals, and timeline..."
                                    rows={5}
                                    required
                                    className="contact-input w-full px-4 py-3 rounded-md text-sm bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/60 resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-indigo-600 to-purple-700 w-full text-white font-bold py-4 rounded-md font-heading flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                                </svg>
                                Send Message
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;