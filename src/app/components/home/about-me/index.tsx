import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const servicesBedge = ["Développement web", "Développement mobile", "UI/UX Design", "Consulting en technologie", "Maintenance et support", "Formation et mentorat", "Intégration d'API", "Optimisation de performance", "Sécurité des applications", "Déploiement et DevOps"];
    const languagesBedge = ["JavaScript", "TypeScript", "Python", "Dart", "PHP", "SQL", "HTML/CSS", "Java", "Next.js", "React", "Vue.js", "Flutter", "React-Native", "Nest.js", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "AWS", "Git"];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Sur moi</p>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                                Développeur Web & Mobile | Solutions digitales orientées business <br></br> Je conçois des applications <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]"> web et mobiles </span>performantes adaptées aux réalités du marché africain, notamment en RDC.
                                {/*  at <span className="border-b-2">WrapPixel</span>, a SaaS startup focused on productivity tools. */}</h3>
                            <h5 className="text-secondary font-normal">Développeur chez DareDare</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Services</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Skills</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {languagesBedge?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe