import { NextPage } from 'next';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from 'src/components/Layout/Header';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCardLists from 'src/components/ProductCardLists';
import ContactPop from 'src/components/ContactPop';
import { mainCategoryService } from 'src/data-services/category';
import { productService } from 'src/data-services/product';
import Link from 'next/link'
import Footer from "src/components/Layout/Footer";

interface Props {
}
const Search: NextPage<Props> = (props: any) => {
    const { mainCategoryAndSubCategory = {}, listProduct = {}, keyword = "", suggestProduct = {} } = props;

    return (
        <>
            <Header listCategory={mainCategoryAndSubCategory} />
            <ContactPop />
            <Container>
                <Row>
                    <div className="search">
                        {
                            listProduct.length == 0 ?
                                <div className="search__notify">
                                    Không có bất ký kết quả nào phù hợp với từ khóa &quot;<span>{keyword}</span>&quot;
                                </div>
                                :
                                <div className="search__notify">
                                    Có <span className="amount">{listProduct.length}</span> kết quả tìm kiếm phù hợp với từ khóa &quot;<span className="keyword">{keyword}</span>&quot;
                                </div>
                        }
                        {/* <div className="search__box">
                            <input className="search__box-input" placeholder="Tìm kiếm..."></input>
                            <button className="search__box-button">
                                Tìm kiếm
                            </button>
                        </div> */}
                        <ProductCardLists listProduct={listProduct} />
                    </div>
                </Row>

                <Row className="search__other-result">
                    <div className="special-product">
                        <h2 className="special-product__text">
                            <Link href="/">
                                <a className="special-product__link">Sản phẩm khác</a>
                            </Link>
                        </h2>
                    </div>
                    <ProductCardLists listProduct={suggestProduct} />
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export async function getServerSideProps(context: any) {
    const { keyword } = context.params;

    const mainCategoryWithSub = await mainCategoryService.listCategoryWithSubCategory();
    const listProduct = await productService.listProductAsync({ search: keyword });
    const suggestProduct = await productService.listProductAsync({ productsPerPage: 8, pageNumber: 1 });
    return {
        props: {
            mainCategoryAndSubCategory: mainCategoryWithSub.data,
            listProduct: listProduct.data,
            keyword: keyword,
            suggestProduct: suggestProduct.data,
        },
    };
}
export default Search