import React from "react";
// const Home = function(){
//         return <h2>Hello Shweta</h2>
// }

const Home = (props) => {
  return (
    <div>
      <h2>Hello Shweta</h2>
  <h3>Current Company {props.company}</h3>
    </div>
  );
};

export default Home;
