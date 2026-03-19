'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/ui/animated-shader-hero';

const INSTAGRAM_URL = 'https://www.instagram.com/spentra.app';

const features = [
  {
    emoji: '💸',
    title: 'Expense Tracking',
    description: 'Tap to log what you spent. That\'s it. Spentra sorts it into categories so you always know where your money went.',
  },
  {
    emoji: '📈',
    title: 'Income Management',
    description: 'Whether it\'s your salary, a side gig, or a one-off payment, Spentra keeps track of everything coming in.',
  },
  {
    emoji: '👥',
    title: 'Group Splits',
    description: 'Going halves on dinner? Sharing rent? Add the expense, pick who was involved, and Spentra works out who owes what.',
  },
  {
    emoji: '📄',
    title: 'Monthly Reports',
    description: 'At the end of each month, generate a full PDF of your spending. Categories, totals, savings rate. Saved right to your phone.',
  },
  {
    emoji: '🎯',
    title: 'Savings Goals',
    description: 'Set a goal for something you\'re working towards. Spentra shows you how close you are every time you open the app.',
  },
  {
    emoji: '🔔',
    title: 'Smart Reminders',
    description: 'Set up your recurring bills once and Spentra will nudge you before they\'re due. No more late fees.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Log what you spend',
    description: 'Open the app, tap the plus button, enter the amount and pick a category. Done in under five seconds.',
  },
  {
    number: '02',
    title: 'Watch the picture form',
    description: 'Spentra groups everything automatically. After a week you\'ll already start to see patterns you never noticed before.',
  },
  {
    number: '03',
    title: 'Actually keep more money',
    description: 'When you can see exactly where it\'s going, it\'s surprisingly easy to change. Small adjustments add up fast.',
  },
];

const faqs = [
  {
    question: 'When is Spentra launching?',
    answer: 'We\'re putting the finishing touches on it right now. No exact date yet, but it\'s close. Follow us on Instagram and you\'ll be the first to know.',
  },
  {
    question: 'Will it cost anything?',
    answer: 'We\'re still working out the details, but our goal is to keep the core features completely free. No surprise charges.',
  },
  {
    question: 'What happens to my financial data?',
    answer: 'Your data is stored securely in your own account. We don\'t sell it, share it, or even look at it. Your finances are yours.',
  },
  {
    question: 'Which phones will it work on?',
    answer: 'Spentra is built for Android. If your phone is running Android 6.0 or newer, you\'re good to go.',
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#08080D] text-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero
        badge="Coming Soon to Android"
        headline={{ line1: 'Your Money,', line2: 'Mastered.' }}
        subtitle="Spentra helps you see exactly where your money is going. Log expenses in seconds, split bills with friends, work towards your savings goals. No spreadsheets needed."
        primaryButton={{ text: 'Follow on Instagram', href: INSTAGRAM_URL }}
        secondaryButton={{ text: 'See what it does', href: '#features' }}
      />

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-4">
              What it does
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Everything in{' '}
              <span className="bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent">
                one place.
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
              We built the things that actually matter for managing money day to day. Nothing more, nothing less.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/8 bg-white/3 hover:bg-indigo-500/8 hover:border-indigo-500/30 p-6 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{f.emoji}</div>
                <h3 className="text-lg font-semibold mb-2 text-white/90">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-4">
              How it works
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Three steps to actually{' '}
              <span className="bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent">
                understanding your money.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-black text-indigo-500/20 mb-4 leading-none">{step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-white/90">{step.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phone mockup ─────────────────────────────────────────────────── */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 to-[#08080D] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">

            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-4">
                Designed for Android
              </span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                Pure black. No eye strain.<br />
                <span className="bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent">
                  Even at 2 AM.
                </span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Spentra uses a true OLED dark design so it looks great on any Android phone. No blinding white screens, no clutter. Just your numbers, clean and clear.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow us for updates
              </a>
            </div>

            {/* Abstract phone mockup */}
            <div className="flex-shrink-0 relative w-56 h-96 md:w-64 md:h-[420px]">
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-indigo-500/30 bg-[#0F0F17] shadow-2xl shadow-indigo-500/10 overflow-hidden">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-10" />
                <div className="absolute inset-x-0 top-0 h-full flex flex-col pt-10 px-4 pb-4 gap-3">
                  <div className="flex justify-between items-center pt-3 pb-2">
                    <div className="w-16 h-3 rounded bg-white/20" />
                    <div className="w-7 h-7 rounded-full bg-indigo-500/40" />
                  </div>
                  <div className="rounded-2xl bg-indigo-500/20 border border-indigo-500/20 p-4">
                    <div className="w-16 h-2 rounded bg-white/20 mb-2" />
                    <div className="w-28 h-6 rounded bg-gradient-to-r from-indigo-300/60 to-violet-300/40" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[['Income','#10B981'],['Expenses','#F43F5E']].map(([label, color]) => (
                      <div key={label} className="rounded-xl bg-white/5 border border-white/8 p-3">
                        <div className="w-10 h-2 rounded mb-2" style={{ background: color + '40' }} />
                        <div className="w-14 h-3 rounded" style={{ background: color + '60' }} />
                      </div>
                    ))}
                  </div>
                  {[1,2,3].map(i => (
                    <div key={i} className="flex items-center gap-3 rounded-xl bg-white/4 border border-white/6 px-3 py-2.5">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/30 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="w-20 h-2 rounded bg-white/20 mb-1.5" />
                        <div className="w-12 h-1.5 rounded bg-white/10" />
                      </div>
                      <div className="w-12 h-2.5 rounded bg-indigo-400/40" />
                    </div>
                  ))}
                  <div className="mt-auto flex justify-around py-2 border-t border-white/8">
                    {[0,1,2,3].map(i => (
                      <div key={i} className={`w-5 h-5 rounded ${i===0 ? 'bg-indigo-400/70' : 'bg-white/15'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 rounded-[3rem] bg-indigo-500/10 blur-xl -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-4">
              Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Probably what{' '}
              <span className="bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent">
                you're wondering.
              </span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/4 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-white/90 text-base">{faq.question}</span>
                  <span className={`text-indigo-400 text-xl flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-white/50 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coming Soon CTA ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-white/6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Available Soon
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Want to know{' '}
            <span className="bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent">
              when it drops?
            </span>
          </h2>
          <p className="text-lg text-white/50 mb-10 leading-relaxed">
            We're almost there. Follow us on Instagram to catch the launch announcement, see behind-the-scenes progress, and be part of the first wave of users.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @spentra.app
          </a>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/8 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/favicon.png" alt="Spentra" width={32} height={32} className="rounded-lg" />
            <span className="font-bold text-white/90 text-lg">Spentra</span>
          </div>
          <p className="text-white/30 text-sm text-center">
            © {new Date().getFullYear()} Spentra. In development. Coming soon to Android.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @spentra.app
          </a>
        </div>
      </footer>

    </main>
  );
}
