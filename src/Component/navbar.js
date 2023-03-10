import React ,{ Component }from 'react'
import { Link } from "react-router-dom";

function navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-light" href="/">JobPortal</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link to="/login-page" className="nav-link text-light">login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link text-light">signup</Link>
                        </li>
                        <li className="nav-item justify-content-end" >
                            <a  className="nav-link text-light" href="/">{props.state}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
navbar.defaultProps ={
    state: "User"
}
export default navbar

