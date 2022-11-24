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

  const [currentDate, setCurrentDate] = useState();

  //Form Item Validation In Component
  const [formValidation, setFormValidation] = useState({
    nameSurname: personalInformation.nameSurname ? true : null,
    phoneNumber: personalInformation.phoneNumber ? true : null,
    email: personalInformation.email ? true : null,
    birthday: personalInformation.birthday ? true : null,
    countryCode: personalInformation.countryCode ? true : null,
  });

  //All Validate
  const [validation, setValidation] = useState(
    formValidations.personalInformationValidation
  );

  //Form Values
  const [formValues, setFormValues] = useState({
    nameSurname: personalInformation.nameSurname
      ? personalInformation.nameSurname
      : "",
    email: personalInformation.email ? personalInformation.email : "",
    countryCode: personalInformation.countryCode
      ? personalInformation.countryCode
      : "",
    birthday: personalInformation.birthday ? personalInformation.birthday : "",
    phoneNumber: personalInformation.phoneNumber
      ? personalInformation.phoneNumber
      : "",
  });

  useEffect(() => {
    controlFormValidation();
  }, [formValues]);
  useEffect(() => {
    controlFormValidation();
    getCurrentDate();
  }, []);

  const getCurrentDate = () => {
    const d = new Date();
    
    setCurrentDate(d.toISOString().slice(0, 10));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === "nameSurname") {
      let nameSurnameValidity = e.target.validity.valid;
      if (nameSurnameValidity) {
        setFormValidation({ ...formValidation, [name]: true });
      } else {
        setFormValidation({ ...formValidation, [name]: false });
      }
    }
    if (name === "email") {
      let emailValidity = e.target.validity.valid;
      if (emailValidity) {
        setFormValidation({ ...formValidation, email: true });
      } else {
        setFormValidation({ ...formValidation, email: false });
      }
    }
    if (name === "countryCode") {
      if (value === "0") {
        setFormValidation({ ...formValidation, [name]: false });
      } else {
        setFormValidation({ ...formValidation, [name]: true });
      }
    }
    if (name === "phoneNumber") {
      let phoneNumberValidity = e.target.validity.valid;
      if (phoneNumberValidity) {
        setFormValidation({ ...formValidation, [name]: true });
      } else {
        setFormValidation({ ...formValidation, [name]: false });
      }
    }
    if (name === "birthday") {
      let birthdayValidity = e.target.validity.valid;
      if (birthdayValidity) {
        setFormValidation({ ...formValidation, [name]: true });
      } else {
        setFormValidation({ ...formValidation, [name]: false });
      }
    }
  };

  //Redux Set Form Validation
  const controlFormValidation = () => {
    if (Object.values(formValidation).every((value) => value === true)) {
      setValidation(true);
      dispatch(
        setFormValidations({
          ...formValidations,
          personalInformationValidation: true,
        })
      );
    } else {
      dispatch(
        setFormValidations({
          ...formValidations,
          personalInformationValidation: false,
        })
      );
      setValidation(false);
    }
  };

  //Redux Set Form
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

  return (
    <>
      <form
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
            pattern="^([a-zA-ZğüşöçıİĞÜŞÖÇ]{1,}\s[a-zA-ZğüşöçıİĞÜŞÖÇ]{1,}'?-?[a-zA-ZğüşöçıİĞÜŞÖÇ]{1,}\s?([a-zA-ZğüşöçıİĞÜŞÖÇ]{1,})?)"
          />
          <label for="floatingNameSurname">İsim Soyisim</label>
          <span
            className={`text-danger ${
              formValidation.nameSurname ? "invisible" : ""
            } `}
          >
            Lütfen isim ve soyisminizi uygun şekilde giriniz.
          </span>
        </div>
        <div className=" row gx-2 mb-3">
          <div className="col-4 col-sm-3">
            <div className="form-floating">
              <select
                className="form-select py-0"
                name="countryCode"
                onChange={handleChange}
                required
                value={formValues.countryCode}
              >
                <option value="0">--Seç</option>
                {countryCodes.countries.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-8 col-sm-9">
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
            </div>
          </div>
          <span
            className={`text-danger ${
              formValidation.phoneNumber && formValidation.countryCode
                ? "invisible"
                : ""
            } `}
          >
            Lütfen uygun bir telefon numarası giriniz.
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
          <span
            className={`text-danger ${
              formValidation.email ? "invisible" : ""
            }  `}
          >
            Lütfen uygun bir email giriniz.
          </span>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="date"
            className="form-control"
            placeholder="Birthday"
            max={currentDate}
            value={formValues.birthday ? formValues.birthday : currentDate}
            onChange={handleChange}
            name="birthday"
            required
          />
          <label for="floatingInput">Doğum Tarihi</label>
          <span
            className={`text-danger ${
              formValidation.birthday ? "invisible" : ""
            } `}
          >
            Lütfen uygun doğum tarihi giriniz.
          </span>
        </div>
        <div className="d-flex justify-content-end mt-5">
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
