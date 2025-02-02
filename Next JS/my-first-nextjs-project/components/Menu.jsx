"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const Menu = () => {
    const currentRoute = usePathname();
    return (
        <div>
            <Link className={currentRoute==="/" && "active-link"} href={"/"}>Home</Link><br/>
            <Link className={currentRoute==="/product" && "active-link"}  href={"/product"}>Product</Link><br/>
            <Link className={currentRoute==="/profile" && "active-link"}  href={"/profile"}>Profile</Link><br/>
        </div>
    );
};

export default Menu;