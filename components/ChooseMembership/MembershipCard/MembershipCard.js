import React from "react";
import styles from "./MembershipCard.module.scss";
import { Radio } from "@material-ui/core";
import { RedirectButton } from "../../RedirectButton";

export const MembershipCard = ({ type, description, prices }) => {
  const [selectedValue, setSelectedValue] = React.useState("monthly");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const getPrice = () => {
    if (selectedValue === "monthly") {
      return `${prices["monthly"]["price"]}`;
    }
    return prices["annually"]["price"];
  };

  const getLink = () => {
    if (selectedValue === "monthly") {
      return `${prices["monthly"]["link"]}`;
    }
    return prices["annually"]["link"];
  };
  return (
    <div className={`${styles["card"]}`}>
      <div className={`${styles["card__choices"]}`}>
        <div
          className={`${styles["card__choice"]} ${
            selectedValue === "monthly" ? styles["selected"] : ""
          }`}
        >
          <Radio
            checked={selectedValue === "monthly"}
            onChange={handleChange}
            value="monthly"
            name="radio-buttons"
            style={{
              color: selectedValue === "monthly" ? "#000" : "",
            }}
            color={"default"}
            inputProps={{ "aria-label": "Monthly" }}
          />
          <span>Monthly</span>
        </div>
        <div
          className={`${styles["card__choice"]} ${
            selectedValue === "annually" ? styles["selected"] : ""
          }`}
        >
          <Radio
            color={"default"}
            checked={selectedValue === "annually"}
            onChange={handleChange}
            value="annually"
            style={{
              color: selectedValue === "annually" ? "#000" : "",
            }}
            name="radio-buttons"
            inputProps={{ "aria-label": "Annually", title: "Annually" }}
          />
          <span>Annually</span>
        </div>
      </div>
      <div className={`${styles["card__price"]}`}>
        <span>{type}</span>
        <div className={`white-space-break`}>
          {getPrice()}{" "}
          <div style={{ fontSize: "18px" }}>
            {selectedValue === "monthly" ? "per month" : ""}
          </div>
        </div>
      </div>
      <div className={` white-space-break ${styles["card__description"]}`}>
        <span>{description}</span>
        <RedirectButton
          label={"Choose"}
          href={getLink()}
          target={true}
          color={"black"}
        />
      </div>
    </div>
  );
};
