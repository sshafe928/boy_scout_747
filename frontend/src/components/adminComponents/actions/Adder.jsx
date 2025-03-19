import { useState } from 'react';

import EventAdder from "../actions/EventAdder";
import GalleryAdder from "../actions/GalleryAdder"; 
import AdminAdder  from "../actions/AdminAdder";
import  NewsAdder  from "../actions/NewsAdder";
import FormAdder from '../actions/FormAdder';
import EagleAdder from "../actions/EagleAdder"

function Adder({ type }) {
    const [typer, setTyper] = useState(null); 

    switch (type) {
        case "event":
            return (
                <>
                    <button onClick={() => setTyper("event")}>Add Event</button>
                    {typer === "event" && <EventAdder />}
                </>
            );

        case "photo":
            return (
                <>
                    <button onClick={() => setTyper("photo")}>Add Photo</button>
                    {typer === "photo" && <GalleryAdder />}
                </>
            );

        case "admin":
            return (
                <>
                    <button onClick={() => setTyper("admin")}>Add Admin</button>
                    {typer === "admin" && <AdminAdder />}
                </>
            );

        case "new":
            return (
                <>
                    <button onClick={() => setTyper("new")}>Add News</button>
                    {typer === "new" && <NewsAdder />}
                </>
            );

        case "form":
            return (
                <>
                    <button onClick={() => setTyper("form")}>Add Form</button>
                    {typer === "form" && <FormAdder />}
                </>
            );
        case "eagle":
            return (
                <>
                    <button onClick={() => setTyper("eagle")}>Add Eagle</button>
                    {typer === "eagle" && <EagleAdder />}
                </>
            )

        default:
            console.log(type);
            return <h5>Error retrieving type</h5>;
    }
}

export default Adder;
