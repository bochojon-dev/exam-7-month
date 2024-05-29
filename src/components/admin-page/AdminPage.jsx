"use client";
import React, { useEffect } from "react";
import "../admin-page/AdminPage.css";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  let router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("x-auth-token");
    if (!token) {
      router.push("/");
    }
  }, [router]);
  return (
    <div className="container">
      <div className="admin">
        <h3>Admin Panel</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          cupiditate inventore, deserunt magnam provident dolores blanditiis
          ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium
          quam deleniti id consequatur. Minus delectus officia unde quam nulla
          ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
          maiores suscipit. Dignissimos, ut repudiandae!
        </p>
        <button className="logout">Log out</button>
      </div>
    </div>
  );
};

export default AdminPage;
