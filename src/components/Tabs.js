import React, { useState } from "react";
import Tab from "./Tab";

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

export default function Tabs({ onIndex, setOnIndex, lastValidatedForm }) {
  return (
    <div className="d-flex flex-row justify-content-center position-absolute bg-opacity-75 top-0  py-4 w-100 bg-white">
      <div className="btn-group">
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 0 ? "active" : ""
          }   ${lastValidatedForm >= 0 ? "" : "disabled"}  `}
          onClick={() => setOnIndex(0)}
        >
          {tabs[0]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 1 ? "active" : ""
          }   ${lastValidatedForm >= 1 ? "" : "disabled"}  `}
          onClick={() => setOnIndex(1)}
        >
          {tabs[1]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 2 ? "active" : ""
          }   ${lastValidatedForm >= 2 ? "" : "disabled"}  `}
          onClick={() => setOnIndex(2)}
        >
          {tabs[2]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 3 ? "active" : ""
          }   ${lastValidatedForm >= 3 ? "" : "disabled"}  `}
          onClick={() => setOnIndex(3)}
        >
          {tabs[3]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 4 ? "active" : ""
          }   ${lastValidatedForm >= 4 ? "" : "disabled"}  `}
          onClick={() => setOnIndex(4)}
        >
          {tabs[4]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 5 ? "active" : ""
          }   ${lastValidatedForm >= 5 ? "" : "disabled"}  `}
          onClick={() => setOnIndex(5)}
        >
          {tabs[5]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 6 ? "active" : ""
          }   ${lastValidatedForm >= 6 ? "" : "disabled"}  `}
          onClick={() => setOnIndex(6)}
        >
          {tabs[6]}
        </button>
        <button
          type="submit"
          className={`btn btn-outline-success  ${
            onIndex === 7 ? "active" : ""
          }   ${lastValidatedForm >= 7 ? "" : "disabled"}  `}
          onClick={() => setOnIndex(7)}
        >
          {tabs[7]}
        </button>
      </div>
    </div>
  );
}
