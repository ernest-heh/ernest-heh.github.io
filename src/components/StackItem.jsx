import PropTypes from "prop-types";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export default function StackItem({
  children,
  html,
  css,
  sass,
  bootstrap,
  tailwind,
  ruby,
  rails,
  javascript,
  node,
  stimulus,
  postgresql,
  git,
  mapbox,
  turf,
  ...rest
}) {
  let classes = classNames(rest.className, "w-2 h-2 rounded-full", {
    "bg-[#f16529]": html,
    "bg-[#2965f1]": css,
    "bg-[#cc6699]": sass,
    "bg-[#6610f2]": bootstrap,
    "bg-[#37bdf8]": tailwind,
    "bg-[#cc342d]": ruby,
    "bg-[#cc0000]": rails,
    "bg-[#f0db4f]": javascript,
    "bg-[#68a063]": node,
    "bg-[#76e8b9]": stimulus,
    "bg-[#008bb9]": postgresql,
    "bg-[#f34f29]": git,
    "bg-[#007afb]": mapbox,
    "bg-[#2ecc71]": turf,
  });

  classes = twMerge(classes);

  return (
    <div className="flex items-center gap-1.5 px-2 py-1 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-full transition-colors duration-300">
      <div {...rest} className={classes}></div>
      {children}
    </div>
  );
}

StackItem.propTypes = {
  // children: PropTypes.string.isRequired,
  // html: PropTypes.string.isRequired,
  // css: PropTypes.string.isRequired,
  // sass: PropTypes.string.isRequired,
  // bootstrap: PropTypes.string.isRequired,
  // tailwind: PropTypes.string.isRequired,
  // ruby: PropTypes.string.isRequired,
  // rails: PropTypes.string.isRequired,
  // javascript: PropTypes.string.isRequired,
  // node: PropTypes.string.isRequired,
  // stimulus: PropTypes.string.isRequired,
  // postgresql: PropTypes.string.isRequired,
  // git: PropTypes.string.isRequired,
  // mapbox: PropTypes.string.isRequired,
  // turf: PropTypes.string.isRequired,
  checkVariationValue: ({
    html,
    css,
    sass,
    bootstrap,
    tailwind,
    ruby,
    rails,
    javascript,
    node,
    stimulus,
    postgresql,
    git,
    mapbox,
    turf,
  }) => {
    const count =
      Number(!!html) +
      Number(!!css) +
      Number(!!sass) +
      Number(!!bootstrap) +
      Number(!!tailwind) +
      Number(!!ruby) +
      Number(!!rails) +
      Number(!!javascript) +
      Number(!!node) +
      Number(!!stimulus) +
      Number(!!postgresql) +
      Number(!!git) +
      Number(!!mapbox) +
      Number(!!turf);

    if (count > 1) {
      return new Error("Only one tech is allowed");
    }
  },
};
