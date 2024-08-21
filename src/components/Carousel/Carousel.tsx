'use client';

import React from 'react'
import CarouselItem from './CarouselItem'

const ids: number[] = [
    1,
    2,
    3,
    4,
]

const Carousel = () => {
    let currentId: number = ids[0]

    return (
        <div className="carousel w-full h-screen">
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-[3]">
                <a href={"#"+(currentId - 1).toString()} className="btn btn-ghost btn-square" onClick={() => {
                    currentId = ids[ids.indexOf(currentId) - 1]
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 2L7 12L17 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <a href={"#"+(currentId + 1).toString()} className="btn btn-ghost btn-square" onClick={() => {
                    currentId = ids[ids.indexOf(currentId) + 1]
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 22L17 12L7 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
            {ids.map((id: number) => (
                <CarouselItem key={"#"+id.toString()} id={id.toString()} imageUrl={"https://loot-assets.s3.us-east-2.amazonaws.com/Assets/612cd6_655db0dc856b4ad694e07392dd36c727~mv2.png.webp"}></CarouselItem>
            ))}
        </div>
    )
}

export default Carousel