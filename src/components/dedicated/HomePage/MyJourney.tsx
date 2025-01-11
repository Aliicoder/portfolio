
function MyJourney() {
  return (
    <div className="container  mx-auto  overflow-hidden">
      <div className="p-[6%]">
        <div className="px-[1%]   relative flex justify-center w-fit ">
          <h1 className="relative c8 md:c4 font-semibold z-20 ">My journey</h1>
          <div className="absolute bottom-0 h-2 w-full z-10 bg-[--tertiary-background-color]" />
        </div>
      </div>
      <div className="p-[6%] px-[12%] flex ">
        <div className="w-[0.12rem] shrink-0 bg-[--gray-color]">

        </div>
        <div className="flex flex-col gap-6 ">
          <div >
            <h1 className="relative p-6 md:p-[3%] text-nowrap">
              <h1 className="montserrat c8 md:c5 font-bold"> Graphic design </h1>
              <h1 className="c6 md:c3 text-nowrap">2020 - 2021</h1>
              <div className="absolute w-1 scale-110 origin-center h-1/2 -translate-x-full  left-0 top-0 " />  
              <div className="absolute z-10 left-0 top-1/2 w-2 aspect-square md:w-6  rounded-full bg-[--fill-color] border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2" />
            </h1>
            <div className="px-[12%]">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
              In 2020, I embarked on my journey as a graphic designer, diving into the world of creativity and visual storytelling. 
              Armed with a passion for design, I began exploring tools like Adobe Photoshop, Illustrator, and Canva, honing my skills in creating compelling visual content. 
              I worked on projects ranging from logo design and branding to social media graphics, gradually developing an eye for aesthetics and detail.
              </p>
            </div>
          </div>
          <div>
            <h1 className="relative p-6 md:p-[3%] text-nowrap">
              <h1 className="montserrat c8 md:c5 font-bold"> Front End Developer </h1>
              <h1 className="c6 md:c3 text-nowrap">2021 - 2022</h1>
              <div className="absolute z-10 left-0 top-1/2 w-2 aspect-square md:w-6 rounded-full bg-[--fill-color] border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2" />
            </h1>
            <div className="px-[12%]">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
              I transitioned into the role of a front-end developer, expanding my skills from graphic design to crafting interactive and responsive user interfaces. 
              Starting with foundational technologies like HTML, CSS, and JavaScript, I quickly mastered frameworks such as React.js, which became my go-to tool 
              for building dynamic and efficient web applications.
              </p>
            </div>
          </div>
          <div>
            <h1 className="relative p-6 md:p-[3%] text-nowrap">
              <h1 className="montserrat c8 md:c5 font-bold"> Back End Developer </h1>
              <h1 className="c6 md:c3 text-nowrap">2021 - 2022</h1>
              <div className="absolute z-10 left-0 top-1/2 w-2 aspect-square md:w-6 rounded-full bg-[--fill-color] border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2" />
            </h1>
            <div className="px-[12%]">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
              I delved into backend development, broadening my expertise and gaining a deeper understanding of building robust and scalable web applications. 
              I mastered Node.js and Express.js, laying the groundwork for creating efficient server-side logic and APIs. I worked extensively with databases like MongoDB,
               learning to design and manage schemas, implement CRUD operations, and optimize data handling for real-world applications.
              </p>
            </div>
          </div>
          <div>
            <h1 className="relative p-6 md:p-[3%] text-nowrap">
              <h1 className="montserrat c8 md:c5 font-bold"> Full stack Developer </h1>
              <h1 className="c6 md:c3 text-nowrap">2022 - 2023</h1>
              <div className="absolute z-10 left-0 top-1/2 w-2 aspect-square md:w-6 rounded-full bg-[--fill-color] border border-[--gray-color]  -translate-x-[calc(50%+0.07rem)] -translate-y-1/2" />
            </h1>
            <div className="px-[12%]">
              <p className="c7 md:c4 md:line-clamp-5 text-balance">
              I evolved into a full-stack developer, seamlessly integrating my frontend and backend expertise to build complete, end-to-end web applications.
               Leveraging the MERN stack, I developed robust, dynamic, and scalable solutions, handling both the client-side and server-side with efficiency. 
               My projects often involved implementing complex features, such as authentication systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyJourney