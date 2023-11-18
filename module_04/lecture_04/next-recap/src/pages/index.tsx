export default function Home() {
  return (
    <h1>Hello to Next.js</h1>
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