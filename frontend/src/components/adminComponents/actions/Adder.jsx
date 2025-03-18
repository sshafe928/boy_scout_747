import { useState } from 'react';
import { EventAdder, GalleryAdder, AdminAdder, NewsAdder, FormAdder } from "../actions/AddingFunction";

function Adder({ type }) {
    const [typer, setTyper] = useState(null); // Initialize state

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

        default:
            console.log(type);
            return <h5>Error retrieving type</h5>;
    }
}

export default Adder;
