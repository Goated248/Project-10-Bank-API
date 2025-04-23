export interface Login {
    email: string;
    password: string;
}

const BASE_URL : string = "http://localhost:3001/api/v1/user"; 

export const getToken = (): string | null => {
    return localStorage.getItem("token")
}

export const loginUser = async ({ email, password }: Login): Promise<string> => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password}),
    });

    if(!response.ok) {
        throw new Error("erreur lors de la connexion");
    }

    const data = await response.json();
    console.log("Login API response:", data);
    return data.body.token;
};

export const getUserProfil = async (token: string) => {
    const response = await fetch (`${BASE_URL}/profile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error ("Erreur lors de la récupérationi du profil");
    }

    const data = await response.json();
    return data.body;
    
};

