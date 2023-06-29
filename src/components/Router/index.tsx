import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const Users = lazy(() => import(/* webpackChunkName: "Users" */ "pages/Users"));
const User = lazy(() => import(/* webpackChunkName: "User" */ "pages/User"));

const Router = () => {
  return (
    <>
      <Suspense fallback={<p>Loading ....</p>}>
        <Routes>
          <Route index path="/users" element={<Users />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="*" element={<Navigate replace to="/users" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
