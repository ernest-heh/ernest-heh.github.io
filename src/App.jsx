import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Stack from "./components/Stack";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="transition-colors duration-200 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 selection:bg-amber-200 selection:text-neutral-900 dark:selection:text-white dark:selection:bg-orange-400">
        <div className="flex flex-col min-h-screen max-w-xl w-11/12 mx-auto">
          <Intro />
          <Portfolio />
          <Stack />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
