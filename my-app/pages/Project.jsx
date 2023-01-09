import Link from 'next/link';
import React from 'react'
import {AiOutlineStar ,AiFillFolder} from 'react-icons/ai';
import {BiGitRepoForked} from "react-icons/bi"
const Project = ({data}) => {
  return (
    <div style={{display:"grid",gridTemplateRows:"repeat(2,1fr)",gridTemplateColumns:"repeat(2,1fr)",gap:"10px",margin:"5px"}}>
     {
        data.map((el,i)=>{
            return(
                <div style={{border:"1px solid black"}} key={i} >
                 <Link href={el.html_url}><h1 style={{textDecorationLine:"none"}} ><AiFillFolder/>{el.name}</h1></Link>
                  <div style={{display:"flex",gap:"5px",margin:"6px",}} >
                  <h4><AiOutlineStar/>Star:-{el.stargazers_count}</h4>
                  <h4><BiGitRepoForked/>fork:-{el.forks_count}</h4>
                  <h2></h2>
                  </div>
                 
                </div>
            )
        })
     }
    </div>
  )
}

export async function getServerSideProps() {
  
    const res = await fetch(`https://api.github.com/search/repositories?q=user:raviwed+fork:true&sort=updated&per_page=10&type=Repositories`)
    const data = await res.json()
    const matter= data.items
    return { 
      props: {
        data:matter 
    }
  }
}
export default Project
