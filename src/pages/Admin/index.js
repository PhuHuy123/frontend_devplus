import SideBar from "@app/components/Admin/SideBar";
import Navbar from "@app/components/Admin/Navbar";
import './style.scss';
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PRIVATE_ROUTE } from "@app/route.constants";
import Index from "./Home";
import Loader from "@app/pages/Loader";

import Title from "@app/components/Title";

const privateRoutes = [
  {
    path: PRIVATE_ROUTE.BE_A_DEVPLUS,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/BeADevPlus")),
  },
  {
    path: PRIVATE_ROUTE.BE_A_DEVPLUS_CREATE,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/BeADevPlus/create")),
  },
  {
    path: PRIVATE_ROUTE.BE_A_DEVPLUS_EDIT,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/BeADevPlus/edit")),
  },
  {
    path: PRIVATE_ROUTE.EDU_PROGRAM,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/EduProgram")),
  },
  {
    path: PRIVATE_ROUTE.EDU_PROGRAM_CREATE,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/EduProgram/create")),
  },
  {
    path: PRIVATE_ROUTE.EDU_PROGRAM_EDIT,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/EduProgram/edit")),
  },
  {
    path: PRIVATE_ROUTE.IMAGE_SLIDERS,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/ImageBar")),
  },
  {
    path: PRIVATE_ROUTE.IMAGE_SLIDERS_CREATE,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/ImageBar/create")),
  },
  {
    path: PRIVATE_ROUTE.IMAGE_SLIDERS_EDIT,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/ImageBar/edit")),
  },
];
function Admin() {
  return (
    <div className="row">
      <SideBar />
      <div className="col-10 right-content">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={ <Index/>} />
            {privateRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <Title title={route.title}>
                    <route.component />
                  </Title>
                }
              />
            ))}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default Admin;
