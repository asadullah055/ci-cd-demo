import { useEffect, useState } from 'react'
import './App.css'
import heroImg from './assets/hero.png'

function App() {

  const [message, setMessage] = useState("")
  useEffect(() => {
    fetch("http://localhost:4000/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])



  const metrics = [
    ['12m', 'Avg deploy time'],
    ['99.9%', 'Pipeline uptime'],
    ['4.8x', 'Release velocity'],
  ]

  const features = [
    {
      title: 'Smart build pipeline',
      text: 'Track every stage from branch to production in one focused view.',
    },
    {
      title: 'Instant rollback2',
      text: 'Move back to the last stable version quickly when a release needs it.',
    },
    {
      title: 'Team approvals',
      text: 'Keep QA, DevOps, and product decisions inside the same workflow.',
    },
    {
      title: 'Team approvals2',
      text: 'Keep QA, DevOps, and product decisions inside the same workflow.',
    },
  ]




  return (
    <main className="min-h-screen overflow-hidden bg-[#f8faf7] text-[#17211c]">

      <section className="relative isolate px-5 py-5 sm:px-8 lg:px-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(251,146,60,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(20,184,166,0.18),transparent_30%),linear-gradient(135deg,#f8faf7_0%,#f3f0e8_48%,#ecfdf5_100%)]" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-[#dfe5dc] bg-white/75 px-4 py-3 shadow-sm backdrop-blur md:px-6">
          <a href="/" className="flex items-center gap-3 font-semibold text-[#17211c]">
            <span className="grid size-9 place-items-center rounded-md bg-[#17211c] text-sm font-bold text-white">
              CD
            </span>
            <span>DeployPilot</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-[#58645d] md:flex">
            <a className="transition hover:text-[#17211c]" href="#features">
              Features
            </a>
            <a className="transition hover:text-[#17211c]" href="#workflow">
              Workflow
            </a>
            <a className="transition hover:text-[#17211c]" href="#pricing">
              Pricing
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-md bg-[#17211c] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#26352d]"
          >
            Start free
          </a>
        </nav>
        <h2 className='bg-red-400'>{message}</h2>
        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-16 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8e1d6] bg-white/70 px-3 py-1 text-sm font-medium text-[#496257] shadow-sm">
              <span className="size-2 rounded-full bg-[#f97316]" />
              CI/CD command center for fast teams
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-[#111914] sm:text-6xl lg:text-7xl">
              Ship production releases with calm confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#58645d]">
              DeployPilot brings builds, tests, approvals, and deployment flow
              into a polished dashboard so your team can release faster.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-md bg-[#f97316] px-6 py-3 text-center font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-[#ea580c]"
              >
                Launch pipeline
              </a>
              <a
                href="#workflow"
                className="rounded-md border border-[#cbd7c8] bg-white/80 px-6 py-3 text-center font-semibold text-[#17211c] transition hover:border-[#17211c]"
              >
                View workflow
              </a>
            </div>

            <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {metrics.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-[#dce5d8] bg-white/70 p-4 shadow-sm"
                >
                  <dt className="text-2xl font-semibold text-[#17211c]">{value}</dt>
                  <dd className="mt-1 text-sm text-[#66736a]">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="rounded-lg border border-[#d7e0d4] bg-[#fffdf7] p-3 shadow-2xl shadow-[#9aa88f]/25">
              <div className="rounded-md border border-[#e4e8df] bg-white">
                <div className="flex items-center justify-between border-b border-[#e4e8df] px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-[#17211c]">
                      Production Pipeline
                    </p>
                    <p className="text-xs text-[#758078]">main branch active</p>
                  </div>
                  <span className="rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-semibold text-[#15803d]">
                    Healthy
                  </span>
                </div>
                <div className="grid gap-3 p-4">
                  {['Build assets', 'Run tests', 'Security scan', 'Deploy'].map(
                    (step, index) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 rounded-md border border-[#eef1ea] bg-[#fbfcf8] p-3"
                      >
                        <span className="grid size-8 place-items-center rounded-md bg-[#14b8a6] text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-[#17211c]">{step}</p>
                          <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e6ece3]">
                            <div
                              className="h-full rounded-full bg-[#f97316]"
                              style={{ width: `${96 - index * 11}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-[#15803d]">
                          Done
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
            <img
              src={heroImg}
              alt=""
              className="absolute -right-5 -top-8 -z-10 w-32 rotate-6 opacity-80 sm:w-44"
            />
          </div>
        </div>
      </section>

      <section id="features" className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              Release control
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17211c] sm:text-4xl">
              Everything your deployment team expects.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-lg border border-[#e1e7de] bg-[#fbfcf8] p-6 shadow-sm"
              >
                <div className="mb-6 h-1.5 w-14 rounded-full bg-[#14b8a6]" />
                <h3 className="text-xl font-semibold text-[#17211c]">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-[#5f6b63]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="workflow"
        className="border-y border-[#dde6da] bg-[#17211c] px-5 py-16 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5eead4]">
              Workflow
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              From commit to release, clearly.
            </h2>
          </div>
          <div className="grid gap-3">
            {['Code pushed', 'Tests approved', 'Preview shared', 'Production live'].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/10 px-5 py-4"
                >
                  <span className="font-medium">{item}</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-sm text-[#c8f7e8]">
                    0{index + 1}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#f8faf7] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-lg border border-[#dce5d8] bg-white p-8 shadow-sm md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              Ready
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17211c]">
              Build your next release dashboard.
            </h2>
            <p className="mt-3 max-w-2xl text-[#5f6b63]">
              A sharp starting point for presenting your frontend, backend, and
              deployment pipeline in one product experience.
            </p>
          </div>
          <a
            id="contact"
            href="mailto:hello@deploypilot.dev"
            className="rounded-md bg-[#17211c] px-6 py-3 font-semibold text-white transition hover:bg-[#26352d]"
          >
            Contact sales
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
