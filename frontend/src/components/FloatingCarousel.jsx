import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const FloatingCarousel = ({ carouselImages = [] }) => {

    return (
        <section className="w-2/5 flex justify-center items-center my-8">
            <div className="container mx-auto flex justify-center">
                <Swiper
                    loop={true}
                    spaceBetween={40}
                    grabCursor={true}
                    slidesPerView={1.5}
                    centeredSlides={true}
                    className='w-full'
                >
                    {carouselImages.map((image, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                        <div className="w-80 h-96">
                            <img
                                src={image.img_url}
                                alt={image.name || "Carousel image"}
                                className="w-full h-full object-top object-cover"
                            />
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FloatingCarousel;