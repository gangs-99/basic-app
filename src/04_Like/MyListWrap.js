import SubWrapper from "../UI/SubWrapper"
import MyList from "./MyList";

export default function MyListWrap() {
    return (
        <div>
          <SubWrapper mainWrap={<MyList />} />
        </div>
      );
}