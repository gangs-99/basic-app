import Wrapper from "../UI/Wrapper"
import Hello from "./Hello"

export default function HelloWrap() {
  return (
    <div>
      <Wrapper mainWrap={<Hello />} />
    </div>
  )
}
