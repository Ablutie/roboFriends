import React from "react";

const Card = ({name, id, email}) => {
    return (
        <div className="tc bg-light-green dib pa2 ma2 grow shadow-2 br3">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robo"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;