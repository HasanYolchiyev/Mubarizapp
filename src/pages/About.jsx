import React, { useState, useEffect } from 'react';
import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        imageUrl: "https://scontent.fgyd3-1.fna.fbcdn.net/v/t39.30808-6/348595944_692077599583900_7133837094906289132_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aKB8myVZ0tkQ7kNvgFWYyU2&_nc_ht=scontent.fgyd3-1.fna&oh=00_AYBa20WF1OkocqjaHlJGRbjDxOiprwn6-W5aRQQzVHUj7A&oe=666F816B",
        phone: "+994502337707"
    },
    {
        imageUrl: "https://barassociation.az/uploads/lawyers/WhatsApp%20Image%202023-05-16%20at%2013.37.471684237306.jpeg",
        phone: "+994515628942"
    },
    {
        imageUrl: "https://scontent.fgyd3-1.fna.fbcdn.net/v/t39.30808-6/412859703_784908823634110_1259724955488322627_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7qWp_iDggpQQ7kNvgHjaLga&_nc_ht=scontent.fgyd3-1.fna&oh=00_AYCAbT1YgBq3Tv0yWxXebmWtqUu9twGqbu_DHOjD2ORbeg&oe=666F88A5",
        phone: "+994502337707"
    }
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000); // 3 saniyede bir değişir
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about-section">
            <img className="about-img" src={data[currentIndex].imageUrl} alt="Mübariz Xalid oğlu" />
            <div className='textabo'>
                <h2 className='tojo'>Hakkında</h2>
                <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Nəsimi rayonu, Asif Məhərrəmov küçəsi 15</h3>
                <h3><FontAwesomeIcon icon={faPhone} /> {data[currentIndex].phone}</h3>
                <h3><FontAwesomeIcon icon={faEnvelope} /> mhalidoglu@yahoo.com</h3>
                <p>Fəaliyyət göstərdiyi vəkil qurumu: Sirius Vəkil Bürosu</p>
                <p>Bildiyi xarici dillər: Xarici dil biliyi yoxdur</p>
                <p>Vəkillik fəaliyyətinin müddəti: 6 il</p>
            </div>
        </section>
    );
}

export default About;
