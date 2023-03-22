import React from 'react';

const Rental = ({title, image, price}) => {
    return (
        <div className="">
            <div className="flex">
                <img src={image} alt="" className="object-cover rounded-[1.3rem]" />
                <div className="absolute text-black font-bold">{title}</div>
            </div>
        </div>
    );
}

export default Rental;
