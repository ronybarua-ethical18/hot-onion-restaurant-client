import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import fakeReviewsData from './fakeReviewsData'
// import './ClientReviews.css'
import "react-multi-carousel/lib/styles.css";
import { Card } from 'react-bootstrap';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
const ClientReviews = () => {
    const [reviews, setReviewsData] = useState(fakeReviewsData)
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1619 },
            items: 4,
            slidesToSlide: 4, // optional, default to 1.
        },
        laptop: {
            breakpoint: { max: 1619, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 639, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    const carouselParams = {
        additionalTransfrom: 0,
        arrows: false,
        autoPlaySpeed: 1000,
        centerMode: false,
        className: "",
        containerClass: "carousel-container",
        customButtonGroup: <ButtonGroup />,
        dotListClass: "",
        draggable: true,
        focusOnSelect: false,
        infinite: true,
        itemClass: "",
        keyBoardControl: true,
        minimumTouchDrag: 80,
        renderButtonGroupOutside: true,
        renderDotsOutside: false,
        responsive: responsive,
        showDots: false,
        sliderClass: "",
        slidesToSlide: 1,
    }
    return (
        <div className="container common-margin">
            <div className="heading mb-5">
                <label htmlFor="">OUR CLIENT REVIEWS</label>
            </div>
            <div className="carousel-styles text-left">
                <Carousel {...carouselParams}>
                    {
                        reviews.map(review => <div className="m-3">
                            <Card className="mb-4 border-0 h-100 shadow py-3">
                                {/* <div className="d-flex justify-content-center"><Card.Img variant="top" className="service_image" src={icon} /></div> */}
                                <Card.Body>
                                    <Card.Title><p><strong>{review.heading}</strong></p></Card.Title>
                                    <Card.Text>
                                        <p>{review.name}</p>
                                        <p>{review.review}</p>
                                    </Card.Text>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <img src={review.img} className="w-25 client-image" alt="" />
                                        <strong>{review.name}</strong>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default ClientReviews;