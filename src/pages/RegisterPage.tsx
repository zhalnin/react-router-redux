import { Link } from "react-router-dom"
import { SignUp } from "../components/SignUp"

const RegisterPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4 col-md-offset-4">
                    <h1>Register</h1>
                    <SignUp />
                    <p>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage