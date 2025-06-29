import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import { loginUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const token = await loginUser({ email, password });
            localStorage.setItem("token", token);
            dispatch(loginSuccess(token));
            navigate("/Profil");
        } catch (error) {
            setErrorMessage("Email ou mot de passe invalide")
        }
    };


    return (
        <div className="login">
            <h2>Connexion</h2>
            <i className="fa fa-user-circle fa-2x"></i>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-mail">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                    />
                </div>
                <div className="login-password">
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Your password"
                    />
                </div>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <button className="login-button" type="submit">Connexion</button>
            </form>
        </div>
    );
};
export default LoginForm;
