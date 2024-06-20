import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <h1>phone number of {params.number} is {params.phoneNumber}</h1>
    </div>
  )
}

export default page