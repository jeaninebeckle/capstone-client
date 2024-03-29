import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.scss"


export const Login = () => {
    const email = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()
    const history = useHistory() 

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("https://lmv-journey.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem( "journey_token", res.token )
                    localStorage.setItem( "journey_user_id", res.user_id )
                    history.push("/tutoring-signup")
                    window.location.reload()
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section className="login-section">
                <form className="form--login" onSubmit={handleLogin}>
                    <h2>Please log in to access the tutoring signup</h2>
                    <div className="login-field-container">
                    <fieldset>
                        <input ref={email} type="email" id="email" className="login-form-control"  placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <input ref={password} type="password" id="password" className="login-form-control"  placeholder="Password" required />
                    </fieldset>
                    <fieldset>
                        <button className="login-button" type="submit">Submit</button>
                    </fieldset>
                    </div>
                </form>
            </section>
                <section className="register-link">
                    <Link to="/register" className="link--register">Click here to register a new account.</Link>
                </section>
        </main>
    )
}
