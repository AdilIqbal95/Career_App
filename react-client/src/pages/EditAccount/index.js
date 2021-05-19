import React from 'react';
import { UpdateAccForm } from '../../components';

const EditAccount = () => {

    return (
        <>
            <header>
                <h1>Edit Your Account</h1>
            </header>

            <main className="main-container" id="editaccount">
                <UpdateAccForm />
            </main>
        </>
    )
}

export default EditAccount;