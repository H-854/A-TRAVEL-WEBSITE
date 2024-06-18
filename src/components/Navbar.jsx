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
            <div className="w-50 ms-auto">
                {/* <MenuList className="menu navbar-nav">
                    <MenuItem className="nav-item"><Link to="/" className="link">Home</Link></MenuItem>
                    <MenuItem className="nav-item"><Link to="/about" className="link">About</Link></MenuItem>
                    <MenuItem className="nav-item"><Link to="/services" className="link">Services</Link></MenuItem>
                    <MenuItem className="nav-item"><Link to="/destination" className="link">Destinations</Link></MenuItem>
                    <MenuItem className="nav-item"><Link to="/gallery"className="link">Gallery</Link></MenuItem>
                    <button className="btn login">Login</button>
                    <button className="btn btn-primary signup p-2">Sign-up</button>
                </MenuList> */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid navIcon">
                        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <MenuList className="menu navbar-nav">
                                <MenuItem className="nav-item"><Link to="/" className="link">Home</Link></MenuItem>
                                <MenuItem className="nav-item"><Link to="/about" className="link">About</Link></MenuItem>
                                <MenuItem className="nav-item"><Link to="/services" className="link">Services</Link></MenuItem>
                                <MenuItem className="nav-item"><Link to="/destination" className="link">Destinations</Link></MenuItem>
                                <MenuItem className="nav-item"><Link to="/gallery"className="link">Gallery</Link></MenuItem>
                                <button className="btn login">Login</button>
                                <button className="btn btn-primary signup p-2">Sign-up</button>
                            </MenuList>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
