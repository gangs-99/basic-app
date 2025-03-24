import Wrapper from "../UI/Wrapper"
import PracticeMain from "./PracticeMain"

export default function PracticeWrap() {
  return (
    <div>
      <Wrapper mainWrap={<PracticeMain />} mainAlign='start' />
    </div>
  )
}
