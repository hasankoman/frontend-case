import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSpecializationAreas,
  setFormValidations,
} from "../../Store/information/information.slice";
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

export default function SpecializationAreas({
  onIndex,
  setOnIndex,
  setLastValidatedForm,
}) {
  const { specializationAreas, formValidations } = useSelector(
    (state) => state.information
  );
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [seeOptions, setSeeOptions] = useState(false);
  const [validation, setValidation] = useState();
  const [formValues, setFormValues] = useState(specializationAreas);

  const handleChange = (e) => {
    const userField = e.target.value;
    if (userField !== "0") {
      const isExist = formValues.includes(userField);
      if (formValues.length >= 5) {
        setError(
          "5 tane uzmanlık alanından fazla uzmanlık alanı seçemezsiniz."
        );
      } else {
        if (isExist) {
          setError(
            userField +
              " uzmanlık alanını zaten eklediniz. Lütfen daha önce eklemediğiniz bir uzmanlık alanı ekleyiniz."
          );
        } else {
          setError("");
          setFormValues([...formValues, e.target.value]);
        }
      }
    }
  };

  useEffect(() => {
    controlFormValidation();
  }, [formValues]);

  const controlFormValidation = () => {
    if (formValues.length < 2) {
      setError("En az 2 uzmanlık alanı eklemelisiniz.");
      dispatch(
        setFormValidations({
          ...formValidations,
          specializationAreasValidation: false,
        })
      );

      setValidation(false);
    } else {
      setError("");
      dispatch(
        setFormValidations({
          ...formValidations,
          specializationAreasValidation: true,
        })
      );
      setValidation(true);
    }
  };

  const handleClick = (e) => {
    if (seeOptions) {
      setSeeOptions(!seeOptions);
      handleChange(e);
    } else {
      setSeeOptions(!seeOptions);
    }
  };

  const handleDelete = (field) => {
    const deleteIndex = formValues.findIndex((f) => f === field);
    setFormValues([
      ...formValues.slice(0, deleteIndex),
      ...formValues.slice(deleteIndex + 1, formValues.length),
    ]);
  };

  const handlePrevClick = () => {
    setOnIndex(onIndex - 1);
    setStore();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStore();
    setOnIndex(onIndex + 1);
    setLastValidatedForm(onIndex + 1);
  };

  const setStore = () => {
    dispatch(setSpecializationAreas(formValues));
  };

  return (
    <>
      <form
        action=""
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 3 ? "" : "d-none"
        } `}
        onSubmit={handleSubmit}
      >
        <h2 className="  pb-2 mb-5 text-center border-bottom  ">
          Uzmanlık Alanları
        </h2>
        <div className="h-100 d-flex flex-column justify-content-center ">
          <div className="form-floating mb-3">
            <select
              className="form-select "
              aria-label="Default select example"
              name="field"
              onClick={handleClick}
            >
              <option value="0">--Uzmanlık Alanı Seç</option>
              {fields.map((field, index) => (
                <option key={index} value={field}>
                  {field}
                </option>
              ))}
            </select>
            <label for="floatingSelect">Uzmanlık Alanı</label>
            <span className={`text-danger ${error === "" ? "" : "d-block"} `}>
              {error}
            </span>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 ">
            {formValues.map((field, index) => (
              <button
                type="button"
                key={index}
                className="btn btn-primary d-flex gap-2 justify-content-center align-items-center "
                onClick={() => handleDelete(field)}
              >
                {field}
                <i className="fa-solid fa-xmark"></i>
              </button>
            ))}
            {formValues.length === 0 && (
              <p>Uzmanlık alanı eklemek için lütfen seçim yapınız.</p>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between  mt-5">
          <button
            type="button"
            className="btn btn-primary px-4"
            onClick={handlePrevClick}
          >
            Geri
          </button>
          <button
            type="submit"
            className={` ${validation ? "" : "disabled"} btn btn-primary px-4`}
          >
            İleri
          </button>
        </div>
      </form>
    </>
  );
}
