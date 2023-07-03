import React from "react";

import AdminCard from "../../Card/Card";
import NavigateDate from "../../Common/NavigateDate";
import Searchbar from "../Searchbar/Searchbar";

const DashboardSection = () => {
  return (
    <div className="">
<Searchbar/>
  <hr />
      <AdminCard />
      <NavigateDate />
    </div>
  );
};

export default DashboardSection;
