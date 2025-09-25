"use client";

import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";

interface ILogin {
  email: string;
  password: string;
}

const LoginSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Format email salah")
    .required("Email harus diisi"),
  password: Yup.string()
    .trim()
    .min(5, "Password minimal 5 karakter")
    .required("Password harus diisi"),
});

export default function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const initialValues: ILogin = { email: "", password: "" };

  const login = async (values: ILogin) => {
    try {
      const req = await fetch(
        `https://evidentbeginner-us.backendless.app/api/data/user?where=email%3D'${values.email}'%20and%20password%3D'${values.password}'`
      );

      const res = await req.json();

      if (res.length > 0) {
        enqueueSnackbar("Login Success", { variant: "success" });
      } else {
        enqueueSnackbar("Login Failed", { variant: "error" });
      }
    } catch (err) {
      if (err instanceof Error) {
        enqueueSnackbar(err.message, { variant: "error" });
      } else {
        console.log("Unknown Error", err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[80px] gap-6">
      <h1 className="text-4xl">LOGIN PAGE</h1>
      <Formik<ILogin>
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => login(values)}
      >
        {(formik: FormikProps<ILogin>) => {
          return (
            <Form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                  className="border border-black p-2 rounded-sm w-[400px]"
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="text-red-500 text-[12px]">
                    *{formik.errors.email}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label>Password</label>
                <input
                  className="border border-black p-2 rounded-sm w-[400px]"
                  type="text"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <span className="text-red-500 text-[12px]">
                    *{formik.errors.password}
                  </span>
                )}
              </div>
              <button
                className="border border-black p-2 rounded-sm"
                type="submit"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
