import React from 'react'
interface CarouselItemProps {
    imageUrl: string;
    id: string;
}

//"https://loot-assets.s3.us-east-2.amazonaws.com/Assets/612cd6_655db0dc856b4ad694e07392dd36c727~mv2.png.webp"
const CarouselItem = ({ imageUrl, id } : CarouselItemProps) => {
    return (
        <div id={id} className="carousel-item relative w-full">
            <img
                src={imageUrl}
                className="w-full object-cover" />
        </div>
    )
}

export default CarouselItem