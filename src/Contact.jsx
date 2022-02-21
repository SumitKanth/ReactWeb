import React, {useState} from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        number: "",
        email: "",
        msg: ""
        
    })

    const InputEvent = (e) => {
        const {name, value} = e.target;

        setData((perVal) => {
          return {
            ...perVal,
            [name]: value
          }
        });
    }

    const formSubmit = (e) => {
      e.preventDefault();
      // alert("My name is "+ data.fullname+ ".My mobile number is "+ data.number+ " and email is "+ data.email+ ", Here is what I want to say "+ data.msg );
      alert(`My name is  ${data.fullname} .My mobile number is  ${data.number} and email is  ${data.email}, Here is what I want to say ${data.msg}`);
    }

  return (
    <>
      <div className="my-5 text-center">
        <h1>Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Full name
              </label>
              <input
                type="text"
                className="form-control"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent} 
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                name="number"
                value={data.number}
                onChange={InputEvent}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="Enter your e-mail"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                rows="3"
              ></textarea>
              <div className="col-12 my-3">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
