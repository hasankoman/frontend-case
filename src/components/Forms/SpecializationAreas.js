import React from "react";
const fields = ["HTML", "CSS", 3, 4];

export default function SpecializationAreas({ onIndex, setOnIndex }) {
  return (
    <>
      <form
        action=""
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 3 ? "" : "d-none"
        } `}
      >
        <h2 className="  pb-2 mb-5 text-center border-bottom  ">
          Uzmanlık Alanları
        </h2>
        <div className="h-100 d-flex flex-column justify-content-center ">
          <div className="form-floating mb-3">
            <select
              className="form-select "
              aria-label="Default select example"
            >
              <option value="0">--Uzmanlık Alanı Seçiniz--</option>
              {fields.map((field, index) => (
                <option key={index} value={index + 1}>
                  {field}
                </option>
              ))}
            </select>
            <label for="floatingSelect">Uzmanlık Alanı</label>
            <span>Hata</span>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 ">
            <button
              type="button"
              className="btn btn-primary d-flex gap-2 justify-content-center align-items-center "
            >
              HTML
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary d-flex gap-2 justify-content-center align-items-center"
            >
              CSS<i className="fa-solid fa-xmark"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary d-flex gap-2 justify-content-center align-items-center"
            >
              Bootstrap<i className="fa-solid fa-xmark"></i>
            </button>
            <button
              type="button"
              className="btn btn-primary d-flex gap-2 justify-content-center align-items-center"
            >
              React<i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between  mt-5">
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
