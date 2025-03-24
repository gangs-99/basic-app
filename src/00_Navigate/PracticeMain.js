import { Routes, Route } from "react-router-dom";

import PracticeNav from "./PracticeNav";
import Prop from "../03_Props/Prop";
import MyListWrap from "../04_Like/MyListWrap"
import MyRefWrap from "../07_MyRef/MyRefWrap";
import RouteMain from "../09_Route/RouteMain";
import RecoilProp from "../10_Recoil/RecoilProp";

export default function PracticeMain() {
    const defaultNav = '/practice';

    return (
      <div className="w-full h-full flex flex-col justify-start items-center">
        <PracticeNav defaultNav={defaultNav} />
        <Routes>
          <Route path="/" element={<Prop />} />
          <Route path="/like" element={<MyListWrap />} />
          <Route path="/myref" element={<MyRefWrap />} />
          <Route path="/route/*" element={<RouteMain />} />
          <Route path="/recoil" element={<RecoilProp />} />
        </Routes>
      </div>
    )
}
