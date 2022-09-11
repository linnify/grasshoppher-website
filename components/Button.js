import React from "react";

export const Button = ({href, label, target, variant = "contained", color = "primary"}) => {
    return (
        <div className={`button button__${variant} button__${variant}--${color}`}>
            <a href={href} target={`${target ? "_blank" : ""}`}>
                {label}
            </a>
        </div>
    );
}
