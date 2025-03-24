import { useState, useEffect } from "react";

function MyClockTime() {
    const [ctime, setCtime] = useState(new Date());

    useEffect(() => {
        const tm = setInterval(() => {
            setCtime(new Date());
        }, 1000);

        return () => {
            clearInterval(tm);
        }
    }, []);

    return (
        <div className="text-center p-4 text-xl font-bold">
            현재 시각 : {ctime.toLocaleTimeString()}
        </div>
    );
}

export default MyClockTime;