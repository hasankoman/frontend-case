import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormValidations,
  setEducationInformation,
} from "../../Store/information/information.slice";
import SelectInput from "../SelectInput";

export default function EducationInformation({
  setOnIndex,
  onIndex,
  setLastValidatedForm,
}) {
  const { educationInformation, formValidations } = useSelector(
    (state) => state.information
  );
  const dispatch = useDispatch();
  const [fileError, setFileError] = useState("");
  const [validation, setValidation] = useState();

  //Form Item Validation In Component
  const [formValidation, setFormValidation] = useState({
    university: educationInformation.university ? true : null,
    graduateYear: educationInformation.graduateYear ? true : null,
    graduateFile: false,
  });

  //Form Values
  const [formValues, setFormValues] = useState({
    university: educationInformation.university
      ? educationInformation.university
      : "",
    graduateYear: educationInformation.graduateYear
      ? educationInformation.graduateYear
      : "",
    graduateFile: educationInformation.graduateFile
      ? educationInformation.graduateFile
      : "",
  });

  useEffect(() => {
    controlFormValidation();
  }, [formValues, formValidation]);
  useEffect(() => {
    controlFormValidation();
  }, []);
  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === "graduateFile") {
      console.log(files[0].size / 1048576);
      console.log(files[0].size / 1048576 <= 2);
      if (
        e.target.files[0].type.includes("pdf") ||
        e.target.files[0].type.includes("jpg") ||
        e.target.files[0].type.includes("png") ||
        e.target.files[0].type.includes("PDF") ||
        e.target.files[0].type.includes("JPG") ||
        e.target.files[0].type.includes("PNG")
      ) {
        if (files[0].size / 1048576 <= 2) {
          setFormValidation({ ...formValidation, [name]: true });
          setFileError();
        } else {
          setFileError(
            "Lütfen dosya boyutu 2 mb'ın altında olan dosya yükleyiniz."
          );
          setFormValidation({ ...formValidation, [name]: false });
        }
      } else {
        setFileError(
          "Lütfen uzantısı yukarda yazanlardan biri olan bir dosya yükleyiniz."
        );
        setFormValidation({ ...formValidation, [name]: false });
      }
    }
    if (name === "graduateYear") {
      const { value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      if (Number(value) >= 1920 && Number(value) <= 2022) {
        setFormValidation({ ...formValidation, graduateYear: true });
      } else {
        setFormValidation({ ...formValidation, graduateYear: false });
      }
    }
    controlFormValidation();
  };

  const controlFormValidation = () => {
    if (Object.values(formValidation).every((value) => value === true)) {
      dispatch(
        setFormValidations({
          ...formValidations,
          educationInformationValidation: true,
        })
      );
      setValidation(true);
    } else {
      dispatch(
        setFormValidations({
          ...formValidations,
          educationInformationValidation: false,
        })
      );
      setValidation(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStore();
    setOnIndex(onIndex + 1);
    setLastValidatedForm(onIndex + 1);
  };

  const handlePrevClick = () => {
    setOnIndex(onIndex - 1);
    setStore();
  };

  const setStore = () => {
    const { graduateYear, university } = formValues;
    dispatch(
      setEducationInformation({
        university,
        graduateYear,
      })
    );
  };

  return (
    <>
      <form
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 1 ? "" : "d-none"
        } `}
        onSubmit={handleSubmit}
      >
        <h2 className=" pb-2 mb-5 text-center border-bottom ">
          Eğitim Bilgileri
        </h2>
        <SelectInput
          formValues={formValues}
          setFormValues={setFormValues}
          setFormValidation={setFormValidation}
          formValidation={formValidation}
        />

        <div className="form-floating row g-2 mb-3">
          <input
            type="text"
            className="form-control"
            name="graduateYear"
            placeholder="Mezuniyet Yılı"
            value={formValues.graduateYear}
            onChange={handleChange}
          />
          <label for="floatingInput">Mezuniyet Yılı</label>
          <p className="fw-light">
            1920-2022 yılları arasında mezun olanlar kabul edilecektir.
          </p>
          <span
            className={`text-danger ${
              !formValidation.graduateYear ? "" : "invisible"
            } `}
          >
            Lütfen uygun bir mezuniyet yılı giriniz.
          </span>
        </div>
        <div>
          <label for="formFile" className="form-label fw-semibold ">
            Diploma:
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="graduateFile"
            onChange={handleChange}
            accept=".png,.pdf,.jpg"
            required
          />
          <p className="fw-light ">
            <span className="fw-semibold d-inline-block ">
              Kabul edilen dosya uzantıları:
            </span>{" "}
            .pdf, .png, .jpg Yüklenecek maksimum dosya boyutu 2 mb'tır.
          </p>
          <span
            className={`text-danger ${
              !formValidation.graduateFile ? "" : "invisible"
            } `}
          >
            {fileError === ""
              ? "Lütfen uygun bir dosya yükleyiniz."
              : fileError}
          </span>
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
