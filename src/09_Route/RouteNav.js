import TailButton from "../UI/TailButton"
import { useNavigate } from "react-router-dom"

export default function RouteNav({defaultNav}) {
    const navigate = useNavigate();

    return (
        <div className="w-2/12 m-5">
            <TailButton caption='RouteHome' bcolor='lime' handleClick={() => navigate(defaultNav)} />
            {/* <TailButton caption='Page1' bcolor='lime' handleClick={() => navigate(defaultNav + '/p1/🍎')} />
            <TailButton caption='Page2' bcolor='lime' handleClick={() => navigate(defaultNav + '/p2')} /> */}
        </div>
    )
}
