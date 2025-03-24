import Wrapper from "../UI/Wrapper"
import MyClock from "./MyClock"

export default function MyClockWrap() {
  return (
    <div>
      <Wrapper mainWrap={<MyClock />} />
    </div>
  )
}
