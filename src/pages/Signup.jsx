import { useSignUp } from "../hooks/useSignUp";
import { FcGoogle } from "react-icons/fc";
import { Link, Form, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect, useState } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("Name");
  let photo = formData.get("Photo");
  let email = formData.get("Email");
  let password = formData.get("Password");

  return { name, photo, email, password };
}

function Signup() {
  let userSignup = useActionData();
  const { signupWithGoogle, signupWithEmailAndPassword, user, error } = useSignUp();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userSignup) {
      setLoading(true);
      signupWithEmailAndPassword(userSignup.name, userSignup.photo, userSignup.email, userSignup.password)
        .finally(() => setLoading(false));
    }
  }, [userSignup, signupWithEmailAndPassword]);

  return (
    <div className="signup-background">
      <div className="max-w-96 w-full text-center bg-black p-8 rounded shadow-md">
        <h2 className="font-bold text-4xl mb-10">Ro'yxatdan o'tish</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {loading ? (
          <div>Yuklanmoqda...</div>
        ) : (
          <Form method="post">
            <FormInput type="text" label="Ism:" name="Name" required />
            <FormInput type="url" label="Rasm URL:" name="Photo" required />
            <FormInput type="email" label="Email:" name="Email" required />
            <FormInput type="password" label="Parol:" name="Password" required minLength="6" />
            <div>
              <button className="btn btn-secondary w-full mb-3" type="submit">Yuborish</button>
              <button type="button" onClick={signupWithGoogle} className="btn btn-secondary w-full mb-5">
                <FcGoogle className="text-3xl" />
                <span className="text-2xl">Google</span>
              </button>
              <p><Link className="hover:text-violet-600" to="/signin">Ro'yxatdan o'tganmisiz? Kirish</Link></p>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Signup;
