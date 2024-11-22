"use client";
import React, { memo } from "react";

const Login = memo((props) => {

  return (
    <div className="bg-rgba(215, 226, 247, 0.48) flex flex-col container mx-auto py-10 gap-6" key={"login"}>
      <div>
        <h3 className="text-xl font-semibold text-[#1e1b4b]">Login Page</h3>
        <p className="text-sm py-2 text-[#8c8baf]">
          You can manage your Login and Estimates here.
        </p>
      </div>
    </div>
  );
});

export default Login;
