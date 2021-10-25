import React from 'react';
import './styles.css';


function ContactPage() {
    return <div className="root">
        <h1>ContactPage</h1>
            <div className="map-frame">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.042096807901!2d24.698791815858172!3d48.91459020470167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c13f3e2cfaa9%3A0xde33c2341e09d861!2sPrykarpat%C2%B7s%CA%B9kyy%20Natsional%CA%B9nyy%20Universytet!5e0!3m2!1sen!2sua!4v1635174252361!5m2!1sen!2sua"
                    width="600" height="450" allowFullScreen="" loading="lazy" className="map"/>
            </div>
    </div>;
}

export default ContactPage;
