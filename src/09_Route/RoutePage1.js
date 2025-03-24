import { useParams } from "react-router-dom"

export default function RoutePage1() {
    const item = useParams().item;
    const fruits = ['🍎', '🍌', '🍊', '🍋', '🫐', '🍒', '🍑', '🍓', '🍉', '🍈'];

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {/* <h1 className="text-2xl font-bold">RoutePage1</h1> */}
            <div className="w-full flex flex-col justify-start items-center text-base m-2 p-2">
                {item}
                {fruits.includes(item) ? ' : 과일입니다.' : ' : 과일이 아닙니다.'}
            </div>
        </div>
    )
}
