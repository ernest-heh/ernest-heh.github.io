import PropTypes from "prop-types";
import PortfolioItemSwiper from "./PortfolioItemSwiper";

export default function PortfolioItem({ title, images, link, text }) {
  return (
    <div className="border bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 rounded-md overflow-hidden">
      {/* <img
        src={imgUrl}
        alt="portfolio"
        className="w-full aspect-[16/8.5] object-cover"
      /> */}
      <PortfolioItemSwiper images={images} />

      <div className="w-full p-4">
        <h3 className="text-2xl md:text-3xl mt-2 mb-2 md:mb-3 font-semibold text-neutral-800 dark:text-neutral-100">
          {title}
        </h3>
        <p className="mb-4 tracking-[0.025rem]">{text}</p>

        <div className="flex gap-4 text-sm font-semibold">
          <a
            className="link-arrow flex items-center ps-3 pe-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-200 hover:dark:bg-neutral-700 transition-colors duration-300"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
