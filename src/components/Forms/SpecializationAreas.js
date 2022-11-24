import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSpecializationAreas,
  setFormValidations,
} from "../../Store/information/information.slice";
import SelectInput from "../SelectInput";
import SpecializationInput from "../SpecializationInput";

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
  const [validation, setValidation] = useState();
  const [formValues, setFormValues] = useState(specializationAreas);

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

  const handleChange = (userField) => {
    if (userField !== "0") {
      const isExist = formValues.includes(userField);

      if (formValues.length >= 5) {
        setError(
          "5 tane uzmanlık alanından fazla uzmanlık alanı seçemezsiniz."
        );
        setTimeout(() => {
          setError("");
        }, 3000);
      } else {
        if (isExist) {
          setError(
            userField +
              " uzmanlık alanını zaten eklediniz. Lütfen daha önce eklemediğiniz bir uzmanlık alanı ekleyiniz."
          );
          if (formValues.length < 2) {
            setTimeout(() => {
              setError("En az 2 uzmanlık alanı eklemelisiniz.");
            }, 3000);
          } else {
            setTimeout(() => {
              setError("");
            }, 3000);
          }
        } else {
          setFormValues([...formValues, userField]);
          setError("");
        }
      }
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
          
          <SpecializationInput
            handleChange={handleChange}
            formValues={formValues}
            setFormValues={setFormValues}
            setValidation={setValidation}
            validation={validation}
            error={error}
          />

          <div className="d-flex gap-2 justify-content-center mt-4 flex-wrap ">
            {formValues.map((field, index) => (
              <button
                type="button"
                key={index}
                className="btn btn-warning d-flex gap-2 justify-content-center align-items-center "
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
            className="btn btn-dark px-4"
            onClick={handlePrevClick}
          >
            Geri
          </button>
          <button
            type="submit"
            className={` ${validation ? "" : "disabled"} btn btn-dark px-4`}
          >
            İleri
          </button>
        </div>
      </form>
    </>
  );
}
