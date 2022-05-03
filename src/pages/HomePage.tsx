import { useAppDispatch } from "hooks/redux-hooks";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const {isAuth, email} = useAuth();

    return isAuth ? ( 
        <div>
            <h1>Welcome</h1>

            <Button onClick={() => dispatch(removeUser())} >
                Log out from {email}
            </Button>
        </div>
    ) : (
        <Navigate  to="/login" />
    )
}

export default HomePage