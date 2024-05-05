import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import {FaEnvelope, FaFacebook, FaGlobe, FaLinkedin, FaPhone, FaTwitter} from "react-icons/fa";
import {BrowserWindow} from "electron";


const AboutPage = ({ members }) => {
    const handleClick = (link) => {
           };


    return (
        <Layout title="À Propos | Patientcare">
            <div style={{ padding: '20px', textAlign: 'center', width: '70%', justifyContent: 'center', margin: '0 auto', alignItems: 'center' }}>
                <h1>À propos de Patientcare</h1>
                <p style={{ fontSize: '18px', margin: '20px 0' }}>
                    Patientcare est une application de bureau innovante développée par des étudiants,
                    conçue pour gérer les dossiers médicaux des patients en Algérie. Chaque patient
                    se voit attribuer un code QR unique qui facilite l'accès rapide à ses informations médicales
                    par les infirmières et le personnel médical à l'hôpital.
                </p>
                <p style={{ fontSize: '18px', margin: '20px 0' }}>
                    L'application permet une lecture rapide du code QR du patient dès son arrivée,
                    garantissant un accès instantané et sécurisé à son dossier médical. Cela simplifie
                    considérablement le processus de consultation et améliore l'efficacité des soins.
                </p>
                <p style={{ fontSize: '18px', margin: '20px 0' }}>
                    Nous sommes les premiers à lancer une telle initiative en Algérie, avec l'ambition
                    de révolutionner le système de gestion des dossiers médicaux dans le pays.
                    Notre vision est de rendre les consultations médicales plus fluides et moins stressantes
                    pour les patients et le personnel soignant.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                    <Image src="/images/5.jpg" alt="Patientcare QR Code Scanning" width={300} height={200} />
                    <Image src="/images/4.jpg" alt="Patientcare System" width={300} height={200} />
                    <Image src="/images/1.jpg" alt="Medical Professional Using Patientcare" width={300} height={200} />
                </div>
            </div>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Notre Équipe</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '10px', width: '70%', margin: '0 auto' }}>
                {members.map(member => (
                    <div key={member.id} style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '20px', margin: '10px', textAlign: 'center' }}>
                        <img src={`/images/${member.image}`} alt={`${member.firstName} ${member.lastName}`} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
                        <div style={{ marginBottom: '10px' }}>
                            <div>{member.firstName} {member.lastName}</div>
                            <div>{member.role} - {member.university}, {member.masters}</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            {Object.entries(member.socialMedia).map(([platform, link]) => (
                                <a key={platform} onClick={() => handleClick(link)} style={{
                                    color: '#007bff',
                                    textDecoration: 'none',
                                    fontSize: '24px',
                                    cursor: 'pointer'
                                }}>
                                    {platform === 'twitter' && <FaTwitter />}
                                    {platform === 'linkedin' && <FaLinkedin />}
                                    {platform === 'facebook' && <FaFacebook />}
                                    {platform === 'website' && <FaGlobe />}
                                    {platform === 'email' && <FaEnvelope />}
                                    {platform === 'phone' && <FaPhone />}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    // Charger les données des membres à partir de members.json
    const membersData = await import('../public/data/members.json');
    const members = membersData.default;
    return { props: { members } };
}

export default AboutPage;
