import React from "react";
import '../header.css'

const Header = ({category}) => {
    return(<header className={category.toLowerCase()}>Hi</header>)
}

export default Header