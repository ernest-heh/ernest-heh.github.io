import PropTypes from "prop-types";

export default function PortfolioItem({ title, imgUrl, stack, link, text }) {
  return (
    <div className="border border-stone-300 dark:border-stone-600 rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-[30rem] object-cover"
      />
      <div className="w-full p-4">
        <h3 className="text-2xl md:text-3xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="mb-4 tracking-[0.025rem]">{text}</p>
        {/* <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs mb-4">
          {stack.map((item) => (
            <span
              key={item}
              className="font-mono inline-block px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-400 text-neutral-500 dark:text-neutral-400"
            >
              {item}
            </span>
          ))}
        </p> */}
        <div className="flex gap-4 text-sm font-semibold">
          <a href={link}>&rarr; View on GitHub</a>
        </div>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
