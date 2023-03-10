import Head from 'next/head'

import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Education from './Education'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home(data) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div >
          <div>
          <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width:"70%",padding:"10px",height:"400px",backgroundColor:"lightgreen"}} >
          <Image src={data.avatar_url} width={200} height={200}  style={{borderRadius:"40%"}} alt="raviteja" />
          <h1 >{data.name}</h1>
        <h2 style={{color:"darkgrey"}}>@{data.login}</h2>
          <div style={{display:"flex",gap:"10px"}}>
          <Link href="https://drive.google.com/file/d/1wTqCaIa2P7Si_P6Pa4QUkUaSNcdatGny/view?usp=share_link"><button style={{padding:"10px", border:"0px",borderRadius:"10px",backgroundColor:"blue",color:" white"}} >Resume</button></Link>
            <button  style={{padding:"10px", border:"0px",borderRadius:"10px",backgroundColor:"green",color:"white"}} >Follow</button>
          </div>
        </div>
        <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",backgroundColor:"lightgreen",padding:"10px",width:"70%",margin:"5px"}}>
        <div>
          <h3>{data.bio}</h3>
          </div>
          <div>
        <  h3>TypeScript ,HTML ,React.js,CSS,JS,Next.js</h3>
        </div>
        </div> 
        <Education/> 
        </div>
        </div>
    </>
  )
}
export async function getServerSideProps() {
  
  const res = await fetch(`https://api.github.com/users/raviwed`)
  const data = await res.json()

  
  return { 
    props: data 
  }
}
