import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';

const Carousel = () => {
    const { data, fetchAllProducts } = getData()
    console.log(data);

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
                <AiOutlineArrowLeft
                    className='arrows'
                    style={{
                        ...style,
                        display: "block",
                        borderRadius: "50px",
                        background: "#f53347",
                        color: "white",
                        position: "absolute",
                        padding: "2px",
                        left: "50px"
                    }}
                />
            </div>
        )
    }

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`}>
                <AiOutlineArrowRight
                    className='arrows'
                    style={{
                        ...style,
                        display: "block",
                        borderRadius: "50px",
                        background: "#f53347",
                        color: "white",
                        position: "absolute",
                        padding: "2px",
                        right: "50px"
                    }}
                />
            </div>
        )
    }

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    data?.slice(0, 7)?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-gray-900 via-gray-800 to-black"
                            >
                                <div className="flex flex-col md:flex-row gap-10 justify-center min-h-[450px] md:min-h-[550px] lg:min-h-[650px] items-center px-6">
                                    {/* Text Section */}
                                    <div className="md:space-y-6 space-y-3 text-center md:text-left">
                                        <h3 className="text-red-400 font-medium text-sm tracking-widest uppercase">
                                            Powering Your World with the Best in Electronics
                                        </h3>
                                        <h1 className="md:text-5xl text-2xl font-extrabold text-white drop-shadow-lg leading-tight">
                                            {item.title}
                                        </h1>
                                        <p className="md:w-[500px] text-gray-400 text-sm md:text-base">
                                            {item.description}
                                        </p>
                                        <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-5 py-2.5 rounded-lg cursor-pointer mt-3 hover:scale-105 transition-transform">
                                            Shop Now
                                        </button>
                                    </div>

                                    {/* Image Section */}
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="rounded-2xl max-w-[280px] md:max-w-[380px] lg:max-w-[480px] hover:scale-105 transition-transform shadow-[0_0_30px_rgba(239,68,68,0.5)] object-contain mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </Slider>

            {/* Category Section */}
            <Category />
        </div>
    )
}

export default Carousel
