import Wrapper from "../UI/Wrapper"
import Gallery from "./Gallery"

export default function GalleryWrap() {
  return (
    <div>
      <Wrapper mainWrap={<Gallery />} mainAlign='start' />
    </div>
  )
}
