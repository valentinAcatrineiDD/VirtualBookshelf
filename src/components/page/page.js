import "./page.scss";
import book1 from "./../../img/book-1.jpg";
import book2 from "./../../img/book-2.jpg";
import book3 from "./../../img/book-3.jpg";
import book4 from "./../../img/book-4.jpg";
import book5 from "./../../img/book-5.jpg";

const handleChange = (event) => {
  console.log(event.target.value);
};

const handleCkick = () => {
  console.log("element clicked");
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("form submitted");
};

const handleFocus = () => {
  console.log("field focused");
};

const handleBlur = () => {
  console.log("field blurred");
};

function Page({ pageTitle }) {
  return (
    <div id="page">
      <h1>{pageTitle}</h1>

      {/* start shelf 1 */}
      <div className="shelf">
        <h2 className="shelf-title">Fantasy</h2>
        <div className="shelf-list">
          {/* start book */}
          <div className="shelf-list_book">
            <img src={book1} alt={"Don't make me think"} />
            <div className="shelf-list_book_meta">
              <div className="shelf-list_book_meta-title">
                Don't Make Me Think
              </div>
              <div className="shelf-list_book_meta-author">
                Steve Krug, 2000
              </div>
              <div className="shelf-list_book_meta-rating">
                <span>4.5</span>/5
              </div>
            </div>
          </div>
          {/* end book */}

          {/* start book */}
          <div className="shelf-list_book">
            <img src={book2} alt={"Don't make me think"} />
            <div className="shelf-list_book_meta">
              <div className="shelf-list_book_meta-title">The Design</div>
              <div className="shelf-list_book_meta-author">
                Don Norman, 1988
              </div>
              <div className="shelf-list_book_meta-rating">
                <span>3.5</span>/5
              </div>
            </div>
          </div>
          {/* end book */}

          {/* start book */}
          <div className="shelf-list_book">
            <img src={book3} alt={"Don't make me think"} />
            <div className="shelf-list_book_meta">
              <div className="shelf-list_book_meta-title">
                Sprint: How to Solve
              </div>
              <div className="shelf-list_book_meta-author">
                Jake Knapp, 2000
              </div>
              <div className="shelf-list_book_meta-rating">
                <span>2.5</span>/5
              </div>
            </div>
          </div>
          {/* end book */}
        </div>
      </div>
      {/* end shelf 1 */}

      {/* start shelf 2 */}
      <div className="shelf">
        <h2 className="shelf-title">Programming</h2>
        <div className="shelf-list">
          {/* start book */}
          <div className="shelf-list_book">
            <img src={book4} alt={"Don't make me think"} />
            <div className="shelf-list_book_meta">
              <div className="shelf-list_book_meta-title">Learn UX</div>
              <div className="shelf-list_book_meta-author">
                Jeff Gothelf, 2016
              </div>
              <div className="shelf-list_book_meta-rating">
                <span>2.5</span>/5
              </div>
            </div>
          </div>
          {/* end book */}

          {/* start book */}
          <div className="shelf-list_book">
            <img src={book5} alt={"Don't make me think"} />
            <div className="shelf-list_book_meta">
              <div className="shelf-list_book_meta-title">
                The Road to React
              </div>
              <div className="shelf-list_book_meta-author">
                Steve Krug, 2000
              </div>
              <div className="shelf-list_book_meta-rating">
                <span>5.0</span>/5
              </div>
            </div>
          </div>
          {/* end book */}
        </div>
      </div>
      {/* end shelf 2 */}

      {/* start add form */}
      <hr />
      <h1 onClick={handleCkick}>Adauga o carte</h1>
      <form onSubmit={handleSubmit}>
        <div className="rendered-form">
          <div className="formbuilder-text form-group field-titlu">
            <label htmlFor="titlu" className="formbuilder-text-label">
              Titlu<span className="formbuilder-required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="titlu"
              access="false"
              id="titlu"
              required="required"
              aria-required="true"
              onChange={handleChange}
            />
          </div>
          <div className="formbuilder-text form-group field-autor">
            <label htmlFor="autor" className="formbuilder-text-label">
              Autor<span className="formbuilder-required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="autor"
              id="autor"
              required="required"
              aria-required="true"
            />
          </div>
          <div className="formbuilder-text form-group field-an">
            <label htmlFor="an" className="formbuilder-text-label">
              An<span className="formbuilder-required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="an"
              id="an"
              required="required"
              aria-required="true"
              maxLength="4"
            />
          </div>
          <div className="formbuilder-text form-group field-rating">
            <label htmlFor="rating" className="formbuilder-text-label">
              Rating<span className="formbuilder-required">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              name="rating"
              id="rating"
              required="required"
              aria-required="true"
              min="0.1"
              max="5.0"
              step="0.1"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div className="formbuilder-button form-group field-submit">
            <button
              type="submit"
              className="btn-default btn"
              name="submit"
              access="false"
              id="submit"
            >
              Adauga cartea
            </button>
          </div>
        </div>
      </form>
      {/* end add form */}
    </div>
  );
}

export default Page;
