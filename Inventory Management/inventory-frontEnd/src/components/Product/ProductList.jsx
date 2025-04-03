import {Fragment, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import moment from "moment";
import {Link} from "react-router-dom";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import ReactPaginate from "react-paginate";
import {ProductListRequest} from "../../APIRequest/ProductAPIRequest.js";

const ProductList = () => {
    let [searchKey, setSearchKey] = useState([]);
    let [perPageKey, setPerPageKey] = useState(5);
    let [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        (async () => {
            await ProductListRequest(1, perPageKey, searchKey);
        })();
    }, [perPageKey, searchKey]);

    let DataList = useSelector((state) => state.product.List);
    let Total = useSelector((state) => state.product.ListTotal);


    const handlePageClick = async (event) => {
        setCurrentPage(event.selected + 1);
        await ProductListRequest(event.selected + 1, perPageKey, searchKey);
    };

    const searchData = async () => {
        await searchOnChange();
    };

    const PageKeyOnChange = async (e) => {
        const value = parseInt(e.target.value);
        setPerPageKey(value);
        setCurrentPage(1);
        await ProductListRequest(1, value, searchKey);

    };

    const searchOnChange = async (e) => {
        const value = e.target.value.trim() || [];
        setSearchKey(value);
        await ProductListRequest(1, perPageKey, value);
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
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">#No</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Unit</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Brand</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Categories</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Details</td>
                                                        <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</td>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        DataList.map((item, i) =>
                                                            // eslint-disable-next-line react/jsx-key
                                                            <tr key={item["_id"]}>
                                                                <td><p
                                                                    className="text-xs text-start">{i + 1 + (currentPage - 1) * perPageKey}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs text-start">{item["product_name"]}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs text-start">{item.unit}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs text-start">{item["brands"][0] ? item["brands"][0]['brand_name'] : ""}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs text-start">{item["categories"][0] ? item["categories"][0]['category_name'] : ""}</p>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs text-start">{item["product_details"]}</p>
                                                                </td>
                                                                <td>
                                                                    <Link
                                                                        to={`/ProductCreateUpdatePage?id=${item["_id"]}`}
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

export default ProductList;