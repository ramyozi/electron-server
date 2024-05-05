import React, { useState } from 'react';
import Layout from '../components/Layout';

const PageContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/sendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Email envoyé avec succès !');
            setFormData({ name: '', email: '', message: '' });
        } else {
            alert('Échec de l\'envoi de l\'email.');
        }
    };

    return (
        <Layout title="Contactez-nous | Patientcare">
            <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
                <h1>Nous Contacter</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre Nom"
                        required
                        style={{ margin: '10px 0', padding: '10px' }}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre Adresse Email"
                        required
                        style={{ margin: '10px 0', padding: '10px' }}
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre Message"
                        required
                        style={{ height: '100px', margin: '10px 0', padding: '10px' }}
                    />
                    <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Envoyer le Message</button>
                </form>
            </div>
        </Layout>
    );
};

export default PageContact;
