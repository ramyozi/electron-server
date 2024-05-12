import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../public/styles/SignInForm.module.css';
import {FaEnvelope, FaPen, FaUser} from "react-icons/fa";
import Image from "next/image";


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
            <div className={styles.container} style={
                {marginTop: '90px'}
            }>
                <div className={styles.logo}>
                    <Image src="/images/logo.jpg" alt="Logo" width={250} height={250}/>
                </div>
                <p className={styles.explanation}>
                    Utilisez ce formulaire pour nous contacter pour toute question ou préoccupation. Nous vous répondrons dans les plus brefs délais.
                </p>
                <form className={`${styles.form} ${styles.contactFormLarge}`} onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <FaUser className={styles.icon} size={20}/>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre Nom"
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.field}>
                        <FaEnvelope className={styles.icon} size={20}/>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre Adresse Email"
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.field}>
                        <FaPen className={styles.icon} size={20}/>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Votre Message"
                            required
                            className={styles.textarea}
                        />
                    </div>
                    <button type="submit" className={styles.button}>Envoyer</button>
                </form>
            </div>
        </Layout>
    );
};

export default PageContact;
