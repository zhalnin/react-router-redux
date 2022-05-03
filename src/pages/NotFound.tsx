import { Link } from "react-router-dom";

const NotFound = () => {

    return (
        <div>
            <h1>404</h1>
            <p className="p-notfound">
                <Link to="/">Go to Home</Link>
            </p>
        </div>
    )
}

export default NotFound;