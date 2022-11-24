import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCertificateInformation,
  setFormValidations,
} from "../../Store/information/information.slice";
const fields = ["HTML", "CSS", 3, 4];

export default function CertificateInformation({
  onIndex,
  setOnIndex,
  setLastValidatedForm,
}) {
  const { certificateInformation, formValidations } = useSelector(
    (state) => state.information
  );
  const dispatch = useDispatch();

  const currentYear = new Date().getFullYear();

  const [formValidation, setFormValidation] = useState({
    company: certificateInformation.company ? true : null,
    certificateName: certificateInformation.certificateName ? true : null,
    certificateYear: certificateInformation.certificateYear ? true : null,
  });

  const [validation, setValidation] = useState(
    formValidations.certificateInformationValidation
  );

  const [formValues, setFormValues] = useState({
    company: certificateInformation.company
      ? certificateInformation.company
      : "",
    certificateName: certificateInformation.certificateName
      ? certificateInformation.certificateName
      : "",
    certificateYear: certificateInformation.certificateYear
      ? certificateInformation.certificateYear
      : "",
  });

  useEffect(() => {
    controlFormValidation();
  }, [formValues]);
  useEffect(() => {
    controlFormValidation();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (name === "company" || name === "certificateName") {
      if (value.length >= 2) {
        setFormValidation({ ...formValidation, [name]: true });
      } else {
        setFormValidation({ ...formValidation, [name]: false });
      }
    }
    if (name === "certificateYear") {
      const intValue = parseInt(value);

      if (intValue >= currentYear - 10 && intValue <= currentYear) {
        setFormValidation({ ...formValidation, [name]: true });
      } else {
        setFormValidation({ ...formValidation, [name]: false });
      }
    }
  };

  const controlFormValidation = () => {
    if (Object.values(formValidation).every((value) => value === true)) {
      console.log("xd2");
      dispatch(
        setFormValidations({
          ...formValidations,
          certificateInformationValidation: true,
        })
      );
      setValidation(true);
    } else {
      console.log("xd");
      dispatch(
        setFormValidations({
          ...formValidations,
          certificateInformationValidation: false,
        })
      );

      setValidation(false);
    }
  };

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
    const { company, certificateName, certificateYear } = formValues;
    dispatch(
      setCertificateInformation({
        company,
        certificateName,
        certificateYear,
      })
    );
  };

  return (
    <>
      <form
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 2 ? "" : "d-none"
        } `}
        onSubmit={handleSubmit}
      >
        <h2 className=" pb-2 mb-5 text-center border-bottom ">
          Sertifika Bilgileri
        </h2>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Alındığı Kurum"
            name="company"
            onChange={handleChange}
            value={formValues.company}
            required
          />
          <label>Alındığı Kurum</label>
          <span
            className={`text-danger ${
              !formValidation.company ? "d-block" : "invisible"
            } `}
          >
            Bu alanı boş bırakmayınız
          </span>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Sertifika Adı"
            onChange={handleChange}
            name="certificateName"
            value={formValues.certificateName}
            required
          />
          <label>Sertifikanın Adı</label>
          <span
            className={`text-danger ${
              !formValidation.certificateName ? "d-block" : "invisible"
            } `}
          >
            Bu alanı boş bırakmayınız
          </span>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="Sertifika Yılı"
            name="certificateYear"
            onChange={handleChange}
            value={formValues.certificateYear}
          />
          <label>Alındığı Yıl</label>
          <p className="fw-light">
            Son 10 yıl içinde alınan sertifikalar kabul edilecektir.
          </p>
          <span
            className={` text-danger ${
              !formValidation.certificateYear ? "d-block" : "invisible"
            } `}
          >
            Lütfen {currentYear - 10}-{currentYear} tarihleri arasında bir tarih
            giriniz.
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
