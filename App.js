import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
        <h1 className="head" tabIndex="1">
            Welcome to React using JSX 🚀
        </h1>
    );

const title = (
        <h1 className="head2" tabIndex="1">
            React Element using JSX 🚀
        </h1>
);

// React Component
// There two ways to create component - OLD - Uses javascript classes
// Class based component and functional components - NEW - Uses javascript functions
// React functional Component is just a javascript function
// Component composition
const HeadingComponent = () => (
    <div id="container">
        <Title />
        {title}
        <h1 className="heading">It is React Functional Component 🚀</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);