import Wrapper from "../UI/Wrapper"
import MyRefAdd from "./MyRefAdd"

export default function MyRefAddWrap() {
  return (
    <div>
      <Wrapper mainWrap={<MyRefAdd />} />
    </div>
  )
}
