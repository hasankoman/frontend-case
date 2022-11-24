import React, { useEffect, useState } from "react";
import universities from "../Helpers/universities.json";

export default function SelectInput({
  formValues,
  setFormValues,
  setFormValidation,
  formValidation,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [sortedUniversities, setSortedUniversities] = useState([]);
  const [university, setUniversity] = useState("");

  useEffect(() => {
    setSortedUniversities(
      universities.filter((u) => {
        return (
          u["College Name"].toLowerCase().indexOf(searchText.toLowerCase()) !==
          -1
        );
      })
    );
  }, [searchText]);

  const handleClick = (u) => {
    setUniversity(u["College Name"]);
    setIsOpen(false);
  };

  useEffect(() => {
    setFormValues({ ...formValues, university });
    if (university !== "")
      setFormValidation({ ...formValidation, university: true });
    else setFormValidation({ ...formValidation, university: false });
  }, [university]);

  return (
    <>
      <div className="position-relative mb-3 ">
        <div
          className="row g-2 selected-inp  "
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="form-search-input relative   flex   ">
            <span className="text-nowrap fs-6  ">
              {university === "" ? "--Üniversite Seç" : university}
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
            <div className=" position-sticky top-0">
              <input
                type="text"
                className="search-uni "
                placeholder="Üniversite Ara"
                name="university"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div>
              <ul>
                {sortedUniversities.map((uni) => (
                  <li onClick={() => handleClick(uni)}>
                    <div>{uni["College Name"]}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <span className={`text-danger ${university ? "invisible" : ""} `}>
          Lütfen üniversite seçiniz.
        </span>
      </div>
    </>
  );
}
