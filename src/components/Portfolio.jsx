import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <>
      <h2 className="text-2xl font-medium text-black dark:text-white mt-20 mb-4">
        Projects I&apos;ve Worked On
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center pb-20 border-b border-neutral-300 dark:border-neutral-600">
        <div className="grid grid-cols-1 gap-8">
          {portfolio.map((project) => (
            <PortfolioItem
              key={project.title}
              images={project.images}
              title={project.title}
              link={project.link}
              text={project.text}
            />
          ))}
        </div>
      </div>
    </>
  );
}
