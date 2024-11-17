import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { name: 'Big Data & Analytics', img: 'https://plus.unsplash.com/premium_photo-1661876806982-61d04a531d8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwZGF0YXxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Consultancy', img: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'HR & Staffing', img: 'https://media.istockphoto.com/id/1434737732/photo/partnership-arms-crossed-and-teamwork-with-two-business-people-standing-together-in-corporate.jpg?s=612x612&w=0&k=20&c=CG3Ke9UAf8UERf8yhGMb4QLSJcUMab7Ry9Wo5KP86Qc=' },
    { name: 'Cybersecurity', img: 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Sustainability', img: 'https://images.pexels.com/photos/29360305/pexels-photo-29360305/free-photo-of-sunlit-leaves-in-a-tranquil-forest-setting.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Cloud', img: 'https://images.pexels.com/photos/5475760/pexels-photo-5475760.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Metaverse', img: 'https://images.pexels.com/photos/7562130/pexels-photo-7562130.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Consultancy', img: 'https://images.pexels.com/photos/12903143/pexels-photo-12903143.jpeg?auto=compress&cs=tinysrgb&w=600' },

  ];

  return (
    <section className="services">
      <h2>Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.img} alt={service.name} />
            <div className="overlay">
              <h3>{service.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
