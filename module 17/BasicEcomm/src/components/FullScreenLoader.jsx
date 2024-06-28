import React from 'react';

const FullScreenLoader = () => {
    return (
        <div className="container mt-5 looder">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-2 mt-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FullScreenLoader;