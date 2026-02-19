import { faFlutter } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: faFlutter,
        role: "Développeur Web & Mobile, Flutter - DareDare",
        location: "Kinshasa",
        startYear: "2025",
        endYear: "Présent",
        bulletPoints: [
           "Conception et développement d'applications mobiles pour le compte de la compagnie",
           "Collaboration avec les équipes de backend pour intégrer les API et assurer la performance des applications",
        ]
    },
    {
        icon: faCode,
        role: "Développeur fullstack - JENOS GROUP",
        location: "Kinshasa",
        startYear: "2024",
        endYear: "Présent",
        bulletPoints: [
            "Conception et développement d'une application de gestion de projet pour les équipes internes de JENOS GROUP",
            "Collaboration avec les équipes de design pour créer une interface utilisateur intuitive et responsive",
        ]
    },
]

const educationData = [
    {
        date: "Sept 2021 - Déc 2024",
        title: "Licence en Informatique appliquée",
        subtitle: "ISTA Kinshasa, RDC"
    },
    {
        date: "2016 - 2021",
        title: "Diplome d'Etat en Electronique",
        subtitle: "CS Paulin de l'Eternel Kananga, RDC"
    },
    // {
    //     date: "Jan 2020 - Mar 2020",
    //     title: "Front-End Web Development Bootcamp",
    //     subtitle: "General Assembly — New York, NY"
    // }
];


const projectOverview = {
    caseStudies: [
        { name: "Wellnest", url: "#" },
        { name: "ScoutHire", url: "#" },
    ],
    sideProjects: [
        { name: "Formless", url: "#" },
        { name: "Gridsnap", comingSoon: true },
        { name: "OrbitPay Mobile App", comingSoon: true },
        { name: "Siteflow Page Builder", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};