import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import './uthe.css'
function Authe() {
  const [clicked, setClicked] = useState(true);
  const signUp = () => {
    setClicked(false);
  };
  const signIn = () => {
    setClicked(true);
  };
  // form validation rules
  const validationSchema = Yup.object().shape({
    number: Yup.string().required("Number kiriting"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    lastName: Yup.string().required("Ismingizni kiriting"),
    firstName: Yup.string().required("familiyangizni kiriting"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    alert(JSON.stringify(data, null, 10));
    return false;
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          {clicked ? (
            <div class="row">
              <div class="col-lg-3 col-md-2"></div>
              <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-form">
                  <div class="col-lg-12 login-form">
                    <div>
                      <div class="form-group">
                        <label class="form-control-label">USERNAME</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">PASSWORD</label>
                        <input type="password" class="form-control" />
                      </div>

                      <div class="col-lg-12 loginbttm">
                        <div class="col-lg-6 login-btm login-text"></div>
                        <div class="col-lg-6 login-btm login-button">
                          <button type="submit" class="btn btn-outline-primary">
                            LOGIN
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
              </div>
              <button onClick={signUp}>Ruyhatdan utish</button>
            </div>
          ) : (
            <div>
              <div className="form-row">
                <h2>Ruyhatdan utish</h2>
                <div className="form-group col-md-6">
                  <label>Number</label>
                  <input
                    className="form-control"
                    name="number"
                    type="text"
                    {...register("number")}
                    className={`form-control ${
                      errors.number ? "is-invalid" : ""
                    }`}
                    // required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
                    {...register("password")}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label>Confirm Password</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.confirmPassword?.message}
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label> Ismingizni Kiriting</label>
                  <input
                    className="form-control"
                    name="firstname"
                    type="text"
                    // required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Familiyangizni kiriting</label>
                  <input
                    className="form-control"
                    name="lastname"
                    type="text"

                    // required
                  />
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-1">
                  Register
                </button>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="btn btn-secondary"
                >
                  Reset
                </button>
              </div>
              <button onClick={signIn}>Kirish</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export { Authe };
