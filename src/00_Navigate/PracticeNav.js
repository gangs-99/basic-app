import TailButton from "../UI/TailButton"
import { useNavigate } from "react-router-dom"

export default function PracticeNav({defaultNav}) {
    const navigate = useNavigate();

    return (
        <div className="w-10/12 grid grid-cols-5 m-5">
            <TailButton caption='Prop' bcolor='blue' handleClick={() => navigate(defaultNav)} />
            <TailButton caption='Like' bcolor='blue' handleClick={() => navigate(defaultNav + '/like')} />
            <TailButton caption='MyRef' bcolor='blue' handleClick={() => navigate(defaultNav + '/myref')} />
            <TailButton caption='Route' bcolor='blue' handleClick={() => navigate(defaultNav + '/route')} />
            <TailButton caption='Recoil' bcolor='blue' handleClick={() => navigate(defaultNav + '/recoil')} />
        </div>
    )
}