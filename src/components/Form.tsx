import {FC, useState } from "react";
import { Button } from "react-bootstrap";

interface FormProps {
    title: string;
    handleClick: (email:string,pass:string) => void;
}

const Form: FC<FormProps> = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
            <div className="account-wall">
                <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                        alt="" />
                <div className="form-signin">
                    <input type="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value) }
                            className="form-control" />
                    <input type="password"
                            value={pass}
                            placeholder="Password"
                            onChange={(e) => setPass(e.target.value) }
                            className="form-control" />
                    <Button className="btn-lg btn-primary btn-block" 
                        onClick={() => handleClick(email,pass)} >
                        {title}
                    </Button>
                </div>
            </div>
    )
}

export {Form};