import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPersonalInformation,
  updatePersonalInformation,
  setEducationInformation,
  updateEducationInformation,
  setSpecializationAreas,
  updateSpecializationAreas,
  setCategoriesPrices,
  updateCategoriesPrices,
  setAbout,
  updateAbout,
} from "../Store/information/information.slice";
import EducationInformation from "./Forms/EducationInformation";
import PersonalInformation from "./Forms/PersonalInformation";
import CertificateInformation from "./Forms/CertificateInformation";
import SpecializationAreas from "./Forms/SpecializationAreas";
import CategoriesPrices from "./Forms/CategoriesPrices";
import About from "./Forms/About";
import Contract from "./Forms/Contract";
import Result from "./Result";

export default function Form({ onIndex, setOnIndex, setLastValidatedForm }) {
  const [form, setForm] = useState();
  const [result, setResult] = useState();
  const [validation, setValidation] = useState(false);
  const [formInformation, setFormInformation] = useState();
  const {
    personalInformation,
    educationInformation,
    certificateInformation,
    specializationAreas,
    categoriesPrices,
    about,
  } = useSelector((state) => state.information);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (onIndex === 0)
  //     setForm(
  //       <PersonalInformation setOnIndex={setOnIndex} onIndex={onIndex} />
  //     );
  //   if (onIndex === 1)
  //     setForm(
  //       <EducationInformation setOnIndex={setOnIndex} onIndex={onIndex} />
  //     );
  //   if (onIndex === 2)
  //     setForm(
  //       <CertificateInformation setOnIndex={setOnIndex} onIndex={onIndex} />
  //     );
  //   if (onIndex === 3)
  //     setForm(
  //       <SpecializationAreas setOnIndex={setOnIndex} onIndex={onIndex} />
  //     );
  //   if (onIndex === 4)
  //     setForm(<CategoriesPrices setOnIndex={setOnIndex} onIndex={onIndex} />);
  //   if (onIndex === 5)
  //     setForm(<About setOnIndex={setOnIndex} onIndex={onIndex} />);
  //   if (onIndex === 6)
  //     setForm(<Contract setOnIndex={setOnIndex} onIndex={onIndex} />);
  //   if (onIndex === 7) {
  //     setResult(<Result />);
  //     setForm("");
  //   }
  // }, [onIndex]);

  return (
    <div className="form-container">
      {/* {onIndex === 7 ? result : form} */}
      <PersonalInformation
        setOnIndex={setOnIndex}
        onIndex={onIndex}
        setLastValidatedForm={setLastValidatedForm}
      />
      <EducationInformation
        setOnIndex={setOnIndex}
        onIndex={onIndex}
        setLastValidatedForm={setLastValidatedForm}
      />
      <CertificateInformation
        setOnIndex={setOnIndex}
        onIndex={onIndex}
        setLastValidatedForm={setLastValidatedForm}
      />
      <SpecializationAreas
        setOnIndex={setOnIndex}
        onIndex={onIndex}
        setLastValidatedForm={setLastValidatedForm}
      />
      <CategoriesPrices
        setOnIndex={setOnIndex}
        onIndex={onIndex}
        setLastValidatedForm={setLastValidatedForm}
      />
      <About
        setOnIndex={setOnIndex}
        onIndex={onIndex}
        setLastValidatedForm={setLastValidatedForm}
      />
      <Contract
        setOnIndex={setOnIndex}
        onIndex={onIndex}
        setLastValidatedForm={setLastValidatedForm}
      />
      <Result onIndex={onIndex} />
    </div>
  );
}
