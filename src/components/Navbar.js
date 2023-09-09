import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="/">
                {props.title}
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            {props.about}
                        </a>
                    </li>
                </ul>
                <div className={`custom-control custom-switch text-${props.mode==="light"?"dark":"light"} ` }>
                    <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>
                    <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
                </div>
                
                <div className={`custom-control custom-switch text-${props.mode==="light"?"green":"light"} ` }> 
                    <input type="checkbox" onClick={props.toggleGreenMode} className="custom-control-input" id="customSwitch2"/>
                    <label className="custom-control-label" htmlFor="customSwitch2">Enable Green Dark Mode</label>
                </div>
            </div>
        </nav>
    );
}

Navbar.prototypes = {
    title: PropTypes.string,
    about: PropTypes.string,
};
