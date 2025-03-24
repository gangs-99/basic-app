import TailButton from "../UI/TailButton"
import { useState, useRef, useEffect } from "react";

export default function MyRef() {
    const [sVal, setSVal] = useState(0);
    let cVal = 0;
    const rVal = useRef(0);

    const handleC = () => {
        cVal = cVal + 1;
        console.log('컴포넌트 변수: ', cVal);
    };
    const handleS = () => {
        setSVal(sVal + 1);
    };
    const handleR = () => {
        rVal.current = rVal.current + 1;
        console.log('Ref 변수: ', rVal.current);
    };

    useEffect(() => {
        console.log('State 변수: ', sVal);
    }, [sVal]);

    return (
        <div className="w-full flex justify-center items-center">
            <div className=" w-2/4 grid grid-cols-3 gap-4">
                <div className="text-orange-700 font-bold text-center text-xm">
                    컴포넌트 변수 : {cVal}
                </div>
                <div className="text-yellow-700 font-bold text-center text-xm">
                    State 변수 : {sVal}
                </div>
                <div className="text-lime-700 font-bold text-center text-xm">
                    Ref 변수 : {rVal.current}
                </div>
                <div>
                    <TailButton caption='컴포넌트 변수' bcolor='orange' handleClick={handleC} fsize='sm' />
                </div>
                <div>
                    <TailButton caption='State 변수' bcolor='yellow' handleClick={handleS} fsize='sm' />
                </div>
                <div>
                    <TailButton caption='Ref 변수' bcolor='lime' handleClick={handleR} fsize='sm' />
                </div>
            </div>
        </div>
    );
}
