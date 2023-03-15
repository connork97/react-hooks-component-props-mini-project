import React from "react";

const About = ({image="via.placeholder.com/215", about}) => {
    return (
        <div>
            <aside>
                <img src={image} alt="blog logo"></img>
                <p>{about}</p>
            </aside>
        </div>
    )
}

export default About;