import React, {useState} from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        number: "",
        email: "",
        msg: ""
        
    })
  return (
    <>
      <div className="my-5 text-center">
        <h1>Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Full name
              </label>
              <input
                type="text"
                class="form-control"
                name="fullname"
                value={}
                onChange={InputEvent}
                placeholder="Enter your name"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone Number
              </label>
              <input
                type="number"
                class="form-control"
                name="phone"
                value={}
                onChange={InputEvent}
                placeholder="Enter your phone number"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={}
                onChange={InputEvent}
                placeholder="Enter your e-mail"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                name="msg"
                value={}
                onChange={InputEvent}
                rows="3"
              ></textarea>
              <div class="col-12 my-3">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
