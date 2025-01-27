import { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { ButtonPrev } from "./component/buttons/Button-prev";
import ButtonNext from "./component/buttons/Button-next";

const slides = [
  { id: 1, image: "https://picsum.photos/id/1020/400", target: "img1" },
  { id: 2, image: "https://picsum.photos/id/1035/400", target: "img2" },
  { id: 3, image: "https://picsum.photos/id/1010/400", target: "img3" },
];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div key={slide.id} className={`${styles.slide} ${index === activeIndex ? styles.active : ""}`}>
            <img src={slide.image} alt={`Product ${slide.id}`} />
          </div>
        ))}
      </div>
      < ButtonPrev className={styles.prev} onClick={prevSlide} disabled={activeIndex === 0} />     
      <ButtonNext className={styles.next} onClick={nextSlide} disabled={activeIndex === slides.length - 1} />

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
