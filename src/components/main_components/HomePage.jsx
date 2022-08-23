import React, { useState } from 'react';

import UserDetailComponent from './UserDetailComponent';


function HomePage() {
    const [userName, setUserName] = useState("");


    function handleSubmit(event) {
        event.preventDefault();

        const value = document.getElementById("name").value;
        setUserName(value);

    }

    return (
        <div id="homePage">
            <nav className='navbar'>
                <div className='logo'><div>GUF</div></div>
                <div className='nav-item'>
                    <div>ABOUT</div>
                </div>
            </nav>
            <main>
                <h1 id="heading">Welcome to Github User Finder!</h1>
                <p>
                    Want to find a person on github without signing in?
                    Just type in the username and watch the magic happen!
                </p>
                <p>New here? Don't worry and let us handle it for you.</p>

                <form onSubmit={handleSubmit}>
                    <input className='w-25 p-3' type="text"
                        placeholder='Enter github username here...'
                        id="name"
                    />
                    <button className='py-3 px-5' type='submit'>Search</button>
                    <h6 className={userName === "" ? "d-block text-danger" : "d-none text-danger"}
                        id="warning">
                        username is mandatory..!!
                    </h6>
                </form>

            </main>
            <UserDetailComponent _userName={userName} />
            <footer>&#169; {new Date().getFullYear()}</footer>
        </div>
    )
}

export default HomePage;