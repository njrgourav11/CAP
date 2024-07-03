import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import styles from "../../style";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const handlePostBlog = () => {
    navigate("/post");
  };

  const handleDownloads = () => {
    navigate("/downloads");
  };

  return (
    <section className={`flex ${styles.paddingY} flex-col ${styles.flexCenter}`}>
      <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
        Dashboard
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Welcome to your dashboard. Manage your activities and stay updated with the latest information.
      </p>
      <div className="mt-4 flex space-x-4">
        <button className="p-4 bg-red-600 text-white rounded-md" onClick={handleLogout}>Logout</button>
        <button className="p-4 bg-blue-600 text-white rounded-md" onClick={handlePostBlog}>Post Blog</button>
        <button className="p-4 bg-green-600 text-white rounded-md" onClick={handleDownloads}>Downloads</button>
      </div>
    </section>
  );
};

export default Dashboard;
