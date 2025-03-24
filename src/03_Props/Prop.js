import SubWrapper from "../UI/SubWrapper";
import MyDiv1 from "./MyDiv1";

function Prop() {
    return (
        <SubWrapper mainWrap={<MyDiv1 />} />
    );
}

export default Prop;