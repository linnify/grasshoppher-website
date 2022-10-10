import React from "react";
import styles from "./MembershipCards.module.scss";
import { MembershipCard } from "../MembershipCard/MembershipCard";
export const MembershipCards = () => {
  const data = [
    {
      type: "virtual",
      description:
        "Monthly skill-building events led by gamechangers like Kelly Rutherford, Mandy Teefey, and Allison Kaye\n" +
        "\n" +
        "An engaged and inspiring virtual community\n" +
        "\n" +
        "Biweekly member updates with leveling up tips and tricks \n" +
        "\n" +
        "Opportunities to speak at a summit or lead your own talk\n" +
        "\n" +
        "Discounts + perks to help along your journey with partners like 99Designs, Moo.com & more!",
      prices: {
        monthly: {
          price: "$12.99",
          link: "https://buy.stripe.com/14k1751Klfa7aOc008",
        },
        annually: {
          price: "$139.50",
          link: "https://buy.stripe.com/6oEcPN74Ffa76xW5kt",
        },
      },
    },
    {
      type: "in-person",
      description:
        "Everything in the Virtual membership Plus: \n" +
        "\n" +
        "Monthly in-person networking events with industry professionals and recruiters\n" +
        "\n" +
        "Local perks and discounts",
      prices: {
        monthly: {
          price: "$12.99",
          link: "https://buy.stripe.com/8wMaHFdt32nlaOc7sC",
        },
        annually: {
          price: "$139.50",
          link: "https://buy.stripe.com/7sIaHFbkV8LJ1dCbIT",
        },
      },
    },
  ];

  const getCards = () => {
    return data.map((item, index) => {
      return (
        <MembershipCard
          type={item.type}
          description={item.description}
          prices={item.prices}
          key={index}
        />
      );
    });
  };

  return <div className={`${styles["cards"]}`}>{getCards()}</div>;
};
