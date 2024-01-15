import { NavLink, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../hook/AuthProvider";
import nav from "../hook/PhanQuyen";

const TopNav = () => {
    const history = useHistory();
    const { Logout, user, scope } = useContext(AuthContext);
    const handleSignout = () => {
        Logout(history);
    };

    return (
        <div >
            <div class="row g-0">
                <div className="col-lg-5 col-md-6 pe-3">
                    <img src='/images/banner.gif' style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="col-lg-7 col-md-6 ps-3">
                    <p style={{ fontSize: "35px", color: "#01D09E" }}>Chào mừng đến với chúng tôi</p>
                    <p><h3>Với kinh nghiệm hơn 7 năm, chúng tôi sẽ đem đến cho bạn nhưng trải nghiệm tốt nhất</h3></p>
                </div>
            </div>

            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container-fluid ms-lg-5 me-lg-5 ms-md-3 me-md-3" id="topNav">
                    <button
                        className="navbar-toggler mb-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar"
                    >
                        <img src="/images/1.png" alt="Avatar Logo" style={{ width: "50px" }} />
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav d-flex row col-12">
                            {scope?.map((val, idx) => {
                                return (
                                    <li className="nav-item col-sm-auto">
                                        {val.path !== "/manager" ? (
                                            <NavLink className="nav-link" to={val.path} exact>
                                                {val.name}
                                            </NavLink>
                                        ) : (
                                            <NavLink className="nav-link" to={val.path}>
                                                {val.name}
                                            </NavLink>
                                        )}
                                    </li>
                                );
                            })}
                            {(user === null || user?.Loai === "KhachHang") && (
                                <div className="dropdown mb-2 col-sm-auto">
                                    <button
                                        className="d-flex align-items-center justify-content-center link-dark text-decoration-none dropdown-toggle mt-2 ps-md-2 p-0"
                                        style={{
                                            border: "none",
                                            backgroundColor: "transparent",
                                            fontWeight: "bold",
                                            fontSize: "16px",
                                        }}
                                        id="dropdownUser1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Đặt lịch
                                    </button>
                                    <ul
                                        className="dropdown-menu dropdown-menu-dark text-small shadow"
                                        style={{ backgroundColor: "#01D09E", width: "fit-content" }}
                                        aria-labelledby="dropdownUser1"
                                    >
                                        <li>
                                            <Link className="dropdown-item" to="/booking">
                                                Nhân viên liên hệ
                                            </Link>
                                        </li>
                                        <hr className="dropdown-divider" />
                                        <li>
                                            <Link className="dropdown-item" to="/bookingOnline">
                                                Đặt online
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <div className="d-sm-flex col-sm-auto ms-lg-auto">
                                {user == null && (
                                    <div className="nav-item me-sm-4">
                                        <NavLink className="nav-link" to="/sign_in">
                                            Đăng nhập
                                        </NavLink>
                                    </div>
                                )}

                                {user !== null && (
                                    <div className="dropdown me-sm-4">
                                        <button
                                            className="d-flex align-items-center justify-content-center link-dark text-decoration-none dropdown-toggle p-0"
                                            style={{ border: "none", backgroundColor: "transparent" }}
                                            id="dropdownUser1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {user != null && (
                                                <text className="nav-link">{user.ten}</text>
                                            )}
                                            <img
                                                src="/images/ava.png"
                                                alt="hugenerd"
                                                width="40"
                                                height="40"
                                                style={{ borderRadius: "50%" }}
                                            />
                                        </button>
                                        <ul
                                            className="dropdown-menu dropdown-menu-dark text-small shadow"
                                            style={{ backgroundColor: "#01D09E", width: "fit-content" }}
                                            aria-labelledby="dropdownUser1"
                                        >
                                            <li>
                                                <Link className="dropdown-item" to="/profile">
                                                    Hồ sơ cá nhân
                                                </Link>
                                            </li>
                                            <hr className="dropdown-divider" />
                                            <li>
                                                <button className="dropdown-item" onClick={handleSignout}>
                                                    Đăng xuất
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                {user === null && (
                                    <div className="nav-item col-auto">
                                        <NavLink className="nav-link" to="/sign_up">
                                            Đăng ký
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default TopNav;