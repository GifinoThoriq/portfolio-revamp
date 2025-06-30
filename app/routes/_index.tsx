import type { MetaFunction } from "@remix-run/node";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useWindowWidth } from "~/hooks/useWindowWidth";

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



export const meta: MetaFunction = () => {
  return [
    { title: "Gifino" },
    { name: "description", content: "Welcome!" },
  ];
};

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

export default function Index() {

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);

  const descRef = useRef(null);

  const containerRef = useRef(null);
  const descContainerRef = useRef(null);

  const circleRef = useRef(null);
  const arrowRef = useRef(null);

  const videoContainerRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  //ANIMATION
  useEffect(() => {

    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);

    const splitText1 = SplitText.create(textRef1.current, {
      type: "words, lines",
      linesClass: "line",
      autoSplit: true,
      mask: 'lines',
    })

    const splitText2 = SplitText.create(textRef2.current, {
      type: "words, lines",
      linesClass: "line",
      autoSplit: true,
      mask: 'lines',
    })

    const splitText3 = SplitText.create([textRef3.current, textRef4.current], {
      type: "words, lines",
      linesClass: "line",
      autoSplit: true,
      mask: 'lines',
    })

    const ctx = gsap.context(() => {

      gsap.from(descRef.current, {
        scrollTrigger: {
          trigger: descContainerRef.current,
          start: "top 80%",
        },
        duration: 2,
        y: -100,
        opacity: 0,
        ease: "expo.out",
      })

      gsap.from(circleRef.current, {
        duration: 1,
        rotate: 60
      })

      gsap.from(arrowRef.current, {
        y:60,
        opacity:0,
        delay: 0.6,
        duration: 0.5,
      })

      gsap.from(splitText1.lines, {
        duration: 1,
        y: 200,
        opacity: 1,
        delay: 0.2,
        ease: "expo.out",
      });

      gsap.from(splitText2.lines, {
        duration: 1,
        y: 200,
        opacity: 1,
        delay: 0.5,
        ease: "expo.out",
      });

      gsap.from(splitText3.lines, {
        duration: 1,
        y: 200,
        opacity: 1,
        delay: 0.6,
        ease: "expo.out",
      });

      if (!videoContainerRef.current) return;

      gsap.to(videoContainerRef.current, {
        paddingLeft: 12,
        paddingRight: 12,
        ease: "none",
        scrollTrigger: {
          trigger: videoContainerRef.current,
          start: "top bottom",   // animation starts when container hits bottom of viewport
          end: "top top",        // animation ends when container hits top of viewport
          scrub: true,           // smooth scroll animation
        },
      });

    }, [containerRef, descContainerRef, videoContainerRef]);

    return () => ctx.revert(); // clean up on unmount
  }, [windowWidth]);

  const width = useWindowWidth();

  //width handler
  useEffect(() => {
    width !== null ? setWindowWidth(width) : setWindowWidth(null);
  },[width])



  return (
    <div ref={containerRef} className="max-w-7xl mx-auto">
      {/* NAVBAR */}

      {/* MAIN TITLE */}
      <div className="xl:px-36 px-4 lg:text-8xl md:text-6xl text-4xl font-instrument mt-16 font-thin lg:min-h-[620px] min-h-[400px]">

        <div className="flex ml-4 items-center">
          <img ref={circleRef} src="/images/stars.png" className="md:w-[80px] w-[48px] h-full mr-4"/>
          <span ref={textRef1} className="md:mt-0 mt-4">I'm Gifino Thoriq</span>
        </div>
        <div ref={textRef2} className="flex md:ml-32 ml-4">Software Engineer</div>
        <div ref={textRef3} className="flex md:ml-0 ml-4">Based on</div>
        <div className="flex md:ml-16 ml-4 items-center">
          <img ref={arrowRef} src="/images/arrow.png" className="mr-4 md:w-[72px] w-[40px] h-full -scale-y-[1]"/>
          <span ref={textRef4}>Jakarta Indonesia</span>
        </div>
      </div>

      {/* SLIGHT PORTFOLIO */}

      {windowWidth !== null && windowWidth >= 768 
        ? 
        <>
          <div ref={videoContainerRef} className="px-48 flex items-start justify-start z-10 relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-[100%] h-auto me-auto rounded"
            >
              <source src="/portfolio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </> 
        : 
        <>
          <div>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-[100%] h-auto"
            >
              <source src="/portfolio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      }

      <div ref={descContainerRef} className="px-4 my-12 flex z-0">
        <p ref={descRef} className="md:text-xl text-lg md:w-[60%]" style={{lineHeight: '28px'}}>I'm a frontend-focused Software Engineer with solid experience in both web and mobile projects. I care about writing clean code, building user-friendly interfaces, and creating things that work well and scale. I enjoy collaborating with others and always try to keep learning and improving.</p>
      </div>

      {/* WORK EXPERIENCES */}
      <div className="px-4 mt-20">
       <h1 className="font-instrument md:text-5xl text-4xl font-semibold">Latest Work Experience</h1>
       {
         workData().works.map((work, index) => {
           return (
            index !== 0 ? null :
            <div className="flex md:flex-row flex-col mt-12" key={index}>
              <div className="basis-1/2">
                <h2 className="text-3xl font-medium">{work.company_name}</h2>
                <h4>{work.location}</h4>
              </div>
              <div className="basis-1/2">
                <div className="mb-8">
                  <h3>{work.role}</h3>
                  <h3>{work.duration}</h3>
                </div>
                <div>
                  {
                    work.experience.map((exp, index) => {
                      return (
                        <p key={index} className="mb-4">{exp.desc}</p>
                      )
                    })
                  }
                </div>
              </div>
            </div>
           )
         })
       }
      </div>

       {/* FOOTER */}

    </div>
  );
}
