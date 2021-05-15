import React from "react";
import useForm from "../hooks/useForm";
import history from "../utils/history";

const logInAction = (values) => {
  fetch("https://reqres.in/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  }).then((response) => {
    const data = response.json();
    localStorage.setItem("access_token", data.token);
    history.push("/");
  });
};

const validateForm = () => {
  return {};
};
const Login = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    logInAction,
    validateForm
  );
  console.log(errors);
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="email"
          name="email"
          value={values.email || ""}
          placeholder="Email..."
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password || ""}
          placeholder="Password..."
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
