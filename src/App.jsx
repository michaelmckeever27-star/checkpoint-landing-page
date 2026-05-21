import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  MessageCircle,
  LineChart,
  CheckCircle2,
  Lock,
  Users,
  Bell,
  ArrowRight,
  Menu,
  X,
  HeartPulse,
  BrainCircuit,
} from "lucide-react";

const navItems = ["How it works", "Features", "Safety", "Join beta"];

const featureCards = [
  {
    icon: CheckCircle2,
    title: "Daily check-ins",
    body: "Answer five simple questions in under a minute so you can notice how you’re really doing.",
  },
  {
    icon: LineChart,
    title: "Pattern tracking",
    body: "See your strain, connection, sleep and intrusive-thought trends before things snowball.",
  },
  {
    icon: MessageCircle,
    title: "Support Pact",
    body: "Pre-write messages to trusted people so reaching out is easier when words are hard.",
  },
  {
    icon: Lock,
    title: "You stay in control",
    body: "Checkpoint checks with you before any support message is sent. No surprise alerts.",
  },
];

const steps = [
  {
    number: "01",
    title: "Check in honestly",
    body: "A short daily scale helps you log pressure, looping thoughts, energy, withdrawal risk and connection.",
  },
  {
    number: "02",
    title: "Spot the drift",
    body: "Your score builds a simple trend line, showing when you’re moving from steady to amber or high-support zones.",
  },
  {
    number: "03",
    title: "Let someone know",
    body: "When you hit a threshold, Checkpoint asks if you want to send a pre-written message to your chosen people.",
  },
];

const messageLevels = [
  {
    label: "Nudge",
    score: "60–74",
    color: "from-teal-400 to-cyan-500",
    text: "Hey, I’ve been having a rough few days. I’d appreciate a quick check-in when you can.",
  },
  {
    label: "Check-In",
    score: "40–59",
    color: "from-orange-400 to-amber-500",
    text: "I’m struggling more than usual today. Could you check in with me later?",
  },
  {
    label: "Reach Out Now",
    score: "0–39",
    color: "from-red-500 to-rose-500",
    text: "I’m having a really hard day and could use support. Can you check in as soon as you can?",
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-11 w-11 rounded-full bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-400 p-[3px] shadow-lg shadow-blue-500/20">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <div className="relative h-7 w-7 rounded-full border-[7px] border-blue-950 border-r-cyan-400 border-b-blue-600">
            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950" />
          </div>
        </div>
      </div>

      <span className="text-2xl font-extrabold tracking-tight text-blue-950">
        checkpoint
      </span>
    </div>
  );
}

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[350px]"
    >
      <div className="absolute -left-8 top-16 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute -right-8 bottom-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-blue-950/15">
        <div className="rounded-[2rem] bg-slate-50 p-5">
          <div className="mb-5 flex items-center justify-between">
            <Logo />

            <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
              7 day streak
            </div>
          </div>

          <div className="mb-5">
            <p className="text-sm font-semibold text-slate-500">
              Today’s check-in
            </p>

            <h3 className="text-2xl font-extrabold tracking-tight text-blue-950">
              How heavy does today feel?
            </h3>
          </div>

          <div className="mb-5 grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className={`flex aspect-square items-center justify-center rounded-2xl text-lg font-black ${
                  n === 4
                    ? "bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-lg shadow-orange-300/40"
                    : "bg-white text-blue-950 shadow-sm ring-1 ring-slate-200"
                }`}
              >
                {n}
              </div>
            ))}
          </div>

          <div className="mb-5 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-bold text-blue-950">Your trend</p>

              <p className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600">
                Amber
              </p>
            </div>

            <div className="flex h-24 items-end gap-2">
              {[68, 72, 71, 63, 58, 50, 46, 58].map((h, i) => (
                <div key={i} className="flex flex-1 items-end">
                  <div
                    className={`w-full rounded-t-full ${
                      h < 50
                        ? "bg-red-400"
                        : h < 65
                        ? "bg-amber-400"
                        : "bg-teal-400"
                    }`}
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-blue-950 p-4 text-white shadow-lg shadow-blue-950/20">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                <MessageCircle className="h-5 w-5 text-cyan-300" />
              </div>

              <div>
                <p className="text-sm text-blue-100">Support Pact</p>
                <p className="font-bold">Check with me first?</p>
              </div>
            </div>

            <button className="w-full rounded-2xl bg-blue-600 py-3 text-sm font-bold">
              Preview message
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState("idle");

  async function handleBetaSignup(event) {
    event.preventDefault();
    setFormStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mkoerjwg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          source: "Checkpoint landing page",
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setEmail("");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#f7fbff] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="text-sm font-semibold text-slate-600 hover:text-blue-700"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#join-beta"
            className="hidden rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-800 md:inline-flex"
          >
            Join beta
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-blue-950 md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                  className="rounded-2xl px-3 py-2 font-semibold text-slate-700 hover:bg-blue-50"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-24">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
                <HeartPulse className="h-4 w-4" />
                Men’s mental health, before crisis point
              </div>

              <h1 className="max-w-4xl text-5xl font-black tracking-[-0.04em] text-blue-950 sm:text-6xl lg:text-7xl">
                Reach out before you have to hit breaking point.
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
                Checkpoint helps men check in daily, spot worrying patterns, and
                send pre-approved support messages to trusted people when asking
                for help feels too hard.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#join-beta"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-600/25 transition hover:bg-blue-800"
                >
                  Join the beta <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-extrabold text-blue-950 shadow-sm transition hover:bg-slate-50"
                >
                  See how it works
                </a>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                Not therapy. Not a crisis service. A practical early-warning
                system for men who bottle things up.
              </p>
            </motion.div>

            <PhoneMockup />
          </div>
        </section>

        <section className="px-5 py-10 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-black text-blue-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="how-it-works" className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
                How it works
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.03em] text-blue-950 sm:text-5xl">
                Built for the moment men usually go quiet.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The product is designed around one behaviour change: making it
                easier to tell someone before things get worse.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="mb-8 text-6xl font-black tracking-[-0.06em] text-blue-100">
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-black text-blue-950">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="features"
          className="bg-blue-950 px-5 py-16 text-white sm:px-8 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                The Support Pact
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                Asking for help, without having to start from zero.
              </h2>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                Users choose trusted people, set message levels, and keep full
                control. When a trend crosses a threshold, Checkpoint asks
                before sending anything.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                  <Users className="mb-3 h-6 w-6 text-cyan-300" />
                  <p className="font-bold">Trusted people</p>
                </div>

                <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                  <Bell className="mb-3 h-6 w-6 text-cyan-300" />
                  <p className="font-bold">Threshold prompts</p>
                </div>

                <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10">
                  <ShieldCheck className="mb-3 h-6 w-6 text-cyan-300" />
                  <p className="font-bold">User approval</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {messageLevels.map((level) => (
                <div
                  key={level.label}
                  className="rounded-[2rem] bg-white p-5 text-slate-900 shadow-xl shadow-black/10"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${level.color} text-white`}
                    >
                      <MessageCircle className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-black text-blue-950">
                          {level.label}
                        </h3>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                          Score {level.score}
                        </span>
                      </div>

                      <p className="rounded-2xl bg-slate-50 p-4 leading-7 text-slate-600">
                        “{level.text}”
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="safety" className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <h2 className="text-4xl font-black tracking-[-0.03em] text-blue-950">
                  Safe by design.
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Mental health apps need trust. Checkpoint should be built with
                  clinical input, privacy-first data handling, and clear crisis
                  pathways.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Always asks before sending messages",
                  "Crisis resources visible when needed",
                  "Private check-ins and sensitive data controls",
                  "Positioned as support, not therapy replacement",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-3xl bg-slate-50 p-5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />

                    <p className="font-semibold leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="join-beta" className="px-5 pb-20 sm:px-8 lg:pb-28">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-blue-950 p-8 text-center text-white shadow-2xl shadow-blue-700/25 sm:p-12">
            <BrainCircuit className="mx-auto mb-5 h-12 w-12 text-cyan-300" />

            <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              Help shape Checkpoint.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
              Join the early list for the private beta. We’re looking for men
              who want a practical way to track their mental health and reach
              support earlier.
            </p>

            <form
              onSubmit={handleBetaSignup}
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-3xl bg-white p-3 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="min-h-14 flex-1 rounded-2xl border-0 px-5 text-blue-950 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-6 font-extrabold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {formStatus === "loading" ? "Joining..." : "Join beta"}
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            {formStatus === "success" && (
              <p className="mt-4 text-sm font-bold text-cyan-200">
                You’re on the beta list. Check your inbox for confirmation.
              </p>
            )}

            {formStatus === "error" && (
              <p className="mt-4 text-sm font-bold text-red-200">
                Something went wrong. Please try again.
              </p>
            )}

            <p className="mt-4 text-sm text-blue-200">
              No spam. Early product updates only.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <Logo />

          <p>
            Checkpoint is not an emergency service or substitute for
            professional care.
          </p>
        </div>
      </footer>
    </div>
  );
}