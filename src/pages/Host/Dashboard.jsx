import React from "react";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <>
      <Outlet />
      This is the dashboard
    </>
  );
};

export default Dashboard;
