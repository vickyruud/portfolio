import React from 'react'

const ErrorAlert = ({message, handleClose}) => {
  return (
 <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 m-4 flex flex-row justify-between" role="alert">
  <p className="font-bold">Warning!</p>
      <p className='pl-2'>{message}</p>
<button onClick={handleClose} className='pl-4'>x</button>
</div>
  )
}

export default ErrorAlert