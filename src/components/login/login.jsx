import React, { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useNavigate } from "react-router-dom";
import styles from "../../style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent. Please check your inbox.");
      setError("");
    } catch (error) {
      setError(error.message);
      setSuccess("");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-contact-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Login</span> to Cyber Ambassador Platform
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Welcome <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Back</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Login.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Access your account to continue participating in the Cyber Ambassador Program.
        </p>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <form className="flex flex-col gap-4 w-full px-6" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-md bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 rounded-md bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="mt-4 p-4 bg-blue-600 text-white rounded-md">Login</button>
          <button type="button" className="mt-4 p-4 bg-red-600 text-white rounded-md" onClick={handleGoogleLogin}>Login with Google</button>
          <button type="button" className="mt-4 p-4 bg-gray-600 text-white rounded-md" onClick={handlePasswordReset}>Reset Password</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
