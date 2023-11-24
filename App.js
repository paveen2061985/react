import React from "react";
import ReactDOM from "react-dom/client";

// JSX -> JSX is a Javascript extension to make developer life easy while developing React Apps.
// JSX is not writing HTML in Javascript but It is HTML like syntax.
// JSX => React.createElement => JS (Object) => HTMLElement(render)
const jsxHeading = (
        <h1 className="head" tabIndex="1">
            Welcome to React using JSX 🚀
        </h1>
    );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);