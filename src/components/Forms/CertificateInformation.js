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
  const [validation, setValidation] = useState({
    company: certificateInformation.company ? true : null,
    certificateName: certificateInformation.certificateName ? true : null,
    certificateYear: certificateInformation.certificateYear ? true : null,
  });

  const [formValues, setFormValues] = useState({
    company: certificateInformation.company,
    certificateName: certificateInformation.certificateName,
    certificateYear: certificateInformation.certificateYear,
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
      if (value.length >= 1) {
        setValidation({ ...validation, [name]: true });
      } else {
        setValidation({ ...validation, [name]: false });
      }
    }
    if (name === "certificateYear") {
      const currentYear = new Date().getFullYear();
      if (Number(value) >= currentYear - 10 && Number(value) <= currentYear) {
        setValidation({ ...validation, certificateYear: true });
      } else {
        setValidation({ ...validation, certificateYear: false });
      }
    }
  };

  const controlFormValidation = () => {
    if (Object.values(validation).every((value) => value === true)) {
      dispatch(
        setFormValidations({
          ...formValidations,
          certificateInformationValidation: true,
        })
      );
    } else {
      setFormValidations({
        ...formValidations,
        certificateInformationValidation: false,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loadForm();
    setLastValidatedForm(onIndex + 1);
    setOnIndex(onIndex + 1);
  };

  const loadForm = () => {
    dispatch(
      setCertificateInformation({
        company: formValues.company,
        certificateName: formValues.certificateName,
        certificateYear: formValues.certificateYear,
      })
    );
  };

  return (
    <>
      <form
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 2 ? "" : "d-none"
        } `}
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
              !validation.company ? "d-block" : "d-none"
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
              !validation.certificateName ? "d-block" : "d-none"
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
              !validation.certificateYear ? "d-block" : "d-none"
            } `}
          ></span>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <button type="submit" className="btn btn-primary px-4">
            Geri
          </button>
          <button
            type="submit"
            className={`btn btn-primary px-4 ${
              formValidations.certificateInformationValidation ? "" : "disabled"
            } `}
          >
            İleri
          </button>
        </div>
      </form>
    </>
  );
}
