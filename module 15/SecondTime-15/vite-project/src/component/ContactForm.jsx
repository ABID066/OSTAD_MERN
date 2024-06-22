const status = true
const ContactForm = () => {
    return (
        <div>

            <input/>
            <br/><br/>
            <button>Submit</button>
            <br/><br/>
            #Using Logical And And
            <h1>Footer Login status using</h1>
            {status && <button>LogOUT From ContactForm</button>}
            <br/><br/>
        </div>
    );
};

export default ContactForm;