import { IoHome } from "react-icons/io5";
import Navigate from "../00_Navigate/Navigate";

import '../00_Navigate/navigate.css';
import { useNavigate } from "react-router-dom";

export default function Wrapper({mainWrap, mainAlign}) {
    const navigate = useNavigate();
    const handlerGoBack = () => {
        navigate("/");
    };

    if(!mainAlign || mainAlign === '') {
        mainAlign = 'center';
    }

    return (
        <div>
            <div className="flex flex-col w-full min-h-screen mx-auto">
                <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200">
                    <p className="cursor-pointer" onClick={handlerGoBack}>React Practice</p>
                    <Navigate />
                    <p className="cursor-pointer" onClick={handlerGoBack}><IoHome /></p>
                </header>
                <main className={`grow w-full flex justify-center items-${mainAlign} overflow-y-auto my-3`}>
                    {mainWrap}
                </main>
                <footer className="flex justify-center items-center h-20 bg-black text-slate-100">
                    © 2025 RodRod. All rights reserved.
                </footer>
            </div>
        </div>
    );
}