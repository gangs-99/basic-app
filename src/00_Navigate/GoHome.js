import './navigate.css';
import { useNavigate } from "react-router-dom";

export default function GoHome() {
    const navigate = useNavigate();
    const handlerGoBack = () => {
        navigate("/");
    };

    return (
        <div style={{textAlign: "right", padding: 5}}>
            <button className="goBack" onClick={handlerGoBack}>목록으로</button>
        </div>
    );
}