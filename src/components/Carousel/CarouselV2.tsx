'use client';

import React, { useEffect, useState } from 'react'
import { Carousel as ACarousel } from 'antd';

import CarouselItem from './CarouselItem'

const slides = [
    {
        id: 0,
        title: '',
        description: '',
        img: 'https://loot-assets.s3.us-east-2.amazonaws.com/Assets/612cd6_655db0dc856b4ad694e07392dd36c727~mv2.png.webp',
        url: '/',
        background: 'bg-base'
    },
    {
        id: 1,
        title: 'Summer sale',
        description: 'Up to 50% OFF!',
        img: 'https://loot-assets.s3.us-east-2.amazonaws.com/Assets/terryt3903_T-shirt_pantsand_socks_are_floating_in_the_air_T-shi_c4981ff2-6d93-45a3-8373-0dedc562fc45.png',
        url: '/',
        background: 'bg-base'
    },
    {
        id: 2,
        title: 'Winter sale',
        description: 'Up to 50% OFF!',
        img: 'https://loot-assets.s3.us-east-2.amazonaws.com/Assets/whiteprivilegethethird_product_mockup_template_for_a_black_hood_8815fee4-c85a-4479-a5e6-6da6d22a9368.png',
        url: '/',
        background: 'bg-base'
    },
]

const CarouselV2 = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => {
                const a = (prev + 1) === slides.length ? 0 : prev + 1
                console.log(a + "b")
                return a
            })
            const carousel = document.getElementById('banner-carousel');
            console.log(current)
            if (carousel) {
                const target = document.querySelector<HTMLDivElement>(`#slide${current}`)!;
                const left = target.offsetLeft;
                carousel.scrollTo({ left: left });
            }
        }, 3000)
        return () => clearInterval(interval)
    })

    return (
        <ACarousel autoplay autoplaySpeed={2000} dotPosition="left" appendDots={dots => {
            console.log(dots)
            return (
                <div>
                    <ul style={{ margin: "0px" }}>
                        {dots && Array.isArray(dots) && dots.map((dot) => (
                            <li
                                key={`pagination${dot.key}`}
                                className={`p-4 ${dot.props.className == 'slick-active' ? 'bg-accent outline-none text-base' : ''}`}>
                                    {dot.key + 1}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }}>
            {slides.map((slide) => (
                <div key={`slide${slide.id}`} id={`slide${slide.id}`} className="carousel-item w-full">
                    <img
                        id={`#slide${slide.id}`}
                        src={slide.img}
                        className="w-full h-[100vh] object-cover" />
                </div>
            ))}
        </ACarousel>
    )
}

export default CarouselV2