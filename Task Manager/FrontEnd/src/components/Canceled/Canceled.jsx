import {Fragment, useEffect} from 'react';
import {AiOutlineCalendar, AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import {Container} from "react-bootstrap";
import {TaskListByStatus} from "../../APIRequest/APIRequest.js";
import {useSelector} from "react-redux";
import {DeleteAlert} from "../../helper/DeleteAlert.js";
import {UpdateAlert} from "../../helper/UpdateAlert.js";

const Canceled = () => {
    useEffect(
        ()=>{
            TaskListByStatus("Canceled");
        },[]
    )

    const CanceledList = useSelector((state)=>state.task.Canceled)

    const DeleteItem=(id)=>{
        DeleteAlert(id).then((result)=>{
            if(result===true){
                TaskListByStatus("Canceled");
            }
        })
    }
    const ChangeStatusItem=(id,status)=>{
        UpdateAlert(id,status).then(res=>{
            if(res===true){
                TaskListByStatus("Canceled");
            }
        })
    }

    return (
        <Fragment>
            <Container fluid={true} className="content-body">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-8 px-3">
                        <h5>Task Canceled</h5>
                    </div>
                    <div className="col-12 float-end col-md-6 col-lg-4 px-2">
                        <div className="row">
                            <div className="col-8">
                                <input className="form-control w-100" type="text" placeholder="Search Task" />
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary w-100">Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row p-0 m-0">
                    {/** Assuming items are mapped from a data array */}
                    {CanceledList.map((item, index) => (
                        <div key={index} className="col-12 col-lg-4 col-sm-6 col-md-4 p-2">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h6 className="animated fadeInUp">{item["title"]}</h6>
                                    <p className="animated fadeInUp">{item["description"]}</p>
                                    <p className="m-0 animated fadeInUp p-0">
                                        <AiOutlineCalendar /> {item["createDate"]}
                                        <a onClick={ChangeStatusItem.bind(this, item["_id"], item["status"])} className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a onClick={DeleteItem.bind(this, item["_id"])} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                                        <a className="badge float-end bg-danger">{item["status"]}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Fragment>
    );
};

export default Canceled;