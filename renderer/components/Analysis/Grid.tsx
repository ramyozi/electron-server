import React from 'react'
import {Analysis, MedicalAnalysis} from "../../interfaces";
import Link from "next/link";
import styles from './AnalysisGrid.module.css';

type Props = {
    analyses: Analysis[];
};

const Grid = ({ analyses }: Props) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {analyses.map((analysis, index) => (
                <Link key={index} href={`/analysis/${analysis.idAnalysis}`}>
                    <a style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                        <p><strong>Date:</strong> {analysis.createdAt.toDateString()}</p>
                        <p><strong>Type:</strong> {analysis.analysisType}</p>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default Grid;

