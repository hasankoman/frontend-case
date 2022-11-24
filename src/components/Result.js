import React from "react";

export default function Result({ onIndex }) {
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
          <div className="row">
            <div className="col-6">
              <h6>Kişisel Bilgileriniz:</h6>
              <ul>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h6>Eğitim Bilgileriniz:</h6>
              <ul>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Kişisel Bilgileriniz:</h6>
              <ul>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h6>Eğitim Bilgileriniz:</h6>
              <ul>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Kişisel Bilgileriniz:</h6>
              <ul>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h6>Eğitim Bilgileriniz:</h6>
              <ul>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
                <li>
                  İsim Soyisim: <span>Hasan Koman</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
