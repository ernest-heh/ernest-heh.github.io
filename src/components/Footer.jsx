import { FaCoffee } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-center mt-auto mb-6 text-center text-xs tracking-[0.035rem]">
      <footer>
        Built with Vite, React, TailwindCSS. Fueled by Coffee{" "}
        <FaCoffee className="inline text-[1rem]" />
      </footer>
    </div>
  );
}
