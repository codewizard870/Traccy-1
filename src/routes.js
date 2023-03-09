import React from "react";
import AboutUs from "./containers/AboutUs";
import BecomePart from "./containers/BecomePart";
import Home from "./containers/Home";
import HomeThree from "./containers/HomeThree";
import ImpactThroughTraccy from "./containers/ImpactThroughTraccy";
import ImpactThroughTraccyDetails from "./containers/ImpactThroughTraccyDetails";
import TraccyToken from "./containers/TraccyToken";
import InvestStep1 from "./containers/InvestForm/InvestStep1";
// Layout Types
import { authLayout, defaultaboutLayout, defaultdarkdetailsheaderLayout, defaultdarkheaderLayout, defaultLayout } from "./layouts";
import InvestStep2 from "./containers/InvestForm/InvestStep2";
import InvestStep3 from "./containers/InvestForm/InvestStep3";
import InvestStep4 from "./containers/InvestForm/InvestStep4";

// Route Views

export const rotues = [
  {
    path: "/",
    exact: true,
    layout: defaultLayout,
    component: () => <TraccyToken />,
  },
  {
    path: "/traccy-token",
    exact: true,
    layout: defaultLayout,
    component: () => <TraccyToken />
  },
  {
    path: "/about",
    layout: defaultaboutLayout,
    component: () => <AboutUs />
  },
  {
    path: "/home",
    layout: authLayout,
    component: () => <Home />
  },
  {
    path: "/home-subscription",
    layout: authLayout,
    component: () => <HomeThree />
  },
  {
    path: "/subscription",
    layout: authLayout,
    component: () => <HomeThree />
  },
  {
    path: "/become-part",
    layout: authLayout,
    component: () => <BecomePart />
  },
  {
    path: "/contact",
    layout: authLayout,
    component: () => <BecomePart />
  },
  {
    path: "/impact-through-traccy",
    layout: defaultdarkheaderLayout,
    component: () => <ImpactThroughTraccy />
  },
  {
    path: "/impact-through-traccy-details",
    layout: defaultdarkdetailsheaderLayout,
    component: () => <ImpactThroughTraccyDetails />
  },
  {
    path: "/invest-step1",
    exact: true,
    layout: defaultLayout,
    component: () => <InvestStep1 />
  },
  {
    path: "/invest-step2",
    exact: true,
    layout: defaultLayout,
    component: () => <InvestStep2 />
  },
  {
    path: "/invest-step3",
    exact: true,
    layout: defaultLayout,
    component: () => <InvestStep3 />
  },  
  {
    path: "/invest-step4",
    exact: true,
    layout: defaultLayout,
    component: () => <InvestStep4 />
  }
];
