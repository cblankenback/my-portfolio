import React, { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwpobzqz'; // Updated to user's actual Formspree endpoint

function validate(form: { name: string; email: string; message: string }) {
  const errors: { [key: string]: string } = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.message.trim()) errors.message = 'Message is required.';
  return errors;
}

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center min-h-[60vh]" id="contact">
      <div className="w-full max-w-lg mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-blue-100">
        <h2 className="text-4xl font-bold text-blue-700 mb-2 text-center">Contact</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">Feel free to reach out for collaborations or just a friendly hello!</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={`p-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 placeholder-gray-400 transition`}
            />
            {errors.name && <span className="text-red-500 text-sm pl-1">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={`p-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 placeholder-gray-400 transition`}
            />
            {errors.email && <span className="text-red-500 text-sm pl-1">{errors.email}</span>}
          </div>
          <div className="flex flex-col gap-1">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className={`p-3 rounded-lg border ${errors.message ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 placeholder-gray-400 transition`}
            />
            {errors.message && <span className="text-red-500 text-sm pl-1">{errors.message}</span>}
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-fuchsia-500 text-white rounded-lg shadow-lg hover:from-blue-700 hover:to-fuchsia-600 transition font-semibold disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status === 'success' && (
          <div className="mt-4 text-green-600 text-center font-medium">Thank you! Your message has been sent.</div>
        )}
        {status === 'error' && (
          <div className="mt-4 text-red-600 text-center font-medium">Oops! Something went wrong. Please try again.</div>
        )}
        {/* Divider and alternative contact options */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-gray-200" />
          <span className="mx-4 text-gray-400 font-medium">or</span>
          <div className="flex-grow border-t border-gray-200" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:blan0218@algonquinlive.com"
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold shadow transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-5 h-5" />
            Send me an Email
          </a>
          <a
            href="https://www.linkedin.com/in/christianblankenback/"
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold shadow transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 