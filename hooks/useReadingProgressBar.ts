import { Col } from "antd";
import { useEffect, useState } from "react";

export function useReadingProgressBar() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const actualPosition = window.scrollY;
      const scroLLHeight = document.body.scrollHeight - window.innerHeight;
      const percentage = (actualPosition / scroLLHeight) * 100;
      setCompletion(percentage);
    };

    window.addEventListener("scroll", updateScrollCompletion);

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return completion;
}
