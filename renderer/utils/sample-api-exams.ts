import {RadiologicalExam} from "../interfaces";

const dataArray: RadiologicalExam[] = [
    {
        idPatient: 101,
        exams: [
            {
                idExam: 11,
                type: 'X-Ray',
                reports: [],
                imagery: [],
                createdAt: new Date('2022-04-12')
            },
            {
                idExam: 12,
                type: 'MRI',
                reports: [],
                imagery: [],
                createdAt: new Date('2022-05-15')
            }
        ]
    },
    {
        idPatient: 102,
        exams: [
            {
                idExam: 1,
                type: 'X-Ray',
                reports: [],
                imagery: [],
                createdAt: new Date('2022-06-10')
            }
        ]
    }
];

export const getAllExams = async (): Promise<RadiologicalExam[]> => {
    return dataArray;
};

export const findExam = async (idExam: string): Promise<RadiologicalExam> => {
    const exam = dataArray.find(e => e.idPatient === Number(idExam));
    if (exam) {
        return exam;
    }
    throw new Error('Exam not found');
};

export const addExam = async (exam: RadiologicalExam): Promise<void> => {
    dataArray.push(exam);
};

export const updateExam = async (exam: RadiologicalExam): Promise<void> => {
    const index = dataArray.findIndex(e => e.idPatient === exam.idPatient);
    if (index !== -1) {
        dataArray[index] = exam;
    }
};

export const deleteExam = async (idExam: string): Promise<void> => {
    const index = dataArray.findIndex(e => e.idPatient === Number(idExam));
    if (index !== -1) {
        dataArray.splice(index, 1);
    }
};


