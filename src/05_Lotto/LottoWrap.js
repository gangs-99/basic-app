import Wrapper from "../UI/Wrapper"
import Lotto from "./Lotto"

export default function LottoWrap() {
  return (
    <div>
      <Wrapper mainWrap={<Lotto />} />
    </div>
  )
}
