"use client"

import { useParams } from 'next/navigation'
import React from 'react'

function page() {
  const param = useParams()

  return (
    <div>
      <h1 >{param.id} Courses</h1>
    </div>
  )
}

export default page
