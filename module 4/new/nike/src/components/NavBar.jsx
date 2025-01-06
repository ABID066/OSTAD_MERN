import {headerLogo} from "../assets/images/index.js";
import {navLinks} from "../constant/index.jsx";
import {hamburger} from "../assets/icons/index.js";

const NavBar = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nab className="flex  justify-between items-center max-container">
                <a href='/'>
                    <img
                        alt="logo"
                        src={headerLogo}
                        width={130}
                        height={30}
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-28 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="font-montserrat leading-normal
                            text-lg text-slate-gray">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img
                    src={hamburger}
                    alt="hamburger"
                    width={25}
                    height={25}
                    />
                </div>
            </nab>
        </header>
    );
};

export default NavBar;