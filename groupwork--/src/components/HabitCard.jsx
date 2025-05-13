import React from 'react'

const HabitTracker = () => {
  return (
    <div>
    <div className="habit-card">
        <h3>Habit Name</h3>
        <input type="text" placeholder='activity' className='border-1' />
        <p>Progress: 0%</p>
        <button>Increment</button>
        <button>Decrement</button>
    </div>
    </div>
  )
}

export default HabitTracker
