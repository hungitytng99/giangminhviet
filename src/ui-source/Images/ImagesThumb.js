import React, { useEffect, useState } from 'react';
import { NextPage } from "next";
import { Col, Row } from 'react-bootstrap';
import ReactImageMagnify from 'react-image-magnify';
import ReactImageZoom from 'react-image-zoom';
import { ImagesPath } from 'src/constants/ImagesPath';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
// [{ src: ImagesPath.PRODUCT.src, alt: "" }, { src: ImagesPath.PRODUCT_2.src, alt: "" }, { src: ImagesPath.SP.src, alt: "" }]
const ImagesThumb = ({ listImages }) => {
    let count = -1;
    listImages = listImages.map((item, index) => {
        count++;
        return {
            id: count,
            isSelected: index == 0,
            ...item,
        }
    })
    const [listImagesStatus, setlistImagesStatus] = useState(listImages)
    const [currentImageSelected, setCurrentImageSelected] = useState(listImages[0]);
    const selectImage = (e) => {
        let indexImgSelected = Number(e.target.dataset.imgid);
        let newListImage = listImages.map((img, index) => {
            img.isSelected = index == indexImgSelected
            return img;
        });
        setCurrentImageSelected(newListImage[indexImgSelected]);
        setlistImagesStatus(newListImage);
    }
    return (
        <div className="images-thumb">
            <Row className="images-thumb__row">
                <Col xs={2} className="images-thumb__center">
                    <div className="images-thumb__list">
                        {listImagesStatus.map((image, index) => {
                            return (
                                <div key={image.id} className={`images-thumb__item ${image.isSelected && 'selected'}`}>
                                    <img onClick={selectImage} data-imgid={image.id} className="images-thumb__item-img" src={image.src} alt={image.alt} />
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col xs={10}>
                    <div className="img-box">
                        <div className="img">
                            <Zoom>
                                <img
                                    alt={currentImageSelected?.alt}
                                    src={currentImageSelected?.src}
                                    width="100%"
                                />
                            </Zoom>
                        </div>

                    </div>
                </Col>

            </Row>
        </div >
    );
}

export default ImagesThumb;