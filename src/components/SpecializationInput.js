import React, { useEffect, useState } from "react";
import universities from "../Helpers/universities.json";

const fields = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Java",
  "Python",
  "C",
  "C++",
  "C#",
];

export default function SpecializationInput({
  formValues,
  setFormValues,
  setValidation,
  validation,
  handleChange,
  error,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [field, setField] = useState("");
  const [latest, setLatest] = useState("");

  const handleClick = (u) => {
    if (latest === u) {
      handleChange(field);
    } else {
      setField(u);
    }
    setLatest(u);
    setIsOpen(false);
  };

  useEffect(() => {
    if (field !== "") {
      handleChange(field);
    }

    if (field !== "") setValidation({ ...validation, fields: true });
    else setValidation({ ...validation, fields: false });
  }, [field]);

  return (
    <>
      <div className="position-relative mb-3 ">
        <div
          className="row g-2 selected-inp  "
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="form-search-input relative   flex   ">
            <span className="text-nowrap fs-6  ">
              {field === "" ? "--Uzmanlık Alanı Seç" : field}
            </span>

            <i
              class={`fa-solid fa-angle-down position-absolute  fs-4   ${
                isOpen ? "rotate" : ""
              } `}
            ></i>
          </div>
        </div>
        <div
          className={`position-absolute option-menu  rounded-bottom  ${
            isOpen ? "d-block" : "d-none"
          } `}
        >
          <div className="h-100 position-relative ">
            <div>
              <ul>
                {fields.map((field) => (
                  <li onClick={() => handleClick(field)}>
                    <div>{field}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <span className={`text-danger ${error === "" ? "invisible" : ""} `}>
          {error}
        </span>
      </div>
    </>
  );
}
