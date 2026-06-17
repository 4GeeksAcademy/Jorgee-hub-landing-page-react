import React from "react";
import Card from "./Card";
const CardSection = () => {
    return (
        <div className="row justify-content-center mx-0">
            <div className="col ps-0"><Card /></div>
            <div className="col"><Card /></div>
            <div className="col"><Card /></div>
            <div className="col pe-0"><Card /></div>
        </div>
    )
}
export default CardSection;