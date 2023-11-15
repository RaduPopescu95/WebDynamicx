import React, { useState, useEffect } from "react";

import Head from "next/head";
import CustomDrawer from "../../../components/Dashboard/CustomDrawer";
import ProcessTable from "../../ProcessTable";

export default function index() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <CustomDrawer selectedItem={"Articole"}>
        <ProcessTable />
      </CustomDrawer>
    </>
  );
}
