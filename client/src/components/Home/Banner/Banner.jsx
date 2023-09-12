import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>NEW COLLECTION</h1>
                    <p>Get new jewelry what you wanted all your life</p>
                    <div className="buttons">
                        {/* <div className="button">READ MORE</div>
                        <div className="button v2">Shop now</div> */}
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    )
};

export default Banner;
