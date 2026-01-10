import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <>
    <Image src={'/d4logo.webp'} alt="D4 Logo" width={60} height={30} />
    </>
  )
}

export default Logo