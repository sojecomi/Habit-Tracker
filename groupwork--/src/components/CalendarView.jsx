import React from 'react'

const CalendarView = () => {
  return (
    <div className='calendar'>
      {/* Main container for the Calendar View */}
      <h1 className='font-bold text-3xl'>Calendar View</h1>
      <table>
        <thead>
          <tr>
            {/* Table headers for days of the week */}
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {/* 5 weeks (rows) */}
          {Array.from({ length: 5 }).map((_, weekIndex) => (
            <tr key={weekIndex}>
              {/* 7 days (columns) for each week */}
              {Array.from({ length: 7 }).map((_, dayIndex) => (
                <td
                  key={dayIndex}
                  style={{ border: '1px solid black', padding: '10px' }}
                >
                  {/* Display the day number if within the range of 1 to 31 */}
                  {weekIndex * 7 + dayIndex + 1 <= 31
                    ? weekIndex * 7 + dayIndex + 1
                    : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CalendarView
