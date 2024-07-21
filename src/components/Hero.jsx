import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  const social_media = [
    {
      icon: "logo-instagram",
      link: "https://www.instagram.com/evanthiwadanambi"
    },
    {
      icon: "logo-facebook",
      link: "https://www.facebook.com/profile.php?id=100078333318923"
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/thilinika-evanthi-wadanambi-051107282/"
    },
    {
      icon: "logo-twitter",
      link: "https://twitter.com/yourusername"
    },
    {
      icon: "logo-github",
      link: "https://github.com/ThilinikaEvanthi1221"
    },
    {
      icon: "logo-stackoverflow",
      link: "https://stackoverflow.com/users/22859171/thilinika-evanthi"
    }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center relative"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt="Hero"
          className="md:w-9/12 w-11/12 h-full object-cover" 
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Thilinika Evanthi</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            <span className="block">Undergraduate</span>
            <span className="block">Freelance Writer</span>
            <span className="block">Frontend Developer</span>
          </h4>
          <a href="#contact">
            <button className="btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map(({ icon, link }) => (
              <a
                key={icon}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
