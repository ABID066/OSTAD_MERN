"use client"
import React from 'react';
import Menu from "@/components/Menu";
import {useRouter} from "next/navigation";

const Page = () => {

    const router = useRouter();

    const goto=()=>{
        router.push("/product");
        router.replace("/product/details?name=Mobile&price=20000tk");
    }

    return (
        <div>
            <Menu/>
          <h1>Home Page</h1>
            <button onClick={goto}>Back to Product</button>
        </div>
    );
};

export default Page;