import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {postByCategory} from "../APIRequest/APIRequest.js";
import Loader from "../Component/Loader.jsx";
import BlogList from "../Component/BlogList.jsx";

const PostByCategory = () => {

    let {categoryID} = useParams();

    let [list, setList] = useState(null);

    useEffect(()=>{
        (async ()=>{
            let res = await postByCategory(categoryID)
            setList(res)

        })()
    },[categoryID])

    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list} />}
        </Layout>
    );
};

export default PostByCategory;