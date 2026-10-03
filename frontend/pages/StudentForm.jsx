import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Loader2, Save } from 'lucide-react'
import { createStudent, getStudent, updateStudent } from '../src/api/students'

const emptyForm = { name: '', age: '', gender: '', location: '', phoneNumber: '' }

const inputClasses =
  'mt-1.5 w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100'

const StudentForm = () => {
  const { id } = useParams()
  const isEditing = Boolean(id)
  const navigate = useNavigate()

  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!isEditing) return
    getStudent(id)
      .then((student) =>
        setForm({
          name: student.name || '',
          age: student.age ?? '',
          gender: student.gender || '',
          location: student.location || '',
          phoneNumber: student.phoneNumber ?? '',
        }),
      )
      .catch((err) => setError(err.message))
  }, [id, isEditing])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const payload = {
      name: form.name,
      age: Number(form.age),
      gender: form.gender,
      location: form.location,
      phoneNumber: Number(form.phoneNumber),
    }

    try {
      if (isEditing) {
        await updateStudent(id, payload)
      } else {
        await createStudent(payload)
      }
      navigate('/students')
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-10 sm:px-6">
      <button
        type="button"
        onClick={() => navigate('/students')}
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Students
      </button>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-xl font-bold tracking-tight text-gray-900">
          {isEditing ? 'Edit Student' : 'Add Student'}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {isEditing
            ? 'Update this student’s details.'
            : 'Fill in the details below to create a new record.'}
        </p>

        {error && (
          <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className={inputClasses}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Age *</label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
                min="0"
                className={inputClasses}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Gender *</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Location *</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              placeholder="Accra"
              className={inputClasses}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Phone Number *</label>
            <input
              type="number"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 disabled:opacity-50"
            >
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              {submitting ? 'Saving...' : 'Save'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/students')}
              className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentForm
