import SubWrapper from "../UI/SubWrapper"
import MyRef from "./MyRef";

export default function MyRefWrap() {
  return (
    <div className="w-full">
      <SubWrapper mainWrap={<MyRef />} />
    </div>
  )
}
