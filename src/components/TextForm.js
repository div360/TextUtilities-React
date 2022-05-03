
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props){

    // <..................IMPORTANT.............................>
// I commented out the Roter part from the whole app so that i can easily deploy on git pages

    const UppercaseClicked = ()=>{
        // console.log("Uppercase is clicked");

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const LowercaseClicked = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClear = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    function camelCase(text) { // This funciton is taken from the internet to convert to camel case (nahi smjha to bhi chalega)
        // var a = text; (: regex is being used here)
        return text
            .replace(/\s(.)/g, function(a) {
                return a.toUpperCase();
            })
            .replace(/\s/g, '')
            .replace(/^(.)/, function(b) {
                return b.toLowerCase();
            });

    }

    const handleCamelCase =()=>{
        setText(camelCase(text));
        props.showAlert("Converted to CamelCase", "success");
    }

    const handleCopy =() => {

        //The below three lines (the functions and methods) taken from the internet , they copy the text

        var toCopy = document.getElementById('myBox');
        toCopy.select();
        navigator.clipboard.writeText(toCopy.value);

        props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpaces=()=>{
        //Taken from the internet to remove extra spaces
        var newText = text.replace(/\s+/g,' ');
        setText(newText)

        props.showAlert("Exta Spaces Removed", "success");
    }
    const handleOnChange=(event) =>{ //when we use onChange attribute(used in textarea tag) by default an event is generated
        // console.log("OnChange");
        setText(event.target.value); // it will append the new text we write to the old "text" value that was there
    }


    // State hooks example -->

    const [text, setText] = useState("");

    // text = ('new text'); //Wrong way to change the state
    // setText('new text'); //Correct way to change the state

    return(
        <div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">          
            <textarea className="form-control" style={{background: props.mode==='dark'?'#00003f':'white', color:props.mode=== 'dark'?'white': 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> 
            {/* onChange will be used in textarea tag not in button */}
            </div>
            <button className="btn btn-primary mx-1" onClick={UppercaseClicked}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={LowercaseClicked}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCamelCase}>Convert to CamelCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container mt-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Analytics</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
{/* 
            text.split(" ") will return an array having all the words , as soon as one hits space the letters before the space " " is made into one element of that array , so all the words are stored as elements and when we do .length it tells the elements in the array i.e the no of words  */}
            <p>It will take approx. { 0.003 * text.split(" ").length } minutes to read the text</p> 
            {/* 0.03 minutes is the average reading time for one word */}
            
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter something in the textbox to be previewed here'}</p> 
            {/* When nothing is wirtten on the textbox this is shown */}
            
            </div>
        </div>
    )
}