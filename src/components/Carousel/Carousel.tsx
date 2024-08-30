'use client';

import React, { useState } from 'react'
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

const Carousel = () => {
    const [current, setCurrent] = useState(0)

    return (

        <div className="carousel w-full h-[100vh]">
            {slides.map((slide) => (
                <div key={`slide${slide.id}`} id={`slide${slide.id}`} className="carousel-item w-full">
                    <img
                        id={`#slide${slide.id}`}
                        src={slide.img}
                        className="w-full h-[100vh] object-cover" />
                </div>
            ))}
            <div className='absolute m-auto h-full justify-center left-4 md:left-8 flex flex-col gap-4 z-[5]'>
                {slides.map((slide) => (
                    <a key={`pagination${slide.id}`} href={`#slide${slide.id}`} className="btn btn-sm">{slide.id + 1}</a>
                ))}
            </div>
        </div>
    )
}

export default Carousel