import React, { useState } from "react";

export default function Tab({ tab }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
  };

  return (
    <a
      href="#!"
      className={`btn btn-outline-success  ${active ? "active" : ""} `}
      onClick={handleClick}
    >
      {tab}
    </a>
  );
}
