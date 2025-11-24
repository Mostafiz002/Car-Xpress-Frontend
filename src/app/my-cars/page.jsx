import React from "react";
import { PrivateRoute } from "@/provider/PrivateRoute";
const page = () => {
  return (
    <PrivateRoute>
      <div className="mt-20">my cars</div>
    </PrivateRoute>
  );
};

export default page;
