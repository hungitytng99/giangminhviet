import { NextPage } from 'next';



interface Props {
}
const Home: NextPage<Props> = (props: any) => {
 return (
   <>This is a home page</>
 )
}
export async function getStaticProps() {
 
  return {
    props: { }, // will be passed to the page component as props
  }
}
export default Home