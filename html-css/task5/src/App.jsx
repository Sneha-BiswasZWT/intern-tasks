import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <div className="mockup-code bg-primary text-primary-content w-full">
          <pre>
            <code>Hi there! I'm sneha</code>
          </pre>
        </div>
        <div className="mockup-browser border-base-300 border w-full">
          <div className="mockup-browser-toolbar">
            <div className="input">https://daisyui.com</div>
          </div>
          <div className="grid place-content-center border-t border-base-300 h-80">
            Hello!
          </div>
        </div>

        <div></div>

        <button className="btn  btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Default
        </button>
      </div>
    </>
  );
}

export default App;
