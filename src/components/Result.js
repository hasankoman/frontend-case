import React from "react";
import { useSelector } from "react-redux";
import dolarConverter from "../Helpers/dolarConverter";

export default function Result({ onIndex }) {
  const {
    personalInformation,
    educationInformation,
    certificateInformation,
    specializationAreas,
    categoriesPrices,
    about,
  } = useSelector((state) => state.information);

  return (
    <>
      <div
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 7 ? "" : "d-none"
        } `}
      >
        <h2 className="pb-2 mb-4 text-center border-bottom  ">Sonuç Ekranı</h2>
        <div className="d-flex flex-column gap-3">
          <h5 className="text-success">Başvurunuzu başarıyla tamamladınız.</h5>

          <div className="">
            <h6 className=" border-bottom d-inline  pb-1 border-2 border-dark bold ">
              Kişisel Bilgileriniz:
            </h6>
            <ul className="mt-3">
              <li className=" fw-semibold ">
                İsim Soyisim:{" "}
                <span className=" fw-normal ">
                  {personalInformation.nameSurname}
                </span>
              </li>
              <li className=" fw-semibold ">
                Email:{" "}
                <span className=" fw-normal ">{personalInformation.email}</span>
              </li>
              <li className=" fw-semibold ">
                Telefon Numarası:{" "}
                <span className=" fw-normal ">
                  {personalInformation.countryCode +
                    " " +
                    personalInformation.phoneNumber}
                </span>
              </li>
              <li className=" fw-semibold ">
                Doğum Tarihi:{" "}
                <span className=" fw-normal ">
                  {personalInformation.birthday}
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <h6 className=" border-bottom d-inline pb-1 border-2 border-dark fw-bold ">
              Eğitim Bilgileriniz:
            </h6>
            <ul className="mt-3">
              <li className=" fw-semibold ">
                Üniversite:{" "}
                <span className=" fw-normal ">
                  {educationInformation.university}
                </span>{" "}
              </li>
              <li className=" fw-semibold ">
                Mezuniyet Yılı:{" "}
                <span className=" fw-normal ">
                  {educationInformation.graduateYear}
                </span>{" "}
              </li>
            </ul>
          </div>
          <div className="">
            <h6 className=" border-bottom d-inline pb-1 border-2 border-dark fw-bold ">
              Sertifika Bilgileriniz:
            </h6>
            <ul className="mt-3">
              <li className=" fw-semibold ">
                Alındığı Kurum:{" "}
                <span className=" fw-normal ">
                  {certificateInformation.company}
                </span>{" "}
              </li>
              <li className=" fw-semibold ">
                Sertifika Adı:{" "}
                <span className=" fw-normal ">
                  {certificateInformation.certificateName}
                </span>{" "}
              </li>
              <li className=" fw-semibold ">
                Alındığı Yıl:{" "}
                <span className=" fw-normal ">
                  {certificateInformation.certificateYear}
                </span>{" "}
              </li>
            </ul>
          </div>
          <div className="">
            <h6 className=" border-bottom d-inline pb-1 border-2 border-dark fw-bold ">
              Uzmanlık Alanlarınız:
            </h6>
            <ul className="mt-3">
              {specializationAreas.map((field) => (
                <li className=" fw-semibold ">
                  <span className="">{field}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h6 className=" border-bottom d-inline pb-1 border-2 border-dark fw-bold ">
              Kategoriniz ve Ücret:
            </h6>
            <ul className="mt-3">
              <li className=" fw-semibold ">
                Kategori:{" "}
                <span className=" fw-normal ">
                  {categoriesPrices.category
                    ? categoriesPrices.category.name
                    : ""}
                </span>{" "}
              </li>
              <li className=" fw-semibold ">
                Ücret(₺):{" "}
                <span className=" fw-normal ">
                  {" "}
                  {categoriesPrices.category
                    ? categoriesPrices.category.price
                    : ""}
                  ₺
                </span>{" "}
              </li>
              <li className=" fw-semibold ">
                Ücret($):{" "}
                <span className=" fw-normal ">
                  {" "}
                  {categoriesPrices.category
                    ? dolarConverter(categoriesPrices.category.price)
                    : ""}
                  $
                </span>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h6 className=" border-bottom d-inline  pb-1 border-2 border-dark fw-bold ">
              Hakkınızda:
            </h6>
            <p className="about-result mt-3 fw-semibold border-bottom border-top  ">
              <span className=" fw-normal ">{about.article}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
