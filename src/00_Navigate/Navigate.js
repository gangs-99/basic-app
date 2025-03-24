import { Link } from "react-router-dom";
import './navigate.css';

const styles = {
    ulItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.875rem",
        lineHeight: "1.25rem"
    }
};

const Navigation = () => {
    return (
        <div className="basicDiv">
            <div>
                <ul style={styles.ulItem}>
                    <li className="listItem"><Link to="/clock">Clock</Link></li>
                    <li className="listItem"><Link to="/lotto">Lotto</Link></li>
                    <li className="listItem"><Link to="/traffic">Traffic</Link></li>
                    <li className="listItem"><Link to="/myrefadd">Add</Link></li>
                    <li className="listItem"><Link to="/gallery">Gallery</Link></li>
                    <li className="listItem"><Link to="/practice">Practice</Link></li>
                    <li className="listItem"><Link to="/rest">Rest</Link></li>
                    <li className="listItem"><Link to="/axios">Axios</Link></li>
                    {/* <li className="listItem"><Link to="/practice/prop">Prop</Link></li>
                    <li className="listItem"><Link to="/practice/like">Like</Link></li>
                    <li className="listItem"><Link to="/practice/myref">My Ref</Link></li>
                    <li className="listItem"><Link to="/practice/route">Route</Link></li> */}
                </ul>
            </div>
        </div>
    );
};

export default Navigation;