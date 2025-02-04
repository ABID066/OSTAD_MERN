
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCustom} from "../../redux/state/counter/counterSlice.js";
import {useRef} from "react";

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const myNumber = useRef();
    
    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h4 className="text-white">My Counter App</h4>
            </div>
            <div className="card-body">
                <h1 className="text-center">{count}</h1>
                <div className="my-4 text-center">
                    <button className="btn btn-success mx-4" onClick={()=>{dispatch(increment())}}>Increase</button>
                    <button className="btn btn-danger " onClick={()=>{dispatch(decrement())}}>Decrease</button>
                </div>
                <div className="my-4 text-center">
                    <input ref={myNumber} className="w-50 mx-auto my-4 form-control" type="number"/>
                    <button className="btn m-2 btn-success mx-4" onClick={()=>{dispatch(setCustom(myNumber.current.value))} }>Set Custom Value</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;