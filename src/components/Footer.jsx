import React from 'react'

const Footer = () => {
  return (
   
    <footer className="py-8 bg-blue-500 text-white">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-center">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer