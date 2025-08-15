import React from 'react';
import Slider from 'react-slick';

import img2 from '/sliderImage/img2.png';
import img1 from '/sliderImage/img1.png';
import img3 from '/sliderImage/img3.png';
import img4 from '/sliderImage/img4.png';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const SliderImage = [{
   image: "/sliderImage/img1.png"
}]

const ImageSlider = () => {
    // Configuration settings for the slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <section className="w-full">
            <div className="w-11/12 mx-auto">
                <Slider {...settings}>
                    <div>
                        <img src={img2} alt="Slide 1" className="w-full h-auto object-cover" />
                    </div>
                    <div>
                        <img src={img1} alt="Slide 2" className="w-full h-auto object-cover" />
                    </div>
                    <div>
                        <img src={img3} alt="Slide 3" className="w-full h-auto object-cover" />
                    </div>
                    <div>
                        <img src={img4} alt="Slide 4" className="w-full h-auto object-cover" />
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default ImageSlider;