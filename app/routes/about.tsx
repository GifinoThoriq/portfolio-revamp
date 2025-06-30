import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

export default function About() {

  const technicals = [
    'Angular / Angular Ionic',
    'Vue / Vue Ionic',
    'React / Next / Remix',
    'Wordpress Elementor',
    'Git',
    'Capacitor',
    'Laravel'
  ]

  const skills = [
    'Web Development',
    'Mobile Development',
    'API Integration',
    'UI UX Implementation',
    'CMS Management and Customization',
    'Debugging and Performance Optimazation',
    'Component-based architecture'
  ]


  const titleRef = useRef(null);
  const circleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText)

    const splitTitle = SplitText.create(titleRef.current, {
      type: "words, lines",
      linesClass: "line",
      autoSplit: true,
      mask: 'lines',
    })

    const ctx = gsap.context(() => {
      gsap.from(splitTitle.lines, {
        duration: 2,
        x: -500,
        stagger: 0.1,
        delay: 0.5,
        ease: "expo.out"
      })

      gsap.from(circleRef.current, {
        duration: 2,
        rotate: -180
      })

      gsap.from(imageRef.current, {
        duration: 2,
        x: -200,
        ease: "expo.out",
        opacity: 0
      })
    }, [splitTitle, circleRef.current])
    return () => ctx.revert()
  },[])

  return (
    <div className="max-w-7xl mx-auto">
        <div className="px-12 my-20 min-h-[900px]">
          <div className="flex flex-col gap-2">
            <h1 ref={titleRef} className="font-instrument text-6xl font-semibold">More About Me</h1>
            <img ref={circleRef} src="/images/stars.png" className="w-[60px] h-full mr-4"/> 
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="basis-2/3 flex justify-end mt-12">
              <div className="max-w-md">
                <p className="text-xl font-light">
                I'm a frontend-focused software engineer who loves building things that look great and work smoothly. I’ve worked on both web and mobile projects, and I’m all about clean code, good design, and making sure the user has a great experience. I enjoy solving problems, working with a team, and constantly learning how to do things better. Basically, I like turning ideas into solid, user-friendly applications.
                </p>
              </div>
            </div>
            <div className="basis-1/3 lg:mt-0 mt-12">
              <img ref={imageRef} src="/images/main-image.jpg" className="w-[300px] h-full rounded-xl ml-auto" />  
            </div>
          </div>

          <div className="flex lg:flex-row flex-col mt-20">
            <div className="basis-1/2">
              <h1 className="text-4xl font-medium">Technical</h1>
            </div>
            <div className="basis-1/2 lg:mt-0 mt-12">
              {
                technicals.map((tech, index) => {
                  return (
                    <h1 key={index} className="text-lg mb-2">{tech}</h1>
                  )
                })
              }
            </div>
          </div>
          <div className="flex lg:flex-row flex-col mt-20">
            <div className="basis-1/2">
              <h1 className="text-4xl font-medium">Skills</h1>
            </div>
            <div className="basis-1/2 lg:mt-0 mt-12">
              {
                skills.map((skill, index) => {
                  return (
                    <h1 key={index} className="text-lg mb-2">{skill}</h1>
                  )
                })
              }
            </div>
          </div>
        </div>

    </div>
  )
}