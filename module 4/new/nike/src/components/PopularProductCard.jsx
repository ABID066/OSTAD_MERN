import React from 'react';
import {star} from "../assets/icons/index.js";

const PopularProductCard = ({imgURL, name, price}) => {
    return (
        <div className="flex flex-col items-center w-full my-5">
            {/* Image Container */}
            <div className="flex flex-1 flex-col w-full max-sm:w-full">
                <img
                    src={imgURL}
                    alt={name}
                    className="w-[280px] h-[280px] "
                />


                {/* Rating Section */}
                <div className="mt-8 flex justify-start gap-2.5">
                    <img src={star} alt="rating" width={20} height={20}/>
                    <p className="font-montserrat text-md
                    leading-normal text-slate-gray">
                        (4.5)
                    </p>
                </div>
                <h3 className="mt-2 text-2xl leading-normal
                    font-semibold font-palanquin">
                    {name}
                </h3>
                <p className="mt-2 font-semibold font-montserrat
                    text-coral-red text-2xl leading-normal">
                    {price}
                </p>

            </div>
        </div>
    );
};

export default PopularProductCard;
