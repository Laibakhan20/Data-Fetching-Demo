import React from 'react'

const Footer = () => {
  return (
    <div>{/* Footer */}
    <footer className="bg-gray-900 text-gray-300 py-6 mt-7">
      <div className="container mx-auto text-center">
        <p className='text-white tracking-widest'>&copy; {new Date().getFullYear()} Data Fetching Demo. Develop by Laiba Khan. All Rights Reserved.</p>
      </div>
    </footer></div>
  )
}

export default Footer