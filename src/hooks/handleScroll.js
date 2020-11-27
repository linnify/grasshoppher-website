import { useState, useEffect } from 'react';

export default function handleScroll() {
  const [offsetY, setOffsetY] = useState(0);

  const onHandleScroll = () => {
    setOffsetY(window.pageYOffset)
  };

  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll);

    return () => window.removeEventListener("scroll", onHandleScroll);
  }, []);

  return {offsetY};
}