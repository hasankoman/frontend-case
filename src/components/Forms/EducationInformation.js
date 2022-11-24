import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormValidations,
  setEducationInformation,
} from "../../Store/information/information.slice";

export default function EducationInformation({
  setOnIndex,
  onIndex,
  setLastValidatedForm,
}) {
  const { educationInformation, formValidations } = useSelector(
    (state) => state.information
  );
  const dispatch = useDispatch();
  const [validation, setValidation] = useState({
    university: educationInformation.university ? null : true,
    graduateYear: educationInformation.graduateYear ? true : null,
    graduateFile: educationInformation.graduateFile ? false : null,
  });

  const [formValues, setFormValues] = useState({
    university: educationInformation.university,
    graduateYear: educationInformation.graduateYear,
    graduateFile: educationInformation.graduateFile,
  });

  useEffect(() => {
    controlFormValidation();
  }, [formValues]);
  useEffect(() => {
    controlFormValidation();
  }, []);
  const handleChange = (e) => {
    const { name } = e.target;
    if (name === "graduateFile") {
      const { files } = e.target;
      setFormValues({ ...formValues, [name]: files });
      if (
        e.target.files[0].type.includes("pdf") ||
        e.target.files[0].type.includes("jpg") ||
        e.target.files[0].type.includes("png")
      ) {
        setValidation({ ...validation, graduateFile: true });
      } else {
        setValidation({ ...validation, graduateFile: false });
      }
    }
    if (name === "graduateYear") {
      const { value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      if (Number(value) >= 1920 && Number(value) <= 2022) {
        setValidation({ ...validation, graduateYear: true });
      } else {
        setValidation({ ...validation, graduateYear: false });
      }
    }
  };

  const controlFormValidation = () => {
    console.log(validation);
    console.log(formValidations);
    if (Object.values(validation).every((value) => value === true)) {
      dispatch(
        setFormValidations({
          ...formValidations,
          educationInformationValidation: true,
        })
      );
    } else {
      setFormValidations({
        ...formValidations,
        educationInformationValidation: false,
      });
    }
    console.log(formValidations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loadForm();
    setOnIndex(onIndex + 1);
    setLastValidatedForm(onIndex + 1);
  };

  const loadForm = () => {
    dispatch(
      setEducationInformation({
        university: "Okan University",
        graduateYear: formValues.graduateYear,
      })
    );
  };

  return (
    <>
      <form
        action=""
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 1 ? "" : "d-none"
        } `}
        onSubmit={handleSubmit}
      >
        <h2 className=" pb-2 mb-5 text-center border-bottom ">
          Eğitim Bilgileri
        </h2>
        <div className="form-floating row g-2 mb-3 ">
          <div
            className="form-select relative"
            aria-label="Default select example "
          ></div>
          <label for="floatingSelect">Üniversite</label>
        </div>
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
              !validation.graduateYear ? "d-block" : "d-none"
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
            .pdf, .png, .jpeg Yüklenecek maksimum dosya boyutu 2 mb'tır.
          </p>
          <span
            className={`text-danger ${
              !validation.graduateFile ? "d-block" : "d-none"
            } `}
          >
            Lütfen uygun bir dosya yükleyiniz.
          </span>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <button
            type="button"
            className="btn btn-primary px-4"
            onClick={() => setOnIndex(onIndex - 1)}
          >
            Geri
          </button>
          <button
            type="submit"
            className={`btn btn-primary px-4 ${
              formValidations.educationInformationValidation ? "" : "disabled"
            } `}
          >
            İleri
          </button>
        </div>
      </form>
    </>
  );
}
