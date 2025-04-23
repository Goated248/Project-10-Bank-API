import { getUserProfil } from "../../api/auth";
import { useEffect, useState } from "react";

const UserNameSetting = () => {
    const token = localStorage.getItem("token");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                if (!token) return;
                const data = await getUserProfil(token);
                setFirstName(data.firstName);
                setLastName(data.lastName)
            } catch (error) {
                setError("Erreur lors de la récupération des données");
            } finally {
                setLoading(false);
            }
        };
        fetchUser()
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

    }

    

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;
    
    return (
        <div className="User">
            <h2>Welcome back</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="firstname"
                    id="firstname"
                    value={firstName}
                    placeholder={firstName}
                    readOnly
                />
                <input
                    type="lastname"
                    id="lastname"
                    value={lastName}
                    placeholder={lastName}
                    readOnly
                />
                <button type="submit">Save</button>
                
            </form>
        </div>
    );
};


export default UserNameSetting