import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from "swiper/modules";

// Import your images
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project_person from "../assets/images/project_person1.png";

const Project = () => {
  const projects = [
    {
      img: project5,
      name: "Portfolio Website",
      github_link: "https://github.com/ThilinikaEvanthi1221/Portfolio",
      live_link: "",
      imgStyle: { width: '100%', height: '200px', objectFit: 'cover' },
    },
    {
      img: project1,
      name: "Flappy Bird Game",
      github_link: "https://github.com/ThilinikaEvanthi1221/Flappy-bird-",
      live_link: "",
      imgStyle: { width: '100%', height: '200px', objectFit: 'cover' },
    },
    {
      img: project2,
      name: "Soil NPK value showing App",
      github_link: "https://github.com/ThilinikaEvanthi1221/APP",
      live_link: "https://expo.dev/artifacts/eas/bjxX3JJkymr3rrRXehT7tD.apk",
      imgStyle: { width: '100%', height: '200px', objectFit: 'cover' },
    },
    {
      img: project3,
      name: "Profile Card",
      github_link: "https://github.com/ThilinikaEvanthi1221/Profile-Card-with-CSS-and-HTML",
      live_link: "https://thilinikaevanthi1221.github.io/Profile-Card-with-CSS-and-HTML/",
      imgStyle: { width: '100%', height: '200px', objectFit: 'cover' },
    },
    {
      img: project4,
      name: "Pharmacy E-commerce Website",
      github_link:
        "https://github.com/ThilinikaEvanthi1221/Pharmacy-e-commerce-website",
      live_link: "",
      imgStyle: { width: '100%', height: '200px', objectFit: 'cover' },
    },
    
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000, // Time in milliseconds between slides
              disableOnInteraction: false, // Keep autoplay even when user interacts
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="card-container h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img
                    src={project_info.img}
                    alt={project_info.name}
                    className="rounded-lg"
                    style={project_info.imgStyle} // Apply consistent size
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
