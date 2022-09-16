import React from "react";
import styles from "./MembershipTestimonials.module.scss";
import { Parallax } from "react-scroll-parallax";

export const MembershipTestimonials = () => {
  const testimonials = [
    {
      image: "/images/testimonials/allison-m.png",
      name: "Allison Moujaes",
      occupation: "Be Fearless/GrasshoppHer\n" + "Community Engagement",
      description:
        "“GrasshoppHer has made me more confident in my social life. I hang out with friends I met in the membership outside of the programming. It has provided me opportunities to go to events and network with others I wouldn’t normally have.”",
    },
    {
      image: "/images/testimonials/allison-b.png",
      name: "Allison Boyajain",
      occupation: "Senior Brand Manager",
      description:
        "“Things I’m jealous that future generations have: GrasshoppHer. By deblurring the unknown and making the inaccessible accessible, finally— GrasshoppHer creates clarity amongst the chaos of navigating life and career. An actual game changer and must-have for women and girls, alike.”",
    },
    {
      image: "/images/testimonials/lizzie.png",
      name: "Lizzie Klingsporn",
      occupation: "Loyola University Student\n" + "and Social Media Intern",
      description:
        "“I've always been drawn to communities that empower women to seek the highest version of themselves and that's exactly what I feel GrasshoppHer strives to accomplish. As a part of GrasshoppHer, I feel accepted for who I am & I'm given the tools to help others, too.”",
    },
  ];

  const displayTestimonialCard = (testimonial, key) => (
    <div key={key} className={styles["membership-testimonials__card"]}>
      <Parallax scaleX={[-1, 1]} easing="easeOutExpo">
        <img
          className={styles["membership-testimonials__card__image"]}
          src={testimonial.image}
          alt={testimonial.name}
        />
      </Parallax>
      <div>
        <div
          className={`${styles["membership-testimonials__card__title"]} ${styles["membership-testimonials__card__text"]}`}
        >
          {testimonial.name}
        </div>
        <div
          className={`${styles["membership-testimonials__card__subtitle"]} ${styles["membership-testimonials__card__text"]}`}
        >
          {testimonial.occupation}
        </div>
      </div>
      <div
        className={`inter2 ${styles["membership-testimonials__card__text"]}`}
      >
        {testimonial.description}
      </div>
    </div>
  );

  return (
    <div className={"relative"}>
      <div className={`container ${styles["membership-testimonials"]}`}>
        {testimonials.map((testimonial, index) =>
          displayTestimonialCard(testimonial, index)
        )}
      </div>
      <div className={styles["membership-testimonials__band"]} />
    </div>
  );
};
