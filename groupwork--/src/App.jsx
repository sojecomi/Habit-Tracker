import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HabitTracker from './components/HabitCard'
import WorkouLog from './components/WorkoutLog'
import CalendarView from './components/CalendarView'
import Navbar from './pages/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import AnalyticsChart from './components/Analytics'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HabitTracker />
            <WorkouLog />
            <CalendarView />
            <AnalyticsChart />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
