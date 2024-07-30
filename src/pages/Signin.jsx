import { useSignUp } from "../hooks/useSignUp";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Form, useActionData } from "react-router-dom";

import FormInput from "../components/FormInput";
import useLogin from "../hooks/useLogin";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("Email");
  let password = formData.get("Password");

  return { email, password };
};

function Signin() {
  let userSignin = useActionData();
  const { signinEmailAndPassword } = useLogin();

  useEffect(() => {
    if (userSignin) {
      signinEmailAndPassword(userSignin.email, userSignin.password);
    }
  }, [userSignin, signinEmailAndPassword]);

  const { signupWithGoogle, error } = useSignUp();

  return (
    <div className="signin-background">
      <div className="max-w-96 w-full text-center bg-black p-8 rounded shadow-md">
        <h2 className="font-bold text-4xl mb-10">Kirish</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <Form method="POST">
          <FormInput type="email" label="Email:" name="Email" />
          <FormInput type="password" label="Parol:" name="Password" />
          <div>
            <button className="btn btn-secondary w-full mb-3" type="submit">
              Yuborish
            </button>
            <button
              type="button"
              onClick={signupWithGoogle}
              className="btn btn-secondary w-full mb-5"
            >
              <FcGoogle className="text-3xl" />
              <span className="text-2xl">Google</span>
            </button>
            <p>
              <Link className="hover:text-violet-600" to="/signup">
                Hisobingiz yo'qmi? Ro'yxatdan o'tish
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signin;
