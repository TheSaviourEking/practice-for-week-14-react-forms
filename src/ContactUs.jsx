import { useState } from "react";

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        // Create a new object for the contact us information.
        const contactUsInformation = {
            name, email, phone, submittedOn: new Date()
        };
        // Ideally, we'd persist this information to a database using a RESTful API.
        // For now, though, just log the contact us information to the console.
        console.log(contactUsInformation);

        setName('');
        setEmail('');
        setPhone('');
    }
    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' value={name} onChange={(e) => setName(() => setName(e.target.value))} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' type='text' value={email} onChange={(e) => setEmail(() => setEmail(e.target.value))} />
                </div>
                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input id='phone' type='text' value={phone} onChange={(e) => setPhone(() => setPhone(e.target.value))} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};
export default ContactUs;
