import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Welcome to our vibrant and trendy juvenile store! We pride ourselves on being the ultimate destination for fashion-forward youngsters. We curate a collection that embraces individuality and sparks creativity. With a passion for quality and a commitment to exceptional customer service, we're here to make every shopping experience unforgettable.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Kazakhstan, Karaganda city, Bukhar zhyrau street 75/3, business center "POINT", 4th floor
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 7-700-145-53-82</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: s.mereimbaev@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text" onClick={() => navigate("/category/1")}>Earrings</span>
                    <span className="text" onClick={() => navigate("/category/2")}>Rings</span>
                    <span className="text" onClick={() => navigate("/category/3")}>Bracelets</span>
                    <span className="text" onClick={() => navigate("/category/4")}>Necklace</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text" onClick={() => navigate("/")}>Home</span>
                    {/* <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span> */}
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        Have a good day and have fun ♥
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;