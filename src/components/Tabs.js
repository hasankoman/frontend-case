import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useWindowWidth } from "@react-hook/window-size/throttled";

const tabs = [
  "Kişisel Bilgiler",
  "Eğitim Bilgileri",
  "Sertifika Bilgileri",
  "Uzmanlık Alanları",
  "Kategoriler ve Ücretler",
  "Hakkında",
  "Sözleşme",
  "Sonuç Ekranı",
];
const tabs1 = [
  "personalInformationValidation",
  "educationInformationValidation",
  "certificateInformationValidation",
  "specializationAreasValidation",
  "categoriesPricesValidation",
  "aboutValidation",
  "contractValidation",
];

export default function Tabs({ onIndex, setOnIndex, lastValidatedForm }) {
  const { formValidations } = useSelector((state) => state.information);
  const [disabledArray, setDisabledArray] = useState([]);
  const width = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);
  const controlValidation = () => {
    let arr = [];
    for (let index = 0; index <= lastValidatedForm - 1; index++) {
      arr.push(formValidations[tabs1[index]]);
    }
    console.log(arr);
    const isValidate = Object.values(arr).every((value) => value === true);
    console.log(isValidate);
    if (onIndex === 0) {
      if (!isValidate) {
        let index = onIndex + 1;
        let arr = [];
        for (index; index < tabs.length; index++) {
          const strIndex = index.toString();
          arr.push(strIndex);
        }
        setDisabledArray(arr);
      } else {
        setDisabledArray([]);
      }
    }
    if (onIndex === 1) {
      if (!isValidate) {
        let index = onIndex + 1;
        let arr = [];
        for (index; index < tabs.length; index++) {
          const strIndex = index.toString();
          arr.push(strIndex);
        }
        setDisabledArray(arr);
      } else {
        setDisabledArray([]);
      }
    }
    if (onIndex === 2) {
      if (!isValidate) {
        let index = onIndex + 1;
        let arr = [];
        for (index; index < tabs.length; index++) {
          const strIndex = index.toString();
          arr.push(strIndex);
        }
        setDisabledArray(arr);
      } else {
        setDisabledArray([]);
      }
    }
    if (onIndex === 3) {
      if (!isValidate) {
        let index = onIndex + 1;
        let arr = [];
        for (index; index < tabs.length; index++) {
          const strIndex = index.toString();
          arr.push(strIndex);
        }
        setDisabledArray(arr);
      } else {
        setDisabledArray([]);
      }
    }
    if (onIndex === 4) {
      if (!isValidate) {
        let index = onIndex + 1;
        let arr = [];
        for (index; index < tabs.length; index++) {
          const strIndex = index.toString();
          arr.push(strIndex);
        }
        setDisabledArray(arr);
      } else {
        setDisabledArray([]);
      }
    }
    if (onIndex === 5) {
      if (!isValidate) {
        let index = onIndex + 1;
        let arr = [];
        for (index; index < tabs.length; index++) {
          const strIndex = index.toString();
          arr.push(strIndex);
        }
        setDisabledArray(arr);
      } else {
        setDisabledArray([]);
      }
    }
    if (onIndex === 6) {
      if (!isValidate) {
        let index = onIndex + 1;
        let arr = [];
        for (index; index < tabs.length; index++) {
          const strIndex = index.toString();
          arr.push(strIndex);
        }
        setDisabledArray(arr);
      } else {
        setDisabledArray([]);
      }
    }
  };

  useEffect(() => {
    controlValidation();
  }, [onIndex, formValidations]);

  return (
    <div
      className={` position-absolute top-0 d-flex flex-column px-5 justify-content-center  ${
        isOpen ? "bg-opacity-100" : "bg-opacity-75"
      }  top-0  py-4 w-100 bg-black  tab `}
    >
      <div
        className={` ${width >= 1200 ? "btn-group " : "btn-group-vertical"} ${
          isOpen || width >= 1200 ? "d-flex" : "d-none"
        } `}
      >
        <button
          type="submit"
          className={`btn btn-outline-success    ${
            lastValidatedForm >= 0 ? "" : "disabled"
          } ${disabledArray.includes("0") ? "disabled" : ""} ${
            onIndex === 0 ? "active" : ""
          }  `}
          onClick={() => setOnIndex(0)}
        >
          {tabs[0]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success    ${
            lastValidatedForm >= 1 ? "" : "disabled"
          } ${disabledArray.includes("1") ? "disabled" : ""} ${
            onIndex === 1 ? "active" : ""
          }  `}
          onClick={() => setOnIndex(1)}
        >
          {tabs[1]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 2 ? "active" : ""
          }   ${lastValidatedForm >= 2 ? "" : "disabled"} ${
            disabledArray.includes("2") ? "disabled" : ""
          } `}
          onClick={() => setOnIndex(2)}
        >
          {tabs[2]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 3 ? "active" : ""
          }   ${lastValidatedForm >= 3 ? "" : "disabled"} ${
            disabledArray.includes("3") ? "disabled" : ""
          } `}
          onClick={() => setOnIndex(3)}
        >
          {tabs[3]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 4 ? "active" : ""
          }   ${lastValidatedForm >= 4 ? "" : "disabled"} ${
            disabledArray.includes("4") ? "disabled" : ""
          } `}
          onClick={() => setOnIndex(4)}
        >
          {tabs[4]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 5 ? "active" : ""
          }   ${lastValidatedForm >= 5 ? "" : "disabled"} ${
            disabledArray.includes("5") ? "disabled" : ""
          } `}
          onClick={() => setOnIndex(5)}
        >
          {tabs[5]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 6 ? "active" : ""
          }   ${lastValidatedForm >= 6 ? "" : "disabled"} ${
            disabledArray.includes("6") ? "disabled" : ""
          } `}
          onClick={() => setOnIndex(6)}
        >
          {tabs[6]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 7 ? "active" : ""
          }   ${lastValidatedForm >= 7 ? "" : "disabled"} ${
            disabledArray.includes("7") ? "disabled" : ""
          } `}
          onClick={() => setOnIndex(7)}
        >
          {tabs[7]}
        </button>
      </div>
      <button
        className={`text-white bg-transparent fs-3 border-0 ${
          width >= 1200 ? "d-none" : "d-inline-block"
        }  `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i class="fa-solid fa-bars  "></i>
      </button>
    </div>
  );
}
