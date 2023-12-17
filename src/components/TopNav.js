import { NavLink } from "react-router-dom"
const TopNav = () => {
    return (
        <div >
            <div class="row g-0">
                <div className="col-md-4">
                    <img src='/images/banner.gif' style={{ width: "100%" }} />
                </div>
                <div className="col-md-8">
                    <p className="" style={{ marginLeft: '30px', fontSize: "35px", color: "#01D09E" }}>Chào mừng đến với chúng tôi</p>
                    <p style={{ marginLeft: '30px' }}><h3>Với kinh nghiệm hơn 7 năm, chúng tôi sẽ đem đến cho bạn nhưng trải nghiệm tốt nhất</h3></p>
                </div>
            </div>

            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container" id="topNav">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <div>
                            <img src="/images/1.png" alt="Avatar Logo" style={{ width: "50px" }} />
                        </div>
                    </button>

                    <div className="mx-3"></div>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item me-4">
                                <NavLink className="nav-link" to="/" exact>Giới thiệu</NavLink>
                            </li>
                            <li className="nav-item me-4" >
                                <NavLink className="nav-link" to="/doctors">Bác sĩ</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link" to="/services">Dịch vụ</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link" to="/contacts">Liên lạc</NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink className="nav-link" to="/booking">Đặt lịch</NavLink>
                            </li>
                            <li className="nav-item me-4 mb-2">
                                <NavLink className="nav-link" to="/manager">Quản lý</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-item">
                        <NavLink className="nav-link" to="/sign_in">Đăng nhập</NavLink>
                    </div>
                    <div className="nav-item d-none d-lg-block ms-5">
                        <NavLink className="nav-link" to="/sign_up">Đăng ký</NavLink>
                    </div>

                </div>

            </nav >
        </div>
    )
}
export default TopNav;