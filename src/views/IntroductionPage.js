import React from 'react'
import './style.css'
import { NavLink, useHistory } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import TopNav from '../components/TopNav'
import Footer from '../components/Footer';

import Slider from 'react-slick';

const IntroductionPage = (props) => {
    //move to SignUp page
    const history = useHistory();
    const moveToBookingPage = () => {
        history.push("/booking")
    }


    //fake review list
    const reviewList = [
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


    return (
        <div >

            <TopNav />
            <section className="row g-0" style={{ backgroundColor: '#01D09E' }}>

                <div className="col-md-6 d-none d-md-block"><img alt="" src="/images/2.png" style={{ width: "90%" }} align="right" /></div>

                <div className="col-md-5 mt-5 p-3">
                    <p> </p>
                    <p> <h1> Phòng khám Vui Vẻ của chúng tôi được thành lập từ 2015 </h1> </p>
                    <p> <h3>Chúng tôi hứa hẹn sẽ đem đến trải nghiệm tốt nhất</h3> </p>
                    <p><h3>Đặt lịch ngay với chúng tôi</h3></p>
                    <div className="col-12">
                        <button type="submit" className="btn pb-2 pt-2 px-5 pe-5 mt-4" style={{ backgroundColor: "#fff", color: "#222" }} onClick={() => moveToBookingPage()}>Đặt lịch ngay</button>
                    </div>
                </div>
            </section >
            <section className="mt-5 container-fluid" style={{ backgroundImage: "url(/images/clinic.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center left 35%", backgroundSize: "contain" }}>
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-md-5">
                        <p><h5>CÁC CHUYÊN GIA LUÔN KHUYẾN CÁO</h5></p>
                        <p>
                            <span style={{ fontSize: "20px", color: "#01D09E" }}>Đừng bao giờ quên vệ sinh răng miệng</span><br />
                            <span style={{ color: "black" }}>Hãy luôn vệ sinh sạch sẽ răng miệng của chính bản thân bằng cách thường xuyên súc miệng và đánh răng ít nhất 2 lần/ngày.</span>
                        </p>
                        <p className="mt-4">
                            <span style={{ fontSize: "20px", color: "#01D09E" }}>Đừng quá mạnh tay khi chải răng</span><br />
                            <span style={{ color: "black" }}>Không nên đánh răng quá mạnh, nên đánh răng nhẹ nhàng theo vòng tròn bao gồm cả mặt trong, mặt ngoài của răng và lưỡi.</span>
                        </p>
                        <p className="mt-4">
                            <span style={{ fontSize: "20px", color: "#01D09E" }}>Thăm khám răng miệng thường xuyên</span><br />
                            <span style={{ color: "black" }}>Nên khám răng theo khuyến nghị của nha sĩ, khoảng 6 tháng/lần. Khi có các dấu hiệu sau đề nghị đi khám ngay: Đau răng, sưng hoặc xuất huyết lưỡi, sưng lợi và vùng xương hàm, có vết loét niêm mạc miệng.</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="mt-5 container">
                <h3 align="center">Các dịch vụ</h3>
                <div className="row">
                    <div className="col-md-4 pe-5 px-5 pt-2 pb-4">
                        <p>
                            <h5>Làm trắng răng</h5>
                            <span className="truncation-text">Tẩy trắng răng là phương pháp dùng các hợp chất kết hợp với năng lượng ánh sáng sẽ tạo ra phản ứng oxy hóa cắt đứt các chuỗi phân tử màu các chuỗi phân tử màu trong ngà răng. Từ đó giúp răng trắng sáng hơn so với màu răng ban đầu mà không làm tổn hại bề mặt răng hay bất kỳ yếu tố nào trong răng.</span>
                        </p>
                        <NavLink to="/services" className="text-decoration-none" style={{ color: "#01D09E" }}>Xem thêm &rarr;</NavLink>
                    </div>
                    <div className="col-md-4 pe-5 px-5 pt-2 pb-4">
                        <p>
                            <h5>Vệ snh răng miệng</h5>
                            <span className="truncation-text">Vệ sinh răng miệng là quá trình loại bỏ cao răng hoặc mảng bám cứng trên bề mặt răng và dưới nướu. Cao răng được hình thành từ vi khuẩn ăn các mảnh....</span>
                        </p>
                        <NavLink to="/services" className="text-decoration-none" style={{ color: "#01D09E" }}>Xem thêm &rarr;</NavLink>
                    </div>
                    <div className="col-md-4 pe-5 px-5 pt-2 pb-4">
                        <p>
                            <h5>Nhổ răng khôn</h5>
                            <span className="truncation-text">Nhổ răng khôn là kỹ thuật tương đối phức tạp đòi hỏi bác sĩ thực hiện phải có kỹ thuật và nhiều kinh nghiệm.</span>

                        </p>
                        <NavLink to="/services" className="text-decoration-none" style={{ color: "#01D09E" }}>Xem thêm &rarr;</NavLink>

                    </div>
                    <div className="col-md-4 pe-5 px-5 pt-2 pb-4">
                        <p>
                            <h5>Niềng răng thẩm mỹ</h5>
                            <span className="truncation-text">Niềng răng là phương pháp sử dụng khí cụ chuyên dụng được gắn cố định hoặc tháo lắp trên răng để giúp dịch chuyển và sắp xếp răng về đúng vị trí....</span>
                        </p>
                        <NavLink to="/services" className="text-decoration-none" style={{ color: "#01D09E" }}>Xem thêm &rarr;</NavLink>
                    </div>
                    <div class="col-md-4 pe-5 px-5 pt-2 pb-4">
                        <p>
                            <h5>Cấy ghép implant</h5>
                            <span className="truncation-text">Cấy ghép Implant là giải pháp phục hồi răng bị mất hiệu quả nhất bởi không chỉ giúp khôi phục thẩm mỹ hàm răng, đảm bảo khả năng ăn nhai bình thường, ....</span>
                        </p>
                        <NavLink to="/services" className="text-decoration-none" style={{ color: "#01D09E" }}>Xem thêm &rarr;</NavLink>
                    </div>
                    <div className="col-md-4 pe-5 px-5 pt-2 pb-4">
                        <p>
                            <h5 >Điều trị tủy</h5>
                            <span className="truncation-text">Trong cấu trúc răng, tủy răng đóng vai trò rất quan trọng là cung cấp dinh dưỡng nuôi sống và giúp răng luôn vững chắc, và khi tủy răng bị viêm....</span>
                        </p>
                        <NavLink to="/services" className="text-decoration-none" style={{ color: "#01D09E" }}>Xem thêm &rarr;</NavLink>
                    </div>
                </div>
                <h5 className="mt-2" align="center"><NavLink to="/services" className="text-decoration-none customLink" style={{ color: "#000" }}>Xem thêm &rarr;</NavLink></h5>
            </section>
            <section class="container mt-5 mb-5">
                <h4 align="center">Đội ngũ các chuyên gia nha sĩ</h4>
                <Slider
                    navigation={true}
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,

                        slideShadows: true
                    }}
                    pagination={{
                        clickable: true
                    }}
                    className="mySwiper"
                >
                    <SplideSlide>
                        <table className='table table-striped'>
                            <tr>
                                <td style={{ width: "20%" }}>
                                </td>
                                <td style={{ width: "20%" }}>
                                    <img style={{ width: "100%" }} src="/images/doctor2.jpg" />
                                </td>
                                <td style={{ width: "40%", align: 'l' }}>
                                    <p> Họ và tên: Dr. Nguyễn Văn A <br />
                                        Chuyên ngành: Nha khoa, orthodontics, implantology, etc.<br />
                                        Học vị: Tiến sĩ nha khoa.<br />
                                        Kinh nghiệm: 7 năm hoạt động trong lĩnh vực nha khoa.<br />
                                        Địa chỉ phòng khám: Quận 8, Thành phố HCM<br />
                                        Số điện thoại: 000000000000.<br />
                                        Email: nguyenvana@gmail.com </p>
                                </td>
                            </tr>
                        </table>
                    </SplideSlide>
                    <SplideSlide>
                        <table className='table table-striped'>
                            <tr>
                                <td style={{ width: "20%" }}>
                                </td>
                                <td style={{ width: "20%" }}>
                                    <img style={{ width: "100%" }} src="/images/doctor1.jpg" />
                                </td>
                                <td style={{ width: "40%", align: 'l' }}>
                                    <p> Họ và tên: Dr. Nguyễn Văn A <br />
                                        Chuyên ngành: Nha khoa, orthodontics, implantology, etc.<br />
                                        Học vị: Tiến sĩ nha khoa.<br />
                                        Kinh nghiệm: 7 năm hoạt động trong lĩnh vực nha khoa.<br />
                                        Địa chỉ phòng khám: Quận 8, Thành phố HCM<br />
                                        Số điện thoại: 000000000000.<br />
                                        Email: nguyenvana@gmail.com </p>
                                </td>
                            </tr>
                        </table>
                    </SplideSlide>
                    <SplideSlide>
                        <table className='table table-striped'>
                            <tr>
                                <td style={{ width: "20%" }}>
                                </td>
                                <td style={{ width: "20%" }}>
                                    <img style={{ width: "100%" }} src="/images/doctor1.jpg" />
                                </td>
                                <td style={{ width: "40%", align: 'l' }}>
                                    <p> Họ và tên: Dr. Nguyễn Văn A <br />
                                        Chuyên ngành: Nha khoa, orthodontics, implantology, etc.<br />
                                        Học vị: Tiến sĩ nha khoa.<br />
                                        Kinh nghiệm: 7 năm hoạt động trong lĩnh vực nha khoa.<br />
                                        Địa chỉ phòng khám: Quận 8, Thành phố HCM<br />
                                        Số điện thoại: 000000000000.<br />
                                        Email: nguyenvana@gmail.com </p>
                                </td>
                            </tr>
                        </table>
                    </SplideSlide>
                    <SplideSlide>
                        <table className='table table-striped'>
                            <tr>
                                <td style={{ width: "20%" }}>
                                </td>
                                <td style={{ width: "20%" }}>
                                    <img style={{ width: "100%" }} src="/images/doctor4.jpg" />
                                </td>
                                <td style={{ width: "40%", align: 'l' }}>
                                    <p> Họ và tên: Dr. Nguyễn Văn A <br />
                                        Chuyên ngành: Nha khoa, orthodontics, implantology, etc.<br />
                                        Học vị: Tiến sĩ nha khoa.<br />
                                        Kinh nghiệm: 7 năm hoạt động trong lĩnh vực nha khoa.<br />
                                        Địa chỉ phòng khám: Quận 8, Thành phố HCM<br />
                                        Số điện thoại: 000000000000.<br />
                                        Email: nguyenvana@gmail.com </p>
                                </td>
                            </tr>
                        </table>
                    </SplideSlide>

                </Slider>
                <h5 className="mt-2" align="center"><NavLink to="/doctors" className="text-decoration-none customLink" style={{ color: "#000" }}>Xem thêm &rarr;</NavLink></h5>
            </section>
            <section className='container'>
                <h3 align="center">Phản hồi của khách hàng</h3>
                <p className='text-center'>Cảm ơn bạn đã tin tưởng chúng tôi</p>
                <div class="container-fluid mt-4" align="center">
                    <Splide
                        options={{
                            type: "loop",
                            gap: "10px",
                            drag: "free",
                            arrows: false,
                            pagination: false,
                            perPage: 3,
                            autoScroll: {
                                pauseOnHover: false,
                                pauseOnFocus: false,
                                rewind: false,
                                speed: 1
                            }
                        }}
                        extensions={{ AutoScroll }}
                    >
                        {reviewList.map((row, idx) => {
                            return (
                                <SplideSlide>
                                    <div className='col-sm-12 reviewSlide'>
                                        <h1>{row.fullname}</h1>
                                        <p>{row.review}</p>
                                    </div>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>

            </section >
            <Footer style={{ marginTop: "80px" }} />
        </div >
    );
}
export default IntroductionPage;