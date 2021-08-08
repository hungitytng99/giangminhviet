import { NextPage } from 'next';
import { Carousel } from 'react-responsive-carousel';
import { ImagesPath } from 'src/constants/ImagesPath';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from 'src/components/Layout/Header';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryBoxLists from 'src/components/CategoryBoxLists';
import ProductCardLists from 'src/components/ProductCardLists';
import Contact from 'src/components/ContactPop';
interface Props {
}
const Home: NextPage<Props> = (props: any) => {
  return (
    <Container className="category-page">
        
    </Container>
  )
}
export async function getStaticProps() {

  return {
    props: {}, // will be passed to the page component as props
  }
}
export default Home