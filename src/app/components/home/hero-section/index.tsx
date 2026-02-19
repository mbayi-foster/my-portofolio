import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
    const socialIcon = [
        { 
            href: "https://www.linkedin.com/in/jfk-foster-mbayi-aab3042a3",
            icon: faLinkedin
        },
        { 
            href: "https://github.com/mbayi-foster",
            icon: faGithub

        },
        { 
            href: "https://www.facebook.com/share/1GzgjCUH77/",
            icon: faFacebook

        },
    ];
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image src={"/images/hero-sec/computer.jpg"} alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image src={"/images/hero-sec/foster.jpg"} alt="user-img" width={145} height={145} className="border-4 border-white rounded-full" />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1>JFK Foster Mbayi</h1>
                                <p className="text-violet-700 font-normal">Développeur fullstack web & mobile</p>
                                <div className="flex items-center gap-2">
                                    <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                                    <p className="text-primary">RDC, Kinshasa</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {socialIcon?.map((value, index) => {
                                        return (
                                            <Link href={value?.href} key={index} className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full">
                                                <FontAwesomeIcon icon={value?.icon} size="lg"/>
                                            </Link>
                                        )
                                    })}
                                </div>
                                <Button asChild className="h-auto rounded-full p-0.5!">
                                    <Link
                                        href="mailto:mbayifoster@gmail.com"
                                        className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                    >
                                        <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                                           <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                            <span className="text-sm sm:text-base font-semibold text-white">Contact me</span>
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

