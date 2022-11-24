import React from "react";

const categories = [1, 2, 3, 4];

export default function CategoriesPrices({ onIndex, setOnIndex }) {
  return (
    <>
      <form
        action=""
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 4 ? "" : "d-none"
        } `}
      >
        <h2 className="  pb-2 mb-5 text-center border-bottom  ">
          Kategoriler ve Ücretler
        </h2>
        <div>
          <div className="form-floating mb-3">
            <select
              className="form-select "
              aria-label="Default select example"
            >
              <option value="0">--Kategori Seçiniz--</option>
              {categories.map((categorie) => (
                <option>{categorie}</option>
              ))}
            </select>
            <label for="floatingSelect">Kategori</label>
            <span>Hata</span>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Yurtiçi Fiyatı(₺)</label>
            <span>Hata</span>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Yurtdışı Fiyatı($)</label>
            <span>Hata</span>
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
