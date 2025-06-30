import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface IWorkData{
    works: {
      company_name: string,
      location: string,
      role: string,
      duration: string,
      experience: {
        desc: string
      }[]
    }[]
  }

export const workData = (): IWorkData => {
    return {
      works: [
        {
          company_name: "Trisquare Sdn. Bhd.",
          location: "Petaling Jaya, Malaysia",
          role: "Software Developer",
          duration: "Sep 2023 - Present",
          experience: [
            {
              desc: "Developed a responsive company profile website using Angular, focusing on performance, accessibility, and SEO optimization"
            },
            {
              desc: "Created dynamic and reusable website templates using Unlayer CMS, enabling non-technical users to manage and update content easily."
            },
            {
              desc: "Built and maintained a cross- platform HR management application using Angular and Ionic, improving HR workflows and user experience."
            },
            {
              desc: "Contributed to the development of an interactive sports engagement platform using Angular for the web, and built a cross-platform mobile application with Capacitor, delivering a seamless experience across devices."
            },
            {
              desc: "Led the development of a social media application using Ionic Vue, delivering native experiences on Android and iOS. Also coordinated with cross-functional teams to align technical development with business goals."
            },
            {
              desc: "Developed a native dental care application using Angular and Capacitor, focusing on UI/UX consistency and mobile performance."
            }
          ]
        },
        {
          company_name: "Software Freelance",
          location: "",
          role: "",
          duration: "Apr 2022 - Present",
          experience: [
            {
              desc: "Developed and customized a responsive company profile website using WordPress with Elementor, ensuring brand consistency and ease of content management for non-technical users"
            },
            {
              desc: "Built a quotation management platform using Angular, enabling streamlined creation and tracking of client quotations with a user-friendly interface"
            }
          ]
        },
        {
          company_name: "Integro Technologies",
          location: "Kuala Lumpur, Malaysia",
          role: "Software Developer Intern",
          duration: "Apr 2023 - Jul 2023",
          experience: [
            {
              desc: "Led the end-to-end development of a lending product suite, taking ownership of both frontend and backend components to deliver a complete, user-friendly solution."
            },
            {
              desc: "Utilized Spring Boot for application logic and Oracle SQL for complex database scripting, ensuring performance, scalability, and data integrity."
            }
          ]
        },
        {
          company_name: "Icube by Sirclo",
          location: "Jakarta, Indonesia",
          role: "Engineer Intern",
          duration: "Aug 2021 - Feb 2022",
          experience: [
            {
              desc: "Maintained and managed core e-commerce platforms using Magento and Shopify, ensuring ongoing site stability and functionality."
            },
            {
              desc: "Implemented updates, performed performance optimizations, and streamlined content operations to enhance user experience and backend efficiency."
            }
          ]
        },
      ]
    };
  }

export default function Work(){
    
    const titleRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLImageElement[]>([]);

    const marqueeTween = useRef<gsap.core.Tween>();

    useEffect(() => {
        const ctx = gsap.context(() => {
          const marqueeElements = document.querySelectorAll(".marquee-item");
          const totalWidth =
            marqueeElements[0].clientWidth * (marqueeElements.length / 2);
    
          // ✅ Create marquee tween and store it in a ref
          marqueeTween.current = gsap.to(titleRef.current, {
            x: -totalWidth,
            duration: 60, // base duration
            ease: "none",
            repeat: -1,
          });
    
          // ✅ Circle rotation (optional)
          gsap.to(circleRef.current, {
            rotation: "-=360",
            duration: 12,
            ease: "none",
            repeat: -1,
            transformOrigin: "center center",
          });
    
          // ✅ Update marquee speed on scroll
          const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const maxSpeed = 4;   // 4x speed
            const baseSpeed = 1;  // 1x speed
            const speedFactor = Math.min(maxSpeed, baseSpeed + scrollTop / 100);
    
            marqueeTween.current?.timeScale(speedFactor);
          };
    
          window.addEventListener("scroll", handleScroll);

          return () => {
            window.removeEventListener("scroll", handleScroll);
            ctx.revert();
          };

        }, titleRef);
    
      }, []);

    return(
        <div>
            <div ref={containerRef} className="overflow-hidden w-full whitespace-nowrap mt-32">
                <div className="flex" ref={titleRef}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="marquee-item flex items-center shrink-0">
                            <h1 className="text-9xl font-normal mr-4">
                                Work Experiences
                            </h1>
                            <img     
                                ref={el => {
                                    if (el) circleRef.current[index] = el;
                                }}
                                src="/images/stars.png"
                                className="w-[120px] h-full mr-4"/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto my-32 lg:px-0 px-4">

                {workData().works.map((work, index) => (
                    <div 
                        key={index} 
                        className={`mt-12 ${index === 0 ? 'border-t-0' : 'border-t-[1px] border-neutral-400 border-solid'} pt-12`}
                    >
                        <div className="flex sm:flex-row flex-col justify-between items-start">
                            <div className="basis-1/2">
                                <h1 className="text-3xl font-semibold">{work.company_name}</h1>
                                <h1 className="text-lg font-normal">{work.location}</h1>
                            </div>
                            <div className="basis-1/2 sm:mt-0 mt-4">
                                <div>
                                    <h1 className="text-lg font-semibold">{work.role}</h1>
                                    <h1 className="text-lg font-normal">{work.duration}</h1>
                                </div>
                                <div className="mt-4">
                                    {work.experience.map((exp, index) => (
                                        <div key={index} className="flex items-center">
                                            <h1 className="text-md font-normal mb-4">{exp.desc}</h1>
                                        </div>  
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}