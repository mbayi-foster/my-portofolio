import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Jenos Food - Application de livraison de repas",
        description: "Conception d'une application de livraison de repas conviviale et efficace pour Jenos Food, offrant une expérience utilisateur fluide et des fonctionnalités de commande en ligne.",
        roles: ["Développeur mobile", "React-Native"],
        image: "/images/feature-work/jenos-food.png"
    },
    {
        title: "Jenos Construction - Site web de présentation de projets",
        description: "Conception d'un site web moderne et responsive pour Jenos Construction, mettant en valeur les projets et services de l'entreprise.",
        roles: ["Développeur web", "Laravel", "Tailwind CSS"],
        image: "/images/feature-work/jenos-construction.jpeg"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};