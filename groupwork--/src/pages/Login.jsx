import React from 'react'

const Login = () => {
  return (
    <div>
    <h2 className='text-black'>Login to your account</h2>
    <form className='login-page'>
        <div> 
            <label htmlFor="email">Email/Username:</label>
            <input type="email" id="email" name="email" placeholder='Name@example.com/username' className='w-full border-1-2 border-black px-2 mb-1' required />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder='password' className='w-full border-1-2 border-black px-2 mb-1' required />
        </div>
        <button type="submit" className="w-3/4 bg-blue-400 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">Login</button>
        <p>
            Don't have an account? <a href="/register" className='text-blue-600 hover:underline'>Signup here</a>.
        </p>
    </form>
    </div>
  )
}

export default Login
