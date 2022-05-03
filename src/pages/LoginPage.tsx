import { Link } from "react-router-dom"
import { Login } from "../components/Login"

const LoginPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h1>Login</h1>
                    <Login />
                    <p>
                        Or <Link to="/register">register</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage