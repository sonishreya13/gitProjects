import React from 'react';

function Contact() {
    return (
        <div>
            <h1 className='contact1'>Zaika-Flavours that make life delicious 😋</h1>
            <form className='form2'>
                <h2>Contact Us</h2>
                <label>
                    Name:
                    <input type="text" />
                </label>
                <br></br>
                <label>
                    Email:
                    <input type="email" />
                </label>
                <br></br>
                <label>
                    Message:
                    <input type="text" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default Contact;