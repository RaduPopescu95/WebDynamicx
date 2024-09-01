"use client";
const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="Numele tau*"
              name="name"
              required="required"
              data-error="Name is required."
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="number"
              placeholder="Numar telefon*"
              name="name"
              required="required"
              data-error="Name is required."
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="email"
              placeholder="Email*"
              name="email"
              required="required"
              data-error="Valid email is required."
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-15">
            <textarea
              placeholder="Mesajul tau*"
              name="message"
              required="required"
              data-error="Please,leave us a message."
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button
            type="submit"
            className="btn-thirteen w-100 fw-500 tran3s text-uppercase"
          >
            TRIMITE MESAJ
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}

      {/* <div className="fs-16 text-center mt-25">
        <span className="opacity-75">Been here before? </span>
        <a href="#" className="tx-dark fw-500">
          Check your query
        </a>
      </div> */}
    </form>
  );
};

export default Form;
