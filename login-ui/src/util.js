export const login = async (email, password) => {

    try {
        const data = { email, password };
        fetch("http://localhost:3000/users/login", {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            console.log(response); // parses JSON response into native JavaScript objects
        });


    } catch (error) {
        console.log({ error })
    }
}

const forgotPassword = () => {

}

