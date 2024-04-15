import {Analysis, MedicalAnalysis} from '../interfaces'

/** Dummy user data. */

const medicalAnalyses: MedicalAnalysis[] = [
    {
        idPatient: 101,
        analyses: [
            {
                idAnalysis: 11,
                analysisType: 'Blood Test',
                file: 'blood-test-101-a1.pdf',
                createdAt: new Date('2022-04-12')
            },
            {
                idAnalysis: 12,
                analysisType: 'X-Ray',
                file: 'xray-101-a2.pdf',
                createdAt: new Date('2022-05-15')
            }
        ]
    },
    {
        idPatient: 102,
        analyses: [
            {
                idAnalysis: 1,
                analysisType: 'MRI',
                file: 'mri-102-b1.pdf',
                createdAt: new Date('2022-06-10')
            }
        ]
    }
];

export const getAllAnalyses = async (): Promise<Analysis[]> => {
    let allAnalyses: Analysis[] = [];
    medicalAnalyses.forEach(ma => allAnalyses = allAnalyses.concat(ma.analyses));
    return allAnalyses;
};

export const findAnalysis = async (idAnalysis: string): Promise<Analysis> => {
    for (const ma of medicalAnalyses) {
        const analysis = ma.analyses.find(a => a.idAnalysis === Number(idAnalysis));
        if (analysis) {
            return analysis;
        }
    }
    throw new Error('Analysis not found');
};
