import logo from "../assets/images/logo.svg";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="nav-container m-2">
            <div className="logo-container w-25">
                <img src={logo} alt="logo" />
            </div>
            <div className="w-50">
                <MenuList className="menu">
                    <MenuItem><Link to="/" className="link">Home</Link></MenuItem>
                    <MenuItem><Link to="/about" className="link">About</Link></MenuItem>
                    <MenuItem><Link to="/services" className="link">Services</Link></MenuItem>
                    <MenuItem><Link to="/pricing" className="link">Pricing</Link></MenuItem>
                    <MenuItem><Link to="/gallery"className="link">Gallery</Link></MenuItem>
                    <button className="btn login">Login</button>
                    <button className="btn btn-primary signup p-2">Sign-up</button>
                </MenuList>
            </div>
        </div>
    )
}
