import { useState } from "react";

function FAQitem(props){

// console.log(props.index);

    return (
        <>
        <div className="flex flex-col bg-gray-800 bg-transparent bg-opacity-30 rounded-lg">
            <div className="flex flex-row justify-between items-center gap-6 mx-6">
                <h3>{props.question}</h3>
                <button onClick={props.onToggle} className=" rounded-full text-black bg-gray-300 text-xl font-extrabold w-6 h-6">{props.isOpen ? "-" : "+"}</button>
            </div>

            <div className={ props.isOpen ? "faq-content active" : "faq-content"}>
                <h4>{props.answer}</h4>
            </div>
        </div>
        </> 
    )
}

export default FAQitem;