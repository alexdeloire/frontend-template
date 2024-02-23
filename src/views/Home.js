import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {

    const { auth } = useAuth();

    return (
        <div className="content">
            <h1>HomePage</h1>
            <p>Welcome to our website</p>
            {auth?.accessToken ? 
                <div className="accueil-frame-info">
                    <p>Check out our content</p>
                    <Link to="/user-content" className="accueil-button">Content</Link>
                </div> : <div  className="accueil-frame-info">
                    <p>Log in to get started</p> 
                    <Link to="/login" className="accueil-button">Log in</Link>
                </div>
            }   
        </div>
    )
}

export default Home
