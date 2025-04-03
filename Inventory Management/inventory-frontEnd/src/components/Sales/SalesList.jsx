import {Fragment, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import moment from "moment";
import {Link} from "react-router-dom";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import ReactPaginate from "react-paginate";
import {SaleListRequest} from "../../APIRequest/SaleAPIRequest.js";

const SalesList = () => {
    let [searchKey, setSearchKey] = useState([]);
    let [perPageKey, setPerPageKey] = useState(5);

    useEffect(() => {
        (async () => {
            await SaleListRequest(1, perPageKey, searchKey);
        })();
    }, [perPageKey, searchKey]);

    let DataList = useSelector((state) => state.sale.List);
    let Total = useSelector((state) => state.sale.ListTotal);


    const handlePageClick = async (event) => {
        await SaleListRequest(event.selected + 1, perPageKey, searchKey);
    };

    const searchData = async () => {
        await searchOnChange();
    };

    const PageKeyOnChange = async (e) => {
        const value = parseInt(e.target.value);
        setPerPageKey(value);
        await SaleListRequest(1, value, searchKey);

    };

    const searchOnChange = async (e) => {
        const value = e.target.value.trim() || [];
        setSearchKey(value);
        await SaleListRequest(1, perPageKey, value);
        console.log(Total);
    };

    return (
        <Fragment>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-6">
                                            <h5>My Product List</h5>
                                        </div>
                                        <div className="col-2">
                                            <select
                                                onChange={PageKeyOnChange}
                                                className="form-control mx-2 form-select-sm form-select form-control-sm"
                                            >
                                                {[5, 10, 20, 30, 50, 100, 200].map((num) => (
                                                    <option key={num} value={num}>
                                                        {num} Per Page
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <input
                                                    onChange={searchOnChange}
                                                    type="text"
                                                    className="form-control form-control-sm"
                                                    placeholder="Search.."
                                                />
                                                <button
                                                    onClick={searchData}
                                                    className="btn btn-outline-success btn-sm mb-0"
                                                >
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive data-table">
                                                <table className="table">
                                                    <thead className="sticky-top bg-white">
                                                    <tr>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Customer</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Grand Total</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Shipping Cost</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Vat/Tax</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Other Cost</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Discount</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Note</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</td>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        DataList.map((item) =>
                                                            // eslint-disable-next-line react/jsx-key
                                                            <tr key={item["_id"]}>
                                                                <td>
                                                                    <p className="text-xs text-start">
                                                                        {item["customers"][0] ? item["customers"][0]['customer_name'] : ""}
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs text-start">
                                                                        {item["grandTotal"]}

                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs text-start">{item["shippingCost"]}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs text-start">{item["vatTax"]}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs text-start">{item["otherCost"]}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs text-start">{item["discount"]}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs text-start">{item["note"]}</p>
                                                                </td>
                                                                <td><p
                                                                    className="text-xs text-start">{moment(item["createdAt"]).format('MMMM Do YYYY')}</p>
                                                                </td>

                                                                <td>
                                                                    <Link
                                                                        to={`/SalesCreateUpdatePage?id=${item["_id"]}`}
                                                                        className="btn text-info btn-outline-light p-2 mb-0 btn-sm">
                                                                        <AiOutlineEdit size={15}/>
                                                                    </Link>
                                                                    <button
                                                                        className="btn btn-outline-light text-danger p-2 mb-0 btn-sm ms-2">
                                                                        <AiOutlineDelete size={15}/>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-5">
                                            <nav aria-label="Page navigation example">
                                                <ReactPaginate
                                                    previousLabel="<"
                                                    nextLabel=">"
                                                    pageClassName="page-item"
                                                    pageLinkClassName="page-link"
                                                    previousClassName="page-item"
                                                    previousLinkClassName="page-link"
                                                    nextClassName="page-item"
                                                    nextLinkClassName="page-link"
                                                    breakLabel="..."
                                                    breakClassName="page-item"
                                                    breakLinkClassName="page-link"
                                                    pageCount={Math.ceil(Total / perPageKey)}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={5}
                                                    onPageChange={handlePageClick}
                                                    containerClassName="pagination"
                                                    activeClassName="active"
                                                />
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


export default SalesList;