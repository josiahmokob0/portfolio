import React from "react";
import ReactDOM from "react-dom";
import Logo from "./assets/svg/logo.svg";
import Menu from "./assets/svg/menu.svg";

const App = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <Logo className="w-8 h-8 mr-2 fill-current" />
        <span className="text-xl font-semibold tracking-tight">Portifolio</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
          <Menu className="w-3 h-3 fill-current" />
        </button>
      </div>
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0">
            Testing
          </a>
        </div>
      </div>
    </nav>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
