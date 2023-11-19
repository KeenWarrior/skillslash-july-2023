import thor from "@/images/thor.jpg"
import Image from "next/image"

export default function Home() {
  return (
    <>
     <h1>Hello to Next.js</h1>
     <Image src={thor} alt="Thor" height={100}  />
    </>
   
  )
}

export function getStaticProps(){
  console.log('Hello from getStaticProps on Home Page')
  return {
    props: {
      name: 'Next.js'
    },
    revalidate: 60
  }
}