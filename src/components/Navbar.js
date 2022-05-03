import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar (props){

        // <..................IMPORTANT.............................>
// I commented out the Roter part from the whole app so that i can easily deploy on git pages


    return(
            // Inserting Navbar using Bootstrap
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                 {/* //by adding the {} the inside text converted to javascript and by adding ` ` the text converted to string  */}
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a> 
                {/* Link tag used for React router dom to navigate to another page */}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    {/* <Link className="nav-link active" aria-current="page" to="/" >Home</Link> */}
                    <a className="nav-link active" aria-current="page" href="#" >Home</a>
                    {/* Link tag used for React router dom to navigate to another page */}
 
                    </li>

                    {/*<li className="nav-item">
                    {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
                    {/* Link tag used for React router dom to navigate to another page 

                    </li> */}
                    </ul>
                </div>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    {/* //by adding the {} the inside text converted to javascript and by adding ` ` the text converted to string  */}
                    {/*  props.mode==='light'?'dark':'light'  --> short form of using if-else, suppose if a =2 then a+1 else a we have to write this so we will write it like a===2 ? a+1 : a } */}
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switchText}</label>
                </div>
            </div>
            </nav>
    )
}

Navbar.prototype ={
    title : PropTypes.string.isRequired, //we use isRequired when we something is compulsary , so if we don't pass the title it will give an error
    //see below we have used defaultProps so when the title is not given no error will come despite of usin isRequired as we have used defaultProps so it sets the props if it is not available
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set a Title here',
    aboutText: 'About'
}