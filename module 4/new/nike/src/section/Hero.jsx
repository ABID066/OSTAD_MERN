import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoes, statistics} from "../constant/index.jsx";
import {bigShoe1} from "../assets/images/index.js";
import ShoeCard from "../components/ShoeCard.jsx";
import {useState} from "react";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10
         max-container p-2">
            <div className="relative xl:w-[48%] flex flex-col justify-center item-start w-full max-xl: padding-x
            pt-28">
                <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
                    <span className="xl:absolute xl:bg-white xl:whitespace-nowrap z-10 pr-10 pb-3">The New Arrival</span>
                    <br/>
                    <span className="text-coral-red inline-block mt-3 pr-4">Nike</span>
                    Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-xl mt-3 leading-8 mb-14
                sm:max-w-sm">Discover stylish Nike arrivals, quality comfort,
                    and innovation for your active life
                </p>
                <Button label="Shop now" iconURL={arrowRight}/>

                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat)=>(
                        <div key={stat.label}>
                            <p className="text-4xl font-montserrat font-bold">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center
            xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img
                    alt="shoe collection"
                    src={bigShoeImg}
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                />
            </div>
            <div className="flex sm:gap-6 gap-4 xl:absolute xl:mt-[700px] xl:right-[9%]
           ">
                {shoes.map((shoe)=>(
                    <div key={shoe}>

                        <ShoeCard
                            imgURL={shoe}
                            changeBigShoeImage={(shoe)=>setBigShoeImg(shoe)}
                            bigShoeImg={bigShoeImg}
                        />
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Hero;