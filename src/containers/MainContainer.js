// React + Dependencies
import React from "react";

// Import from Files
import MyBooks from "../components/MyBooks";
// import Counter from "../components/Counter";

// functional / stateless component / container
const MainContainer = () => {
  return (
    <div className="MainContainer">
      <MyBooks />
    </div>
  );
};

export default MainContainer;
