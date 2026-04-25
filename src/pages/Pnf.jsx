import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
   <div>
      <img
        src="https://png.pngtree.com/png-clipart/20220109/original/pngtree-404-error-page-not-found-png-image_7021505.png"
        alt=""
      />
      <p>oh no!</p>
      <h3 className='text-2xl font-medium'> LOOK like you're lost </h3>
      <p>the page you are looking for is not available</p>
      <Link to={'/'} className='bg-black mt-5 px-3 py-2 text-white'>Go Home</Link>
    </div>
  )
}

export default Pnf