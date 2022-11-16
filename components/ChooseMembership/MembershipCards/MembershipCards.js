import React, { useEffect, useState } from "react";
import styles from "./MembershipCards.module.scss";
import { MembershipCard } from "../MembershipCard/MembershipCard";
import { useRouter } from "next/router";
export const MembershipCards = () => {
  const [link, setSelectedLink] = useState(null);
  const [submitted, setSubmitted] = useState(true);
  const router = useRouter();

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
        "Discounts + perks to help along your journey with partners like 99Designs, Moo.com & more!\n" +
        "\n" +
        "Office hours with the founders for career advice and more",
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
        "Local perks and discounts\n" +
        "\n" +
        "Live in Austin. Coming to other cities in 2023!",
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

  const onSelect = (link) => {
    setSelectedLink(link);
  };

  const onSubmit = () => {
    setSubmitted(!submitted);
  };

  useEffect(() => {
    if (submitted && link) {
      router.push("/membership-portal");
      window.open(link, "_blank").focus();
    }
  }, [submitted]);

  const getCards = () => {
    if (link) {
      return (
        // <iframe
        //   onLoad={onSubmit}
        //   src="https://docs.google.com/forms/d/e/1FAIpQLSfK-G487lUO70DgnnlRjaFSnEUCEV9VDpwsRun2GO49ygpO-g/viewform?embedded=true"
        //   width="640"
        //   height="581"
        //   frameBorder="0"
        //   marginHeight="0"
        //   marginWidth="0"
        // >
        //   Loading…
        // </iframe>
        <iframe
          onLoad={onSubmit}
          className={"register-form"}
          src="https://docs.google.com/forms/d/e/1FAIpQLSfTdSd6UnOhQdTui2NgQSDETr7_UFItqDnwzfHnRXisV-s8TQ/viewform?embedded=true"
        >
          Loading…
        </iframe>
      );
    }
    return data.map((item, index) => {
      return (
        <MembershipCard
          type={item.type}
          description={item.description}
          prices={item.prices}
          key={index}
          onSelect={onSelect}
        />
      );
    });
  };

  return <div className={`${styles["cards"]}`}>{getCards()}</div>;
};
