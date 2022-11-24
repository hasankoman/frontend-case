import React, { useEffect, useRef, useState } from "react";
import {
  setAbout,
  setFormValidations,
} from "../../Store/information/information.slice";
import { useSelector, useDispatch } from "react-redux";

export default function About({ onIndex, setOnIndex, setLastValidatedForm }) {
  const { about, formValidations } = useSelector((state) => state.information);
  const [language, setLanguage] = useState("");
  const [error, setError] = useState(
    "Kendinizden bahsetmek istediğiniz dili seçiniz."
  );
  const [validation, setValidation] = useState(formValidations.aboutValidation);
  const [wordCount, setWordCount] = useState(0);
  const [article, setArticle] = useState("");
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    setLanguage(e.target.value);
    setError("");
    setArticle("");
    setValidation(false);
    dispatch(
      setFormValidations({
        ...formValidations,
        aboutValidation: false,
      })
    );
    wordCounter();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    const text = e.target.value;
    setArticle(text);
  };

  const wordCounter = () => {
    const wordArray = article.trim().split(/\s+/);
    if (wordArray.length === 1) {
      if (article === "") {
        wordArray.pop();
      }
    }
    setWordCount(wordArray.length);
  };

  useEffect(() => {
    if (wordCount >= 50) {
      dispatch(
        setFormValidations({
          ...formValidations,
          aboutValidation: true,
        })
      );
      setValidation(true);
    } else {
      dispatch(
        setFormValidations({
          ...formValidations,
          aboutValidation: false,
        })
      );
      setValidation(false);
    }
    wordCounter();
  }, [article, wordCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStore();
    setLastValidatedForm(onIndex + 1);
    setOnIndex(onIndex + 1);
  };

  const handlePrevClick = () => {
    setOnIndex(onIndex - 1);
    setStore();
  };

  const setStore = () => {
    dispatch(
      setAbout({
        language,
        article,
      })
    );
  };

  return (
    <>
      <form
        className={`h-100 d-flex flex-column justify-content-between w-100  ${
          onIndex === 5 ? "" : "d-none"
        } `}
        onSubmit={handleSubmit}
      >
        <h2 className="  pb-2 mb-5 text-center border-bottom ">Hakkında</h2>
        <div className="h-100 d-flex flex-column justify-content-center ">
          <span className="text-center text-danger d-block mb-3">{error}</span>
          <div className="mb-3 d-flex justify-content-center gap-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="tr"
                onChange={handleSelect}
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Türkçe
              </label>
            </div>
            <div className="form-check">
              <input
                className={`form-check-input  `}
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="en"
                onChange={handleSelect}
              />
              <label className="form-check-label" for="flexRadioDefault2">
                English
              </label>
            </div>
          </div>
          <div
            className={` h-100 mb-1  ${
              language
                ? "d-flex flex-column justify-content-between "
                : "d-none"
            }`}
          >
            <label className="mb-1" for="about-text-area">
              {language === "tr" &&
                "En az 50 kelime ile bize kendinizden bahsedin."}
              {language === "en" &&
                "Tell us about yourself in at least 50 words."}
            </label>
            <div className={`form-floating  h-100  text-area-container `}>
              <textarea
                className="form-control  p-2"
                placeholder="Leave a comment here"
                id="about-text-area"
                onChange={handleChange}
                value={article}
              ></textarea>
              <div
                className={` ${validation ? "text-black" : "text-danger"} `}
              ></div>
              {language === "tr" && (
                <span className=" d-block text-end  ">
                  Kelime Sayacı: {wordCount}
                </span>
              )}
              {language === "en" && (
                <span className=" d-block text-end  ">
                  Word Counter: {wordCount}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <button
            type="button"
            className="btn btn-dark px-4"
            onClick={handlePrevClick}
          >
            Geri
          </button>
          <button
            type="submit"
            className={`btn btn-dark px-4 ${validation ? "" : "disabled"} `}
          >
            İleri
          </button>
        </div>
      </form>
    </>
  );
}
