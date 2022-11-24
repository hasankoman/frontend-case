import EducationInformation from "./Forms/EducationInformation";
import PersonalInformation from "./Forms/PersonalInformation";
import CertificateInformation from "./Forms/CertificateInformation";
import SpecializationAreas from "./Forms/SpecializationAreas";
import CategoriesPrices from "./Forms/CategoriesPrices";
import About from "./Forms/About";
import Contract from "./Forms/Contract";
import Result from "./Result";

export default function Form({ onIndex, setOnIndex, setLastValidatedForm }) {

  return (
    <div className="form-container">
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
