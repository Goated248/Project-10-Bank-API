import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Transactions from "../../components/Transactions/Transactions";
import UserNameSetting from "../../components/UserNameSetting/UserNameSetting";
import "./Profil.css"
const ProfilPage = () => {

    return (
        <div>
            <Header />
            <main className="main-content">
                <UserNameSetting />
                <Transactions />
                <Footer />
            </main>
        </div>
    );
};

export default ProfilPage;