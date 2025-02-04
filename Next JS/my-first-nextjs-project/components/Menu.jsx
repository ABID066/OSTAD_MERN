"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const Menu = () => {
    const currentRoute = usePathname();

    return (
        <div>

            <Link className={currentRoute==="/" ? "active-link": "pending-link"} href={"/"}>Home</Link><br/>
            <Link className={currentRoute==="/product" ? "active-link": "pending-link"}  href={"/product"}>Product</Link><br/>
            <Link className={currentRoute==="/profile" ? "active-link": "pending-link"}  href={"/profile"}>Profile</Link><br/>
            <Link className={currentRoute==="/product/details" ? "active-link": "pending-link"}
                  href={{pathname: "/product/details", query:{name:"book", price:"200tk"}}}>
                Product Details</Link><br/>
        </div>
    );
};

export default Menu;