import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Layout/Navbar";

import MainUserContent from "./MainUserContent";
import UserSidenav from "./UserSidenav";

const UserDetails = () => {
  const { id } = useParams();

  return (
    <div className="dashboard user-details">
      <Navbar />

      <div className="row ">
        <section className="col-lg-3 col-md-6 col-sm-12">
          <UserSidenav />
        </section>
        <section className="col-lg-9  col-md-12 col-sm-12 container">
          <MainUserContent id={id} />
        </section>
      </div>
    </div>
  );
};

export default UserDetails;
