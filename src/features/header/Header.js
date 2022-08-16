import React from "react";
import './Header.css'
import { HEADER_TITLE_CONSTANT } from "../../constants/header-contants";

export const Header = () => {
    return (
        <div className="header-container">
            <h1>{ HEADER_TITLE_CONSTANT }</h1>
        </div>
    )
}