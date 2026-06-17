import React from "react";
const Card = () => {
    return (
        <div className="card m-2 p-0" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi!</p>
            </div>
            <div className="card-footer justify-content-center d-flex bg bg-light">
                <button className="btn btn-primary">Find Out More!</button>
            </div>
        </div >
    )
}
export default Card;