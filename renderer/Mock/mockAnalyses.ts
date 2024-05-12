import {Analysis} from "../interfaces";

export const MockAnalyses = [
    {
        idAnalysis: 1,
        analysisType: "Blood test",
        files: [
        {
            idFile: 1,
            name: "Blood test 1",
            path: "C:/Users/Utilisateur/Documents/BloodTest1",
        },
        {
            idFile: 2,
            name: "Blood test 2",
            path: "C:/Users/Utilisateur/Documents/BloodTest2",
        },
        ],
        createdAt: new Date("2021-01-01"),
    },
    {
        idAnalysis: 2,
        analysisType: "Urine test",
        files: [
        {
            idFile: 3,
            name: "Urine test 1",
            path: "C:/Users/Utilisateur/Documents/UrineTest1",
        },
        {
            idFile: 4,
            name: "Urine test 2",
            path: "C:/Users/Utilisateur/Documents/UrineTest2",
        },
        ],
        createdAt: new Date("2021-01-01"),
    },
    {
        idAnalysis: 3,
        analysisType: "Stool test",
        files: [
        {
            idFile: 5,
            name: "Stool test 1",
            path: "C:/Users/Utilisateur/Documents/StoolTest1",
        },
        {
            idFile: 6,
            name: "Stool test 2",
            path: "C:/Users/Utilisateur/Documents/StoolTest2",
        },
        ],
        createdAt: new Date("2021-01-01"),
    },
    ];