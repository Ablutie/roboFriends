import Card from "./Card";
import React from "react";


const CardList = (props) => {
    return (
        <div>
            {
                props.robots.map((robot, i) => {
                    return (<Card key={i}
                        name={robot.name}
                        id={robot.id}
                        email={robot.email} />);
                })
        };
        </div>
    );
}

export default CardList;