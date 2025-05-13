import React from 'react'

const Register = () => {
  return (
    <div>
        <h2>Sign Up</h2>
        <form className='register-page'>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder='Set a username' className='w-full border-1-2 border-black px-2 mb-1' required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder='Name@example.com' className='w-full border-1-2 border-black px-2 mb-1' required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder='Set a password' name="password" className='w-full border-1-2 border-black px-2 mb-1' required />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" placeholder='Confirm your password' name="confirmPassword" className='w-full border-1-2 border-black px-2 mb-1' required />
            </div>
            <button type="submit" className="w-3/4 bg-blue-400 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">Sign Up</button>
            <p>
                Already have an account? <a href="/login" className='text-blue-600 hover:underline'>Login here</a>.
            </p>
        </form>
    </div>
  )
}

export default Register
