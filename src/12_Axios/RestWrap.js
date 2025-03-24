import Wrapper from "../UI/Wrapper"
import Rest from "./Rest"

export default function RestWrap() {
  return (
    <div>
      <Wrapper mainWrap={<Rest />} mainAlign='start' />
    </div>
  )
}
