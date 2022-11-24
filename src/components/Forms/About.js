import React from "react";

export default function About({ onIndex, setOnIndex }) {
  return (
    <>
      <form
        action=""
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 5 ? "" : "d-none"
        } `}
      >
        <h2 className="  pb-2 mb-5 text-center border-bottom ">Hakkında</h2>
        <div className="h-100 d-flex flex-column">
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Türkçe
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" for="flexRadioDefault2">
                English
              </label>
            </div>
          </div>
          <div className="form-floating h-100">
            <textarea
              className="form-control h-100"
              placeholder="Leave a comment here"
              id="about-text-area"
            ></textarea>
            <label for="about-text-area">
              Bize kendinizden bahseder misiniz?
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <button type="submit" className="btn btn-primary px-4">
            Geri
          </button>
          <button type="submit" className="btn btn-primary px-4">
            İleri
          </button>
        </div>
      </form>
    </>
  );
}
