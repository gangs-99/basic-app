import { Link } from "react-router-dom";
import '../index.css';

const styles = {
    listItem: {
        marginBottom: 10,
    },
    link: {
        textDecoration: "none",
        color: "black",
    },
};

const MainNavigation = () => {
    return (
        <div className="basicDiv">
            <h2>Basic App</h2>
            <ul>
                <li style={styles.listItem}><Link to="/practice" style={styles.link}>실습</Link></li>
            </ul>
        </div>
    );
};

export default MainNavigation;