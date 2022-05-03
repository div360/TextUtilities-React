import React from "react";

function Alert(props){
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1) 
        //charAt(0) takes the first letter of the string low (our message is inside the string low and we made all the letters lowercase first)
        //then to Uppercase capitalizes the character at 0 that is the first letter
        //then we add the remaining letters of the word , low.slice(1) show the all the characters of the word removing 1 ie the first letter
    }

    return(
        //Adding the alert box from bootstrap 
        // the alert box has 4 types (succes, warning etc.) see bootstrap for this 
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}

        {/* Use this syntax , the community prefers it
        If props.alert is null then the code written after "&&" won’t be shown otherwise the code inside <div></div> tag will be displayed.

        Props.alert && ………….

        Use this format , this means that if props.alert has some value then the code written after "&&" will execute otherwise it will not */}


        {/* Here when the word "success" comes in the alert , remember success is a bootstrap class see above we have used ${props.alert.type} for putting only, so because of that the first letter of the word S is not capital to capitalize it i have written a funtion above return  */}
        
        {/* // Removing the button to close the alert because we are adding a timer and the button will close automatically */}

        {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button> */}
        </div>
    )
}

export default Alert;