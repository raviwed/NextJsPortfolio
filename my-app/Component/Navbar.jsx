import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div  style={{display:"flex",justifyContent:"space-around",backgroundColor:"blueviolet",}}>
     <Link href="/">
        <h1 style={{color:"white",textDecoration:"none"}} >Homepage</h1>
    </Link> 
    <Link href="/Project"> 
    <h1  style={{color:"white",textDecoration:"none"}}>Project</h1>
    </Link>
    <Link href="/Education">
        <h1  style={{color:"white",textDecoration:"none"}}>Education</h1>
    </Link>
    </div>
  )
}

export default Navbar
