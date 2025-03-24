import Wrapper from "../UI/Wrapper"
import Traffic from "./Traffic"

export default function TrafficWrap() {
  return (
    <div>
      <Wrapper mainWrap={<Traffic />} mainAlign='start' />
    </div>
  )
}
