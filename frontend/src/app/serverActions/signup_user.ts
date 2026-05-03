

export const signupUser = async ( email: string, password: string, confirmPassword: string) => {
    try {
        const result = await fetch("http://localhost:3000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                confirmPassword                
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