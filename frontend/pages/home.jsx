import { Link } from 'react-router-dom'
import { ArrowRight, ListChecks, ShieldCheck, Zap } from 'lucide-react'

const features = [
  {
    icon: ListChecks,
    title: 'Full CRUD',
    description: 'Create, view, update, and remove student records.',
  },
  {
    icon: Zap,
    title: 'Instant updates',
    description: 'Changes reflect immediately, backed by a live API.',
  },
  {
    icon: ShieldCheck,
    title: 'Validated data',
    description: 'Required fields are enforced before records are saved.',
  },
]

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,theme(colors.indigo.100),transparent_60%)]"
        />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm">
            Student Management System
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Manage student records,
            <br />
            <span className="text-indigo-600">without the busywork.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
            Add, update, and track every student in one clean, simple
            dashboard.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/students"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-gray-800"
            >
              View Students
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
