import React from 'react'
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TopNav from '../components/TopNav'
import Footer from '../components/Footer';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { useState } from 'react';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
const ContactPage = (props) => {
    //fake review list
    const reviewList = [
        {
            fullname: "Trần Hoàng Thảo An ",
            image: "/images/khach1.png",
            branch: "Chi nhánh Thủ Đức",
            review: "Có các bác sĩ nha khoa và nhân viên có kinh nghiệm, đào tạo tốt và nhiệt tình, tạo cảm giác an tâm cho bệnh nhân."
        },
        {
            fullname: "Trần Thị Yến",
            image: "/images/khach5.png",
            branch: "Chi nhánh quận 7",
            review: "Không kéo dài thời gian chờ đợi cho bệnh nhân, tạo cảm giác tiện lợi và tôn trọng thời gian của chúng tôi."
        },
        {
            fullname: "Hoàng Văn Bình",
            image: "/images/khach2.png",
            branch: "Chi nhánh Thủ Đức",
            review: "Cung cấp thông tin rõ ràng và tư vấn chăm sóc sau điều trị, giúp bệnh nhân hiểu rõ về tình trạng sức khỏe của mình."
        },
        {
            fullname: "Phan Hải Anh",
            image: "/images/khach4.png",
            branch: "Chi nhánh Thủ Đức",
            review: "Nha khoa tốt có bác sĩ rất tốt, họ giúp răng của mình trở nên khỏe mạnh và sáng bóng. Cháu rất vui"
        },
        {
            fullname: "Hoàng Lê Bảo Châu",
            image: "/images/khach3.png",
            branch: "Chi nhánh Thủ Đức",
            review: "Bác sĩ và nhân viên tại nha khoa tốt thường rất tận tâm. Thời gian đặt lịch rất rõ ràng không cần chờ đợi."
        },
        {
            fullname: "Trần Vũ Thảo My",
            image: "/images/khach6.png",
            branch: "Chi nhánh quận 8",
            review: "Đội ngũ y tá ở đây rất chu đáo và nhẹ nhàng, họ luôn tạo cảm giác an tâm và thoải mái cho bệnh nhân."
        }
        ,
        {
            fullname: "Trương Anh Trinh",
            image: "/images/khach7.png",
            branch: "Chi nhánh quận 7",
            review: "Tôi thích việc được tư vấn về cách chăm sóc răng miệng và lựa chọn sản phẩm phù hợp cho nụ cười của mình."
        }
        ,
        {
            fullname: "Phạm Hải Lam",
            image: "/images/khach8.png",
            branch: "Chi nhánh Thủ Đức",
            review: "Bác sĩ nữ ở nha khoa tốt thường rất tận tâm và chu đáo trong việc tư vấn về việc chăm sóc răng miệng sau điều trị."
        }
        ,
        {
            fullname: "Nguyễn Thị Bảo Thương",
            image: "/images/khach9.png",
            branch: "Chi nhánh Thủ Đức",
            review: "Tôi thích điều trị ở nha khoa tốt vì họ sử dụng các trang thiết bị hiện đại và phương pháp làm đẹp răng hiệu quả."
        }
    ]
    //custom setting for slider
    var settingsJudgement = {
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

    const NextArrow = ({ onClick }) => {
        return (
            <div className='arrow next' onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }
    const images = [image1, image2, image3, image4];
    const [imageIndex, setImageIndex] = useState(0)
    //custom setting for slider
    var settings = {
        infinite: true,
        slidesToShow: 3,
        speed: 700,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        slidesToScroll: 1,//number item next 
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
            <section className="container mb-5 mt-5">
                <Slider {...settings}>
                    {images.map((item, index) => {
                        return (
                            <div className="mb-2 container" >
                                <div className={index === imageIndex ? "slide activeSlide" : "slide"}>
                                    <img src={item} style={{ width: "100%" }} alt={item} />
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
                    <Slider {...settingsJudgement}>
                        {reviewList.map((item, index) => {
                            return (
                                <div className="container mb-2" >
                                    <div className="p-4">
                                        <div className="custom-slider-item pt-5 pb-5 pe-3 px-3 mb-4" >
                                            <p className="truncation-text">{item.review}</p>
                                        </div>
                                        <img alt="" className="img-thumbnail" src={item.image} style={{ borderRadius: "50%", width: "40%" }} />
                                        <h5 className='mt-2'>{item.fullname}</h5>
                                        <p>{item.branch}</p>
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