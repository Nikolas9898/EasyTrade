import React from 'react';

export default class RegistrationForm extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <h1 style={{color: "grey"}}>Регистрация:</h1>
                </div>
                <p style={{color:"blue"}}>И-мейл:</p>
                <input
                    name="userEmail"
                    type="email"
                    required
                />
                    <p style={{color:"blue"}}>Парола:</p>
                <input
                    name="userPassword"
                    type="password"
                    required />
                <p style={{color:"blue"}}>Потвърди парола:</p>
                <input
                    name="confirmPassword"
                    type="password"
                    required />
                <p style={{color:"blue"}}>Име:</p>
                <input
                    name="firstName"/>
                <p style={{color:"blue"}}>Фамилия:</p>
                <input
                    name="lastName" />
                <p style={{color:"blue"}}>Държава:</p>
                    <input
                    name="country"
                    />

                <button className="btn-outline-warning">Регистриране</button>
            </form>
        );
    }
}