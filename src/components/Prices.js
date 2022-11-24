import React, { useEffect } from "react";
import dolarConverter from "../Helpers/dolarConverter";

export default function Prices({ currentCategory }) {
  useEffect(() => {}, []);

  return (
    <>
      <div className="mb-3">
        <span className="d-inline-block ms-1 mb-2 ">Yurtiçi Fiyatı</span>

        <input
          type="text"
          className="form-control pe-none text-muted "
          value={`${currentCategory.price}(₺)`}
        />
      </div>
      <div>
        <span className="d-inline-block ms-1 mb-2 ">Yurtdışı Fiyatı</span>
        <input
          type="text"
          className="form-control pe-none text-muted"
          value={`${dolarConverter(currentCategory.price)}($)`}
        />
      </div>
    </>
  );
}
