import React from 'react'
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TopNav from '../components/TopNav'
import Footer from '../components/Footer';
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"
import { useState } from 'react';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
const ContactPage = (props) => {
    //fake review list
    const reviewList = [
        {
            fullname: "Trần Thị C",
            image: "/images/ava.png",
            brach: "Chi nhánh quận 1",
            review: "Đặt lịch rất dễ dàng, luôn tạo điều kiện tốt cho khách hàng nhất có thể"
        },
        {
            fullname: "Trần Văn Yến",
            image: "/images/ava.png",
            brach: "Chi nhánh quận 2",
            review: "Đặt lịch rất dễ dàng, luôn tạo điều kiện tốt cho khách hàng"
        },
        {
            fullname: "Trần Thị C",
            image: "/images/ava.png",
            brach: "Chi nhánh quận 1",
            review: "Đặt lịch rất dễ dàng, luôn tạo điều kiện tốt cho khách hàng"
        },
        {
            fullname: "Trần Văn Yến",
            image: "/images/ava.png",
            brach: "Chi nhánh quận 2",
            review: "Đặt lịch rất dễ dàng, luôn tạo điều kiện tốt cho khách hàng"
        },
        {
            fullname: "Trần Thị C",
            image: "/images/ava.png",
            brach: "Chi nhánh quận 1",
            review: "Đặt lịch rất dễ dàng, luôn tạo điều kiện tốt cho khách hàng"
        },
        {
            fullname: "Trần Văn Y",
            image: "/images/ava.png",
            brach: "Chi nhánh quận 2",
            review: "Đặt lịch rất dễ dàng, luôn tạo điều kiện tốt cho khách hàng"
        },
        {
            fullname: "Trần Thị C",
            image: "/images/ava.png",
            brach: "Chi nhánh quận 1",
            review: "Đặt lịch rất dễ dàng, luôn tạo điều kiện tốt cho khách hàng"
        }
        ,
        {
            fullname: "Trần Thị C",
            image: "/images/ava.png",
            brach: "Chi nhánh quận 1",
            review: "Đặt lịch rất dễ dàng, luôn tạo điều kiện tốt cho khách hàng"
        }
        ,
        {
            fullname: "Trần Thị C",
            image: "/images/ava.png",
            brach: "Chi nhánh quận 1",
            review: "Đặt lịch rất dễ dàng, luôn tạo điều kiện tốt cho khách hàng"
        }
    ]
    //custom setting for slider
    var settings = {
        dots: true,
        infinite: true,
        swipeToSlide: true,
        speed: 500,

        slidesToShow: 3,//number show each slide
        slidesToScroll: 3,//number item next 
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }

        ]
    };

    const NextArrow = ({onClick}) => {
        return (
            <div className='arrow next' onClick={onClick}>
                <FaArrowRight/>
            </div>
        )
    }
    const PrevArrow = ({onClick}) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                <FaArrowLeft/>
            </div>
        )
    }
    const images = [image1,image2,image3,image1];
    const [imageIndex, setImageIndex] = useState(0)
    //custom setting for slider
    var settings = {
        infinite: true,
        lazyLoad: true,
        slidesToShow: 3,
        speed:700,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next)
    };
    return (
        <div>
            <TopNav />
            <header className="pt-4 pb-4" style={{ backgroundColor: "#01D09E", color: "#FFF" }}><h3 align="center">Liên lạc</h3></header>
            <section className="container mt-5">
                <div className="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <img alt="" src="images/phongkham.png" style={{ width: "100%" }} />
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </section>
            <section className="container mb-5">
            <Slider {...settings}>
                        {images.map((item, index) => {
                            return (
                                <div className="container mb-2" >
                                    <div className={index=== imageIndex ? "slide activeSlide" : "slide"}>
                                        <img src={item} alt={item}/>
                                    </div>
                                </div>
                            )
                        })}

                    </Slider>
            </section >
            <section className='container'>
                <h3 align="center">Phản hồi của khách hàng</h3>
                <p className='text-center'>Cảm ơn bạn đã tin tưởng chúng tôi</p>
                <div class="container-fluid mt-4" align="center">
                    <Slider {...settings}>
                        {reviewList.map((item, index) => {
                            return (
                                <div className="container mb-2" >
                                    <div className="p-4">
                                        <div className="custom-slider-item pt-5 pb-5 pe-3 px-3 mb-4" >
                                            <p className="truncation-text">{item.review}</p>
                                        </div>
                                        <img alt="" className="img-thumbnail" src="/images/ava.png" style={{ borderRadius: "50%", width: "40%" }} />
                                        <h5 className='mt-2'>{item.fullname}</h5>
                                        <p>{item.brach}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </Slider>
                </div>

            </section >
            <Footer />
        </div >
    );
}
export default ContactPage;