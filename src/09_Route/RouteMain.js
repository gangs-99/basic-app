import { Routes, Route } from "react-router-dom";

import RouteHome from "./RouteHome";
import RouteNav from "./RouteNav";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";

export default function RouteMain() {
  const defaultNav = '/practice/route';

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <RouteNav defaultNav={defaultNav} />
      <Routes>
        <Route path="/" element={<RouteHome defaultNav={defaultNav} />} />
        <Route path="/p1/:item" element={<RoutePage1 />} />
        <Route path="/p2" element={<RoutePage2 />} />
      </Routes>
    </div>
  )
}