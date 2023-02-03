import React from "react";
import { useForm } from "react-hook-form";

export default function Registration() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <header>Please enter the following information</header>
      <div>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            fetch("http://localhost:8080/api/v1/soa-user/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            })
              .then((res) =>
                console.log("this is the status code: " + res.status)
              )
              .catch((e) => console.log(e));
          })}
        >
          <input
            {...register("firstname", { required: true })}
            placeholder="First Name"
          />
          <input
            {...register("lastname", { required: true })}
            placeholder="Last Name"
          />
          <input
            {...register("email", { required: true })}
            placeholder="email"
          />
          <input
            {...register("password", { required: true })}
            placeholder="password"
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
