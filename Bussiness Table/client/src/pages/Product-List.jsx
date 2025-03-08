import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { getProductList } from "../APIRequest/APIRequest";

const ProductList = () => {
    let [searchKey, setSearchKey] = useState([]);
    let [perPageKey, setPerPageKey] = useState(5);

    useEffect(() => {
        async function fetchData() {
            await getProductList(1, perPageKey, searchKey);
        }
        fetchData();
    }, [perPageKey, searchKey]); // Adding dependencies if values affect re-fetching

    let ALLProduct = useSelector((state) => state.product.ALLProduct);
    let Total = useSelector((state) => state.product.Total);

    const handlePageClick = (event) => {
        getProductList(event.selected + 1, perPageKey, searchKey);
    };

    const searchData = () => {
        searchOnChange();
    };

    const PageKeyOnChange = (e) => {
        const value = parseInt(e.target.value);
        setPerPageKey(value);
        getProductList(1, value, searchKey);
    };

    const searchOnChange = (e) => {
        const value = e.target.value.trim() || [];
        setSearchKey(value);
        getProductList(1, perPageKey, value);
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
                                                    className="btn btn-outline-primary btn-sm mb-0"
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
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Stock</th>
                                                        <th>Code</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {ALLProduct.map((item) => (
                                                        <tr key={item.product_code}>
                                                            <td>
                                                                <div className="d-flex px-2 py-1">
                                                                    <div>
                                                                        <img
                                                                            alt=""
                                                                            src={item.image}
                                                                            className="avatar me-3"
                                                                        />
                                                                    </div>
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        <h6 className="mb-0 text-xs">
                                                                            {item.title}
                                                                        </h6>
                                                                        <p className="text-xs text-secondary mb-0">
                                                                            {item.category}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="text-xs font-weight-bold mb-0">
                                                                    {item.brand}
                                                                </p>
                                                                <p className="text-xs text-secondary mb-0">
                                                                    {item.price} Taka
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <p className="badge bg-gradient-success">
                                                                    {item.stock}
                                                                </p>
                                                            </td>
                                                            <td>
                                                                    <span className="text-secondary text-xs font-weight-bold">
                                                                        {item.product_code}
                                                                    </span>
                                                            </td>
                                                        </tr>
                                                    ))}
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
