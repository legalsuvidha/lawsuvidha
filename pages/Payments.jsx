import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


function Payments() {
  const location=useLocation()
  const price=location.state?.price
  const navigate=useNavigate()
  const handleSubmit=()=>{
    navigate('/')
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection:'column'
    }}>
      {/* <h1>Subscribed to {price}</h1> */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-blue-700 tracking-wide mb-4">
        Welcome to <span className="text-gray-600">JP LAW SUVIDHA</span>
      </h1>

      <h1>login password  will be sent through email</h1>
      <div>
        <button
          onClick={handleSubmit}
          className="px-3 py-1 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          OK
        </button>
      </div>
    </div>
    
  )
}

export default Payments