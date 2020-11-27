import React from "react";

export const ThreeCircles = ({ classes, translateOffset  }) => {
  return (
    <div className={classes}  style={{ transform: `translateY(-${translateOffset}px)` }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}