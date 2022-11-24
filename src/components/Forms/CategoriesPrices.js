import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoriesPrices,
  setFormValidations,
} from "../../Store/information/information.slice";
import Prices from "../Prices";

const categories = [
  {
    id: 1,
    name: "Kategori 1",
    price: "10000",
  },
  {
    id: 2,
    name: "Kategori 2",
    price: "5700",
  },
  {
    id: 3,
    name: "Kategori 3",
    price: "6400",
  },
  {
    id: 4,
    name: "Kategori 4",
    price: "18500",
  },
];

export default function CategoriesPrices({
  onIndex,
  setOnIndex,
  setLastValidatedForm,
}) {
  const { categoriesPrices, formValidations } = useSelector(
    (state) => state.information
  );
  const [currentCategory, setCurrentCategory] = useState();
  const [validation, setValidation] = useState(
    formValidations.categoriesPricesValidation
  );
  const [error, setError] = useState(
    "Fiyat bilgisi almak için herhangi bir kategori seçiniz."
  );
  const dispatch = useDispatch();

  // useState(() => {
  //   console.log(validation);
  //   if (validation) {

  //   } else if (!validation) {
  //     dispatch(
  //       setFormValidations({
  //         ...formValidations,
  //         categoriesPricesValidation: false,
  //       })
  //     );
  //   }
  // }, [validation]);

  const handleChange = (e) => {
    if (e.target.value !== "0") {
      const selectedCategoryIndex = categories.findIndex(
        (category) => category.name === e.target.value
      );
      setCurrentCategory(categories[selectedCategoryIndex]);
      setError("");
      setValidation(true);
      dispatch(
        setFormValidations({
          ...formValidations,
          categoriesPricesValidation: true,
        })
      );
    } else {
      setCurrentCategory();
      setError("Fiyat bilgisi almak için herhangi bir kategori seçiniz.");
      setValidation(false);
      dispatch(
        setFormValidations({
          ...formValidations,
          categoriesPricesValidation: false,
        })
      );
    }
  };

  const handlePrevClick = () => {
    setOnIndex(onIndex - 1);
    setStore();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStore();
    setLastValidatedForm(onIndex + 1);
    setOnIndex(onIndex + 1);
  };

  const setStore = () => {
    dispatch(
      setCategoriesPrices({
        category: currentCategory,
      })
    );
  };

  return (
    <>
      <form
        action=""
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 4 ? "" : "d-none"
        } `}
        onSubmit={handleSubmit}
      >
        <h2 className="  pb-2 mb-5 text-center border-bottom  ">
          Kategoriler ve Ücretler
        </h2>
        <div>
          <div className="form-floating mb-3">
            <select
              className="form-select "
              aria-label="Default select example"
              onChange={handleChange}
            >
              <option value="0">--Kategori Seçiniz--</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <label for="floatingSelect">Kategori</label>
          </div>
          {!currentCategory ? (
            <span className="text-danger d-block">{error}</span>
          ) : (
            <Prices currentCategory={currentCategory} />
          )}
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
            className={`btn btn-dark px-4 ${validation ? "" : "disabled"}  `}
          >
            İleri
          </button>
        </div>
      </form>
    </>
  );
}
