import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { register } from "swiper/element/bundle";

register();

export default function PortfolioItemSwiper({ images }) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    // swiperElRef.current.addEventListener("progress", (e) => {
    //   const [swiper, progress] = e.detail;
    //   console.log(progress);
    // });
    // swiperElRef.current.addEventListener("slidechange", (e) => {
    //   console.log("slide changed");
    // });
  }, []);

  return (
    <div className="w-full aspect-[16/8.5] object-cover">
      <swiper-container
        ref={swiperElRef}
        mousewheel-force-to-axis="true"
        slides-per-view="1"
        navigation="true"
        pagination="true"
        // scrollbar="true"
        loop="true"
        lazy="true"
      >
        {images.map((image) => {
          return (
            <swiper-slide key={image.id}>
              <img
                src={image.url}
                width="100%"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
}

PortfolioItemSwiper.propTypes = {
  images: PropTypes.array.isRequired,
};
