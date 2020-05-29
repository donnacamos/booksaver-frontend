import React from "react";

const Stats = ({ numToys, topThree }) => {
  let items = topThree.map((i, key) => {
    return <div key={key}>{i.name} </div>;
  });

  return (
    <div>
      <i className="gamepad icon total-class" />
      <strong>Total toys</strong>
      <p>{numToys} </p>
      <i className="hotjar icon hot-class" />
      <strong>Top toys</strong>
      {items}
    </div>
  );
};

export default Stats;
