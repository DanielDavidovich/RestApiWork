import React from "react";
import Date from "./Date";

export default function Item(props) {
    return (
        <div className="item">
            <div className="itemDescription">
                <div className="itemName">Song name: {props.name}</div>
                <Date date={props.date} />
                <div className="itemName">Description: {props.description || "No description available for this song"} </div>
            </div>
            <img className="itemImage" src={props.image} alt={props.name} />
        </div>
    );
}