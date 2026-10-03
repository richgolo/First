import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Home from '../pages/home'
import Students from '../pages/Students'
import StudentForm from '../pages/StudentForm'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/new" element={<StudentForm />} />
          <Route path="/students/:id/edit" element={<StudentForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
