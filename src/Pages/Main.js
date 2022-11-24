import React, { useState } from "react";
import Form from "../components/Form";
import Tabs from "../components/Tabs";

export default function Main() {
  const [onIndex, setOnIndex] = useState(0);
  const [lastValidatedForm, setLastValidatedForm] = useState(0);

  return (
    <div className="d-flex flex-column align-items-center justify-content-evenly main-container position-relative ">
      <Tabs
        onIndex={onIndex}
        setOnIndex={setOnIndex}
        lastValidatedForm={lastValidatedForm}
      />
      <Form
        onIndex={onIndex}
        setOnIndex={setOnIndex}
        setLastValidatedForm={setLastValidatedForm}
      />
    </div>
  );
}
