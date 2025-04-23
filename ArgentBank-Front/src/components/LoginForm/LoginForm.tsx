import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/authentification/authSlice";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
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
            <form onSubmit={handleSubmit}>
                <div className="login-mail">
                    <label htmlFor="email">Email/</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Entrez votre Email"
                    />
                </div>
                <div className="login-password">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Entrez votre mot de passe"
                    />
                </div>
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <button type="submit">Connexion</button>
            </form>
        </div>
    );
};
export default LoginForm;
