import {Fragment} from "react";


const LazyLoader = () => {
    return (
        <div>
            <Fragment>
                <div className={" LoadingOverlay d-none"}>
                    <div className="Line-Progress">
                        <div className="indeterminate"></div>
                    </div>
                </div>
            </Fragment>
        </div>
    );
};

export default LazyLoader;