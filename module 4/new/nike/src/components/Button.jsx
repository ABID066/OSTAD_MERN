

// eslint-disable-next-line react/prop-types
const Button = ({label, iconURL}) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 border-coral-red
        border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
            {label}
            <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5"/>
        </button>
    );
};

export default Button;