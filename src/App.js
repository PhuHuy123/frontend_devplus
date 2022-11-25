import "./style/App.scss";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "@app/pages/Loader";
import Admin from "@app/pages/Admin";
import Home from "@app/pages/Home";
import '@app/style/Crud.scss';
import '@app/pages/Admin/style.scss';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
