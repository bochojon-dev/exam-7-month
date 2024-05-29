"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const login1 = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("x-auth-token");
      if (!token) {
        router.replace("/admin/Login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default login1;
