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
    component: lazy( () => import( "@app/pages/Admin/ImageBar/edit" ) ),
    //Common Concerns
  },
  {
    path: PRIVATE_ROUTE.CONCERNS,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/CommonConcerns")),
  },
  {
    path: PRIVATE_ROUTE.CONCERNS_CREATE,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/CommonConcerns/create")),
  },
  {
    path: PRIVATE_ROUTE.CONCERNS_EDIT,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/CommonConcerns/edit")),
  },
  //Road to be a Devplus
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
  //OurMainCamPus
  {
    path: PRIVATE_ROUTE.OUR_CAMPUS,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/OurMainCampus")),
  },
  {
    path: PRIVATE_ROUTE.OUR_CAMPUS_CREATE,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/OurMainCampus/create")),
  },
  {
    path: PRIVATE_ROUTE.OUR_CAMPUS_EDIT,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/OurMainCampus/edit")),
  },
  //AlumniSaying
  {
    path: PRIVATE_ROUTE.ALUMNI,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/AlumniSaying")),
  },
  {
    path: PRIVATE_ROUTE.ALUMNI_CREATE,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/AlumniSaying/create")),
  },
  {
    path: PRIVATE_ROUTE.ALUMNI_EDIT,
    title: "Admin DevPlus",
    component: lazy(() => import("@app/pages/Admin/AlumniSaying/edit")),
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
