import React, { useEffect, useState } from "react";
import countryCodes from "../../Helpers/countryCodes.json";
import {
  setPersonalInformation,
  setFormValidations,
} from "../../Store/information/information.slice";
import { useDispatch, useSelector } from "react-redux";

export default function PersonalInformation({
  onIndex,
  setOnIndex,
  setLastValidatedForm,
}) {
  const { personalInformation, formValidations } = useSelector(
    (state) => state.information
  );
  const dispatch = useDispatch();
  const [validation, setValidation] = useState({
    nameSurname: personalInformation.nameSurname ? true : null,
    phoneNumber: personalInformation.phoneNumber ? true : null,
    email: personalInformation.email ? true : null,
    birthday: personalInformation.birthday ? true : null,
    countryCode: personalInformation.countryCode ? true : false,
  });

  const [formValues, setFormValues] = useState({
    nameSurname: personalInformation.nameSurname,
    email: personalInformation.email,
    countryCode: personalInformation.countryCode,
    birthday: personalInformation.birthday,
    phoneNumber: personalInformation.phoneNumber,
  });

  const [formValidation, setFormValidation] = useState(
    formValidations.personalInformationValidation
  );

  useEffect(() => {
    controlFormValidation();
  }, [formValues]);
  useEffect(() => {
    controlFormValidation();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === "nameSurname") {
      let nameSurnameValidity = e.target.validity.valid;
      if (nameSurnameValidity) {
        setValidation({ ...validation, nameSurname: true });
      } else {
        setValidation({ ...validation, nameSurname: false });
      }
    }
    if (name === "email") {
      let emailValidity = e.target.validity.valid;
      if (emailValidity) {
        setValidation({ ...validation, email: true });
      } else {
        setValidation({ ...validation, email: false });
      }
    }
    if (name === "phoneNumber") {
      let phoneNumberValidity = e.target.validity.valid;
      if (phoneNumberValidity) {
        setValidation({ ...validation, phoneNumber: true });
      } else {
        setValidation({ ...validation, phoneNumber: false });
      }
    }
    if (name === "birthday") {
      let birthdayValidity = e.target.validity.valid;
      if (birthdayValidity) {
        setValidation({ ...validation, birthday: true });
      } else {
        setValidation({ ...validation, birthday: false });
      }
    }
    if (name === "countryCode") {
      if (e.target.value !== "0") {
        setValidation({ ...validation, countryCode: true });
      } else {
        setValidation({ ...validation, countryCode: false });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setPersonalInformation({
        nameSurname: formValues.nameSurname,
        email: formValues.email,
        countryCode: formValues.countryCode,
        birthday: formValues.birthday,
        phoneNumber: formValues.phoneNumber,
      })
    );
    setLastValidatedForm(onIndex + 1);
    setOnIndex(onIndex + 1);
  };

  const controlFormValidation = () => {
    if (Object.values(validation).every((value) => value === true)) {
      setFormValidations({
        ...formValidations,
        personalInformationValidation: true,
      });
      setFormValidation(true);
    } else {
      setFormValidations({
        ...formValidations,
        personalInformationValidation: false,
      });
      setFormValidation(false);
    }
  };

  return (
    <>
      <form
        action=""
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 0 ? "" : "d-none"
        } `}
        onSubmit={handleSubmit}
      >
        <h2 className=" pb-2 mb-5 text-center border-bottom ">
          Kişisel Bilgiler
        </h2>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name Surname"
            value={formValues.nameSurname}
            name="nameSurname"
            onChange={handleChange}
            required
            pattern="^([a-zA-Z]{1,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)"
          />
          <label for="floatingNameSurname">İsim Soyisim</label>
          <span
            className={`text-danger ${validation.nameSurname ? "d-none" : ""} `}
          >
            Lütfen isim ve soyisminizi uygun şekilde giriniz.
          </span>
        </div>
        <div className=" row gx-2 mb-3">
          <div className="col-3">
            <div className="form-floating ">
              <select
                className="form-select py-0"
                name="countryCode"
                onChange={handleChange}
                required
                value={formValues.countryCode}
              >
                <option value="0">--Seç--</option>
                {countryCodes.countries.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-9">
            <div className="form-floating ">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
                required
              />
              <label for="floatingNumber">Telefon Numarası</label>
              <span className={`text-danger`}>
                Lütfen uygun bir telefon numarası giriniz.
              </span>
            </div>
          </div>
          <span className={`text-danger  `}>
            Lütfen uygun telefon numarası giriniz.
          </span>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            required
          />
          <label for="floatingInput">Email</label>
          <span className={`text-danger ${validation.email ? "d-none" : ""}  `}>
            Lütfen uygun bir email giriniz.
          </span>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="date"
            className="form-control"
            placeholder="Birthday"
            max="2022-11-22"
            onChange={handleChange}
            name="birthday"
            required
            value={formValues.birthday}
          />
          <label for="floatingInput">Doğum Tarihi</label>
          <span
            className={`text-danger ${!validation.birthday ? "" : "d-none"} `}
          >
            Lütfen uygun doğum tarihi giriniz.
          </span>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <button
            type="submit"
            className={`btn btn-primary px-4 ${
              formValidation ? "" : "disabled"
            } `}
          >
            İleri
          </button>
        </div>
      </form>
    </>
  );
}
