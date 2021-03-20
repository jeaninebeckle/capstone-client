import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import './Auth.scss'

export const Register = () => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const displayName =  useRef()

    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()

        if (passwordCheck(password, verifyPassword)) {
            const newUser = {
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "password": password.current.value,
                "username": email.current.value,
                "is_staff": true,
                "display_name": displayName.current.value,
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(res => {
                if ("token" in res) {
                    localStorage.setItem("journey_token", res.token)
                    localStorage.setItem( "journey_user_id", res.user_id )
                    history.push("/")
                }
            })
        }
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--register" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <div className="field-container">
                    <div className="full-name">
                        <fieldset>
                            <input ref={firstName} type="text" name="firstName" className="register-form-control" placeholder="First name" required autoFocus />
                        </fieldset>
                        <fieldset>
                            <input ref={lastName} type="text" name="lastName" className="register-form-control" placeholder="Last name" required />
                        </fieldset>
                        <fieldset>
                            <input ref={email} type="email" name="email" className="register-form-control" placeholder="Email address" required />
                        </fieldset>
                    </div>
                    <div className="password-div">
                        <fieldset>
                            <input ref={password} type="password" name="password" className="register-form-control" placeholder="Password" required />
                            <p style={{ fontSize: '.8em', fontWeight: 'bold', padding: '0' }}><em> Minimum eight characters, at least one uppercase letter, one lowercase letter and one number </em></p>
                        </fieldset>
                        <fieldset className="verify-password">
                            <input ref={verifyPassword} type="password" name="verifyPassword" className="register-form-control" placeholder="Verify password" required />
                        </fieldset>
                        <fieldset>
                            <input type="text" ref={displayName} name="displayName" className="register-form-control" placeholder="Display name" required />
                        </fieldset>
                        <fieldset style={{
                            textAlign: "center"
                        }}>
                        <p>Please record your email address and password in a secure location!</p>
                            <button className="login-button" type="submit">Register</button>
                        </fieldset>
                    </div>
                </div>
            </form>
          <div className="empty-footer"></div>
        </main>
    )
}

const passwordCheck = (password, verifyPassword) => {

    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (password.current.value === verifyPassword.current.value) {
        if (password.current.value.match(regex)) {
            return true;
        }
        else {
            return alert("Password requires a minimum of eight characters, at least one uppercase letter, one lowercase letter and one number")
        }
    }

    else {
        return alert("Passwords do not match.");
    }
}
