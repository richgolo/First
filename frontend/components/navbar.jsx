import { NavLink } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

const linkClasses = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-gray-900 text-white'
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
  }`

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white">
            <GraduationCap className="h-4.5 w-4.5" strokeWidth={2} />
          </span>
          <span className="text-base font-semibold tracking-tight text-gray-900">
            Student<span className="text-indigo-600">MS</span>
          </span>
        </div>
        <div className="flex gap-1">
          <NavLink to="/" className={linkClasses} end>
            Home
          </NavLink>
          <NavLink to="/students" className={linkClasses}>
            Students
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
