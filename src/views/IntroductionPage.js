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
            review: "Nha khoa ở đây có bác sĩ rất tốt, họ giúp răng của mình trở nên khỏe mạnh và sáng bóng. Răng đẹp lên khiến cháu tự tin và vui lắm ạ"
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
    const serviceList = [
        {
            image: "/images/chinhhinh.png",
            name: "Chỉnh hình răng",
            price: "30.000.000-50.000.000 đồng",
            description: "Niềng răng là quá trình điều chỉnh vị trí của răng để cải thiện hàm răng và ngoại hình. Bằng cách sử dụng các bộ niềng răng, các chuyên gia nha khoa có thể di chuyển răng từ vị trí ban đầu của chúng đến vị trí mong muốn, giúp cải thiện sự cân đối của khuôn mặt và tăng tính thẩm mỹ của nụ cười."
        },
        {
            image: "/images/dieutrituy.png",
            name: "Điều trị tủy",
            price: "1.500.000-2.000.000 đồng",
            description: "Điều trị tủy là quá trình y tế nhằm điều trị các vấn đề liên quan đến tủy răng khi tủy bị viêm, tổn thương hoặc nhiễm trùng. Quá trình này thường bao gồm việc loại bỏ tủy răng bị tổn thương, làm sạch và điều trị khuẩn tủy, sau đó điền kín khoang tủy để ngăn vi khuẩn xâm nhập và tái phát triển. Điều trị tủy không chỉ giữ cho răng được bảo tồn mà còn ngăn ngừa sự lan rộng của nhiễm trùng đến các cấu trúc xung quanh."
        },
        {
            image: "/images/nhorang.png",
            name: "Nhổ răng",
            price: "300.000-1.500.000 đồng",
            description: "Việc nhổ răng là quá trình y tế được thực hiện để loại bỏ răng đã bị tổn thương, bị nhiễm trùng hoặc không thể được điều trị. Quá trình này thường được thực hiện bởi các chuyên gia nha khoa hoặc các bác sĩ nha khoa có kỹ năng chuyên sâu. Việc nhổ răng được thực hiện sau khi xác định rằng răng không thể được cứu chữa hoặc không tốt cho sức khỏe nướu miệng và hàm răng. Đôi khi, việc nhổ răng cũng có thể là phần của quá trình điều trị nha khoa khác như chuẩn bị cho việc cấy ghép răng hoặc để tạo không gian cho các điều trị khác."
        },
        {
            image: "/images/laycaorang.png",
            name: "Cạo vôi răng",
            price: "400.000 đồng",
            description: "Cạo vôi răng là quá trình loại bỏ các cặn bám và mảng bám trên bề mặt của răng để làm sạch và ngăn ngừa sự hình thành của sâu răng và bệnh nướu. Thông qua việc sử dụng các dụng cụ chuyên dụng như cạo vôi và máy siêu âm, chuyên gia nha khoa sẽ loại bỏ các cặn bám, mảng bám và mảng vi khuẩn tích tụ trên răng và quanh nướu. Quá trình này giúp duy trì sức khỏe nướu miệng, ngăn ngừa sâu răng và các vấn đề liên quan đến vi khuẩn gây bệnh trong miệng."
        },
        {
            image: "/images/phuchinh.png",
            name: "Phục hình cố định",
            price: "1.000.000-5.000.000 đồng",
            description: "Phục hình cố định răng là quá trình khôi phục và cải thiện hàm răng bằng cách sử dụng các cấu trúc cố định như cầu răng, bọc răng, hay cấy ghép để thay thế răng bị mất, bị hỏng hoặc không còn khả năng sử dụng. Quá trình này thường được thực hiện bởi các chuyên gia nha khoa có kỹ năng chuyên sâu, nhằm tái tạo hàm răng hoàn chỉnh và cải thiện chức năng nhai cũng như thẩm mỹ nụ cười. "
        },
        {
            image: "/images/ranggia.png",
            name: "Răng giả tháo lắp",
            price: "6.000.000 đồng",
            description: "Răng giả tháo lắp là một loại phục hình không cố định, cho phép người dùng tháo lắp nó từ và lên trên nướu miệng một cách dễ dàng. Thường được làm từ chất liệu như nhựa hoặc kim loại nhẹ, răng giả tháo lắp có thể được đặt và tháo ra khỏi miệng hàng ngày để làm sạch, vệ sinh hoặc trong những trường hợp cần thiết khác. Điều này mang lại tính linh hoạt và thuận tiện cho người dùng so với các loại phục hình cố định khác, giúp duy trì sự thoải mái và sức khỏe tốt cho nướu miệng."
        },

    ]
    const doctorList = [
        {
            image: "/images/doctor1.jpg",
            fullName: "Nguyễn Gia Bảo",
            branch: "Thủ Đức, thành phố Hồ Chí Minh",
            speciality: "Chuyên khoa II Răng Hàm Mặt",
            experience: "10 năm",
            email: "baogia11@gmail.com",
            phone: "043244332"
        },
        {
            image: "/images/doctor2.jpg",
            fullName: "Nguyễn Thanh Thư",
            branch: "Thủ Đức, thành phố Hồ Chí Minh",
            speciality: "Bác sĩ Răng Hàm Mặt",
            experience: "1 năm",
            email: "thanhthunguyen1999@gmail.com",
            phone: "0949322478"
        },
        {
            image: "/images/doctor7.jpg",
            fullName: "Hoàng Thị Phương",
            branch: "Quận 7, thành phố Hồ Chí Minh",
            speciality: "Thạc sĩ Răng Hàm Mặt",
            experience: "8 năm",
            email: "phanvietthang718@gmail.com",
            phone: "0989976555"
        },
        {
            image: "/images/doctor4.jpg",
            fullName: "Lê Thị Lan Nhi",
            branch: "Thủ Đức, thành phố Hồ Chí Minh",
            speciality: "Chuyên khoa I Răng hàm mặt",
            experience: "3 năm",
            email: "21522425@gm.uit.edu.vn",
            phone: "0987869333"
        },
    ]
    var settings = {
        infinite: true,
        swipeToSlide: true,
        speed: 500,
        slidesToShow: 1,//number show each slide
        slidesToScroll: 1,//number item next 
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div >

            <TopNav />
            <section className="row g-0" style={{ backgroundColor: '#01D09E' }}>

                <div className="col-md-6 d-none d-md-block"><img alt="" src="/images/2.png" style={{ width: "90%" }} /></div>

                <div className="col-md-5 mt-lg-5 p-3">
                    <p> </p>
                    <p> <h1> Phòng khám Brilliance của chúng tôi được thành lập từ 2015 </h1> </p>
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
                    {serviceList.map((item, index) => {
                        return (
                            <div className="col-md-4 pe-5 px-5 pt-2 pb-4">
                                <p>
                                    <h5>{item.name}</h5>
                                    <span className="truncation-text">{item.description}</span>
                                </p>
                                <NavLink to="/services" className="text-decoration-none" style={{ color: "#01D09E" }}>Xem thêm &rarr;</NavLink>
                            </div>
                        )
                    })}
                </div>
                <h5 className="mt-2" align="center"><NavLink to="/services" className="text-decoration-none customLink" style={{ color: "#000" }}>Xem thêm &rarr;</NavLink></h5>
            </section>
            <section class="container mt-5 mb-5">
                <h4 align="center">Đội ngũ các chuyên gia nha sĩ</h4>
                <div class="container-fluid mt-4">
                    <Slider {...settings}>
                        {doctorList.map((item, index) => {
                            return (
                                <div className="container mb-2" align="center">
                                    <div className="row col-lg-6 col-md-9">
                                        <div className='col-md-5 col-8 m-auto' align="right">
                                            <img alt="" src={item.image} style={{ width: "100%" }} />
                                        </div>
                                        <div className='col-md-7 m-auto text-md-start'>
                                            <div className='mt-2'>
                                                <span style={{ fontWeight: "600" }}>Họ và tên: </span> {item.fullName}
                                            </div>
                                            <div className='mt-2'>
                                                <span style={{ fontWeight: "600" }}>Bằng cấp: </span> {item.speciality}
                                            </div>
                                            <div className='mt-2'>
                                                <span style={{ fontWeight: "600" }}>Kinh nghiệm: </span> {item.experience}
                                            </div>
                                            <div className='mt-2'>
                                                <span style={{ fontWeight: "600" }}>Chi nhánh: </span> {item.branch}
                                            </div>
                                            <div className='mt-2'>
                                                <span style={{ fontWeight: "600" }}>Số điện thoại: </span> {item.phone}
                                            </div>
                                            <div className='mt-2 mb-2'>
                                                <span style={{ fontWeight: "600" }}>Email: </span> {item.email}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>

                </div>
                <h5 className="mt-2" align="center"><NavLink to="/doctors" className="text-decoration-none customLink" style={{ color: "#000" }}>Xem thêm &rarr;</NavLink></h5>
            </section >
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
                            perPage: 4,
                            breakpoints: {
                                1024: {
                                    perPage: 3,

                                },
                                768: {
                                    perPage: 2,

                                },
                            },
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
                                    <div className='reviewSlide' style={{ height: "100%" }}>
                                        <h3>{row.fullname}</h3>
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