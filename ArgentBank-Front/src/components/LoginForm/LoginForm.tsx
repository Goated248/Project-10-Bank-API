import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const LoginForm = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    }


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
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder="Entrez votre mot de passe"
                        />
                </div>
                <button type="submit">Connexion</button>
            </form>
        </div>
    );
};
export default LoginForm;
