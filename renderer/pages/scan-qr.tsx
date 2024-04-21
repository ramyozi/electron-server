// pages/scan-qr.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from "../components/UI/modal";
import {calculateAge} from "../utils/sample-api-patients";
import {dataArray} from "../utils/sample-api-patients";
import Layout from "../components/Layout";

const ScanQRPage = () => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [patient, setPatient] = useState(null);
    const [isScanning, setIsScanning] = useState(true);  // New state to handle scanning status

    const simulateScan = () => {
        setIsScanning(false);  // Change scanning status
        const scannedData = { "id": "106" };  // Simulated scan result
        const foundPatient = dataArray.find(p => p.idPatient.toString() === scannedData.id);
        if (foundPatient) {
            setPatient(foundPatient);
            setShowModal(true);
        } else {
            alert('Patient not found.');
        }
    };

    const viewPatientProfile = () => {
        setShowModal(false);
        router.push(`/patient/${patient.idPatient}`);
    };

    const cancelAction = () => {
        setShowModal(false);
        setIsScanning(true);  // Reset scanning status
    };

    return (
        <Layout title="Scanner le qr code" >
            <h1>Scanner le QR Code</h1>
            {isScanning ? (
                <>
                    <img src="/images/scanning.gif" alt="Scanning..."
                         style={{width: '100%', maxWidth: '200px'}}/>
                    <button onClick={simulateScan}>Simuler le Scan</button>
                </>
            ) : (
                showModal && patient && (
                    <Modal>
                        <p>Voulez-vous voir le dossier du patient ou annuler?</p>
                        <p>{patient.firstName} {patient.lastName} ({calculateAge(patient.dateOfBirth)} ans)</p>
                        <img src="/images/qr-code.png" alt="QR Code" style={{width: '100px'}}/>
                        <button onClick={viewPatientProfile}>Voir le dossier</button>
                        <button onClick={cancelAction}>Annuler</button>
                    </Modal>
                )
            )}
        </Layout>
    );
};

export default ScanQRPage;
