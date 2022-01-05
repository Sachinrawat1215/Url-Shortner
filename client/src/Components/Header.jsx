import React from 'react'

const Header = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    ShrinkIt
                </div>
                <div className="other-link">
                    <ul>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Pricing</a></li>
                    </ul>
                </div>
                <div className="login-signup">
                    <div className="login"><a href="./login.jsx">Login</a></div>
                    <button>Sign Up</button>
                </div>
            </header>
        </div>
    )
}

export default Header;
