import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setContract,
  setFormValidations,
} from "../../Store/information/information.slice";

export default function Contract({
  onIndex,
  setOnIndex,
  setLastValidatedForm,
}) {
  const { contract, formValidations } = useSelector(
    (state) => state.information
  );
  const [formValues, setFormValues] = useState({
    userAgreement: contract.userAgreement ? contract.userAgreement : false,
    kvkk: contract.kvkk ? contract.kvkk : false,
  });
  const [validate, setValidate] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormValues((latest) => ({
      ...latest,
      [name]: checked,
    }));
  };

  useEffect(() => {
    if (formValues.userAgreement && formValues.kvkk) {
      setValidate(true);
      dispatch(
        setFormValidations({
          ...formValidations,
          contractValidation: true,
        })
      );
    } else {
      setValidate(false);
      dispatch(
        setFormValidations({
          ...formValidations,
          contractValidation: false,
        })
      );
    }
  }, [formValues]);

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
    dispatch(
      setContract({
        userAgreement: formValues.userAgreement,
        kvkk: formValues.kvkk,
      })
    );
  };

  return (
    <>
      <form
        action=""
        className={`h-100 d-flex flex-column justify-content-between ${
          onIndex === 6 ? "" : "d-none"
        } `}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <h2 className="  pb-2 mb-5 text-center border-bottom ">Sözleşme</h2>
        <div>
          <div className="contract-1 mb-4 border-bottom border-top border-dark ">
            <p className="py-2">
              <h2 className="fw-bold fs-5">Kullanıcı Sözleşmesi </h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              maiores accusamus dolorem. Vel architecto maiores dolorum vero
              fuga ipsam expedita, aperiam quis minus, provident, tempore
              aspernatur quasi ab. Ab cupiditate repudiandae obcaecati beatae
              quidem commodi, eius, non aspernatur eaque sit doloribus a ducimus
              voluptas et id iure. Qui magni iste blanditiis. Eius distinctio
              placeat, consequuntur soluta excepturi ipsum atque quibusdam,
              iusto nesciunt tempore consequatur, odio laboriosam similique
              eveniet ipsa corporis inventore quam commodi dolorum explicabo
              sapiente iste qui numquam quo? Provident perspiciatis veritatis
              recusandae facere autem eum illo nam qui accusamus aliquam ea
              magni quo temporibus nobis quam dolorem eius voluptatem, sed quos
              iste ullam aut at doloremque rem. Ab modi beatae, ipsa vitae
              voluptatum hic eaque autem excepturi eum provident asperiores
              temporibus vero corrupti, atque sapiente ut accusantium, placeat
              animi quibusdam officiis sunt veritatis est soluta? Sequi, aperiam
              corrupti harum eum vero praesentium corporis dolorum dolorem
              officiis iure, enim, sapiente voluptatum fugit cupiditate
              voluptates molestias exercitationem commodi similique debitis
              consequuntur facilis ut. Minima, iusto. Totam culpa libero,
              voluptas error enim aut soluta veritatis nobis ullam sint modi ad
              vitae dignissimos dolore doloremque explicabo odit consequatur.
              Dicta voluptates assumenda molestiae corporis recusandae at
              suscipit fugit eligendi ipsum, quod atque ad officiis ea porro
              necessitatibus id aliquam amet voluptatem iste optio, eos quam!
              Consectetur, animi hic debitis sunt quasi fuga mollitia voluptatum
              autem quis consequuntur! Recusandae nesciunt beatae consectetur
              iure cum harum minus aliquid dolorum vel aspernatur nulla
              molestias labore aliquam distinctio, quo corrupti, architecto
              porro autem maxime aut sed error debitis. Laboriosam minima
              consequatur ad, labore suscipit unde! Quos consequuntur eaque
              rerum vel assumenda aperiam temporibus modi, alias nulla
              doloremque quisquam odio at iusto? Labore libero totam recusandae
              beatae laborum nesciunt maxime doloribus natus quae nobis? Ut
              inventore error tempora quo qui sequi molestiae, saepe placeat
              iure? Nobis hic nihil qui recusandae magnam libero necessitatibus,
              officia ut voluptatibus corrupti commodi aliquam odit sapiente
              quam quas reiciendis impedit ea! Dignissimos doloribus rem
              quibusdam quo velit assumenda, esse architecto illum, aliquam
              repudiandae nesciunt aperiam doloremque totam, soluta suscipit.
              Mollitia voluptas hic expedita harum vel sed assumenda est
              debitis. Eum accusantium eius possimus vitae nulla sapiente
              quibusdam omnis? Est sint laudantium, tenetur dolore consequuntur
              enim corrupti dignissimos deserunt itaque delectus, aliquam rem
              incidunt adipisci ipsum id harum. Eaque et deleniti dolor odio ab
              veritatis doloribus autem quis? Tempore numquam quibusdam minima
              eos, commodi ad, ipsum libero ipsam veniam odio quasi error
              tempora quis aliquam pariatur, beatae sapiente aspernatur facilis
              ratione non? Ut praesentium sint vero expedita velit dignissimos
              harum aut? Maxime quis, nihil itaque nam provident iusto inventore
              facilis aliquid magnam aut doloremque laudantium voluptates
              adipisci cum omnis rerum? Error eaque atque deserunt molestias
              earum enim unde neque ullam rem, perspiciatis non quisquam nihil
              tempora vero velit corrupti totam eius, similique quis perferendis
              ducimus esse impedit. Unde, rerum fugit odit veritatis
              perspiciatis est dolor deleniti praesentium cumque, vitae eum
              dicta. Assumenda nam iste unde. Doloremque sit error laboriosam!
              Officia tempore eos, alias architecto assumenda soluta debitis
              modi maxime illum eaque ut quos nisi.
            </p>
          </div>
          <div className="contract-2 mb-4 border-bottom border-top border-dark">
            <p className="py-2">
              <h2 className="fw-bold fs-5">KVKK Aydınlatma Metni</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              maiores accusamus dolorem. Vel architecto maiores dolorum vero
              fuga ipsam expedita, aperiam quis minus, provident, tempore
              aspernatur quasi ab. Ab cupiditate repudiandae obcaecati beatae
              quidem commodi, eius, non aspernatur eaque sit doloribus a ducimus
              voluptas et id iure. Qui magni iste blanditiis. Eius distinctio
              placeat, consequuntur soluta excepturi ipsum atque quibusdam,
              iusto nesciunt tempore consequatur, odio laboriosam similique
              eveniet ipsa corporis inventore quam commodi dolorum explicabo
              sapiente iste qui numquam quo? Provident perspiciatis veritatis
              recusandae facere autem eum illo nam qui accusamus aliquam ea
              magni quo temporibus nobis quam dolorem eius voluptatem, sed quos
              iste ullam aut at doloremque rem. Ab modi beatae, ipsa vitae
              voluptatum hic eaque autem excepturi eum provident asperiores
              temporibus vero corrupti, atque sapiente ut accusantium, placeat
              animi quibusdam officiis sunt veritatis est soluta? Sequi, aperiam
              corrupti harum eum vero praesentium corporis dolorum dolorem
              officiis iure, enim, sapiente voluptatum fugit cupiditate
              voluptates molestias exercitationem commodi similique debitis
              consequuntur facilis ut. Minima, iusto. Totam culpa libero,
              voluptas error enim aut soluta veritatis nobis ullam sint modi ad
              vitae dignissimos dolore doloremque explicabo odit consequatur.
              Dicta voluptates assumenda molestiae corporis recusandae at
              suscipit fugit eligendi ipsum, quod atque ad officiis ea porro
              necessitatibus id aliquam amet voluptatem iste optio, eos quam!
              Consectetur, animi hic debitis sunt quasi fuga mollitia voluptatum
              autem quis consequuntur! Recusandae nesciunt beatae consectetur
              iure cum harum minus aliquid dolorum vel aspernatur nulla
              molestias labore aliquam distinctio, quo corrupti, architecto
              porro autem maxime aut sed error debitis. Laboriosam minima
              consequatur ad, labore suscipit unde! Quos consequuntur eaque
            </p>
          </div>
        </div>
        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              name="userAgreement"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Kullanıcı sözleşmesini onaylıyorum.
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              name="kvkk"
            />
            <label class="form-check-label" for="flexCheckChecked">
              KVKK aydınlatma metnini onaylıyorum.
            </label>
          </div>
          <span
            className={`text-danger  mt-3 ${!validate ? "d-block" : "d-none"} `}
          >
            Başvuruyu tamamlamak için iki kutucuğu da onaylamanız gerekmektedir.
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
            className={`btn btn-dark px-4 ${validate ? "" : "disabled"} `}
          >
            Başvuruyu Tamamla
          </button>
        </div>
      </form>
    </>
  );
}
