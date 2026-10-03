const BASE_URL = '/student'

async function handleResponse(res) {
  const data = await res.json().catch(() => null)
  if (!res.ok) {
    throw new Error(data?.message || `Request failed with status ${res.status}`)
  }
  return data
}

export function getStudents() {
  return fetch(BASE_URL).then(handleResponse)
}

export function getStudent(id) {
  return fetch(`${BASE_URL}/${id}`).then(handleResponse)
}

export function createStudent(student) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  }).then(handleResponse)
}

export function updateStudent(id, student) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  }).then(handleResponse)
}

export function deleteStudent(id) {
  return fetch(`${BASE_URL}/${id}`, { method: 'DELETE' }).then(handleResponse)
}
