"use server";

export const loginUser = async (email: string, password: string) => {
    try {
        const result = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        if (!result.ok) {
            const errorData = await result.json();
            return { success: false, message: errorData.message || "Invalid email or password" };
        }
        const data = await result.json();
        return { success: true};

    } catch (err) {
        console.log(err);
        return { success: false, message: "An error occurred. Please try again." };
    }
}