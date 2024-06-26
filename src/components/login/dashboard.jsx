import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import styles from "../../style";
import Blog from "../../components/blog/blog";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <section className={`flex ${styles.paddingY} flex-col ${styles.flexCenter}`}>
      <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
        Dashboard
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Welcome to your dashboard. Manage your activities and stay updated with the latest information.
      </p>
      <button className="mt-4 p-4 bg-red-600 text-white rounded-md" onClick={handleLogout}>Logout</button>
    <Blog />
    </section>
  );
};

export default Dashboard;
