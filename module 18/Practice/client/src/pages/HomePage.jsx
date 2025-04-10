import React, {useEffect, useState} from 'react';
import MasterLayout from "../components/shared/MasterLayout.jsx";
import axios from "axios";

const HomePage = () => {

    const [Data, setData] = useState(null);

    useEffect(() => {
        (async ()=>{
            let res =await axios.get("api/v1/CreateInvoice")
            setData(res.data);
        })()
    }, []);

    return (
        <MasterLayout>

                <h1>Home pAGE CONTENTf</h1>
            {
                Data!==null &&
                (
                    <ul>
                        <li>Total: {Data['total']}</li>
                        <li>Total: {Data['vat']}</li>
                        <li>Total: {Data['payable']}</li>
                    </ul>
                )
            }
        </MasterLayout>
    );
};

export default HomePage;