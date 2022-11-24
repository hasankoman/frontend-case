import React, { useState } from "react";
import Form from "../components/Form";
import Tabs from "../components/Tabs";

export default function Main() {
  const [onIndex, setOnIndex] = useState(7);
  const [lastValidatedForm, setLastValidatedForm] = useState(7);

  return (
    <div className="d-flex flex-column align-items-center justify-content-evenly main-container position-relative ">
      <Tabs
        onIndex={onIndex}
        setOnIndex={setOnIndex}
        lastValidatedForm={lastValidatedForm}
      />
      <div className="d-flex align-items-center justify-content-center w-100 ">
        <Form
          onIndex={onIndex}
          setOnIndex={setOnIndex}
          setLastValidatedForm={setLastValidatedForm}
        />
      </div>
    </div>
  );
}
