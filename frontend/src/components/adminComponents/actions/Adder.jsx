import { useState } from 'react';

import EventAdder from "../actions/EventAdder";
import GalleryAdder from "../actions/GalleryAdder"; 
import NewsAdder from "../actions/NewsAdder";
import FormAdder from '../actions/FormAdder';
import EagleAdder from "../actions/EagleAdder";

function Adder({ type }) {
    const [typer, setTyper] = useState(false); 

    const handleToggle = (newType) => {
        setTyper((prevTyper) => (prevTyper === newType ? false : newType));
    };

    switch (type) {
        case "event":
            return (
                <>
                    <button onClick={() => handleToggle("event")}>
                        {typer === "event" ? "Hide Event Form" : "Add Event"}
                    </button>
                    {typer === "event" && <EventAdder />}
                </>
            );

        case "photo":
            return (
                <>
                    <button onClick={() => handleToggle("photo")}>
                        {typer === "photo" ? "Hide Photo Form" : "Add Photo"}
                    </button>
                    {typer === "photo" && <GalleryAdder />}
                </>
            );
        case "new":
            return (
                <>
                    <button onClick={() => handleToggle("new")}>
                        {typer === "new" ? "Hide News Form" : "Add News"}
                    </button>
                    {typer === "new" && <NewsAdder />}
                </>
            );

        case "form":
            return (
                <>
                    <button onClick={() => handleToggle("form")}>
                        {typer === "form" ? "Hide Form" : "Add Form"}
                    </button>
                    {typer === "form" && <FormAdder />}
                </>
            );

        case "eagle":
            return (
                <>
                    <button onClick={() => handleToggle("eagle")}>
                        {typer === "eagle" ? "Hide Eagle form" : "Add Eagle"}
                    </button>
                    {typer === "eagle" && <EagleAdder />}
                </>
            );

        default:
            console.log(type);
            return <h5>Error retrieving type</h5>;
    }
}

export default Adder;