import React from "react";

export default function Header(props) {
  return (
    <div className="col">
      <h1>{props.title}</h1>
    </div>
  );
}
