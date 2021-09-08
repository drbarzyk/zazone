import React from 'react'
import {
    Link
} from "react-router-dom";

function OrderBtn() {
    return (
        <Link to="/menu" className="btn">Order Now</Link>
    )
}

export default OrderBtn
