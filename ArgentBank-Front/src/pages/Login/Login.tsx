import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";
import logo from "../../assets/img/argentBankLogo.png";
import Footer from "../../components/Footer/Footer";

const LoginPage = () => {

    return (
        <div className="login-page">
           <img className="logo" src={logo} alt="Argent Bank logo" /> 
            <LoginForm />
            <Footer />
        </div>
    );
};

export default LoginPage;