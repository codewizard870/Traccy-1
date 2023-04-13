import React from "react";
import AboutUs from "./containers/AboutUs";
import BecomePart from "./containers/BecomePart";
import Home from "./containers/Home";
import HomeThree from "./containers/HomeThree";
import ImpactThroughTraccy from "./containers/ImpactThroughTraccy";
import ImpactThroughTraccyDetails from "./containers/ImpactThroughTraccyDetails";
import TraccyToken from "./containers/TraccyToken";
// Layout Types
import { authLayout, defaultLayout, defaultheaderLayout, defaultWhite } from "./layouts";

import Invest from "./containers/Invest";
import Library from "./containers/Library";
import FlyOut from "./containers/ImpactThroughTraccyDetails/FlyOut";

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
    layout: defaultLayout,
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
    layout: defaultheaderLayout,
    component: () => <BecomePart />
  },
  {
    path: "/contact",
    layout: authLayout,
    component: () => <BecomePart />
  },
  {
    path: "/impact-through-traccy",
    layout: defaultWhite,
    component: () => <ImpactThroughTraccy />
  },
  {
    path: "/impact-through-traccy-details/:index/:pIndex",
    layout: defaultWhite,
    component: () => <ImpactThroughTraccyDetails />
  },
  {
    path: "/invest",
    exact: true,
    layout: defaultheaderLayout,
    component: () => <Invest />
  },
  {
    path: "/library",
    exact: true,
    layout: defaultheaderLayout,
    component: () => <Library />
  },
  {
    path: "/impact-through-traccy-details/flyout",
    layout: defaultWhite,
    component: () => <FlyOut />
  }
];
