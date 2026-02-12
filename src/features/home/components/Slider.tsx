"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import sliderImage from '@/assets/images/home-slider-1.png';

const sliderData = [
    {
        id: 1,
        title: 'Fast delivery',
        subtitle: 'Delivered to you in the shortest time',
        image: sliderImage,
    },
    {
        id: 2,
        title: 'Excellent service',
        subtitle: 'High quality service',
        image: sliderImage,
    },
    {
        id: 3,
        title: 'Best prices',
        subtitle: 'Best prices',
        image: sliderImage,
    },
];

export default function Slider() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="slider-cards"
                >
                    {sliderData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                {/* صورة كاملة */}
                                <div className="relative w-full h-[350px] md:h-[400px]">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                </div>

                                {/* النص فوق الصورة */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                                    <p className="text-white/80 text-sm">{slide.subtitle}</p>
                                    <button
                                        type="button"
                                        className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300"
                                    >
                                        Order now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
        .slider-cards .swiper-button-next,
        .slider-cards .swiper-button-prev {
          color: #f97316;
          background: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .slider-cards .swiper-button-next::after,
        .slider-cards .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }
        .slider-cards .swiper-pagination {
          bottom: -5px;
        }
        .slider-cards .swiper-pagination-bullet {
          background: #f97316;
          opacity: 0.4;
          width: 10px;
          height: 10px;
        }
        .slider-cards .swiper-pagination-bullet-active {
          opacity: 1;
          width: 25px;
          border-radius: 5px;
        }
      `}</style>
        </section>
    );
}

