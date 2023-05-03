import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle(){
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
      return(
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="particles-2-css"
      options={{
        background: {
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
            color: "#000",
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: false,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 10,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              grab: {
                distance: 400,
              },
              repulse: {
                divs: {
                  distance: 179,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  selectors: [],
                },
              },
            },
          },
          // rgb(0, 255, 187)
          particles: {
            color: {
              value: "rgb(238, 19, 19);",
            },
            links: {
              enable:false,
              // color: {
              //   value: "rgb(238, 19, 19);",
              // },
              distance: 270,
              opacity: 0.8,
              width:1
            },
            move: {
              speed:.7,
              attract: {
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              enable: true,
              outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
            },
            number: {
              density: {
                enable: true,
                value_area:1000
              },
              value: 40,
            },
            opacity: {
              random: {
                enable: true,
              },
              value: {
                min: 0.3,
                max: 0.9,
              },
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.2,
              },
            },
            rotate: {
              random: {
                enable: true,
              },
              animation: {
                enable: true,
                speed: 3,
              },
              direction: "random",
            },
            shape: {
              options: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                char: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                polygon: {
                  sides: 5,
                },
                star: {
                  sides: 5,
                },
                image: [
                  {
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                    width: 20,
                    height: 20,
                  },
                  {
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                    width: 20,
                    height: 20,
                  },
                  {
                    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
                    width: 20,
                    height: 20,
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                    width: 20,
                    height: 20,
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                    width: 20,
                    height: 20,
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                    width: 20,
                    height: 20,
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
                    width: 20,
                    height: 20,
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                    width: 20,
                    height: 20,
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                    width: 20,
                    height: 20,
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                    width: 20,
                    height: 20,
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                    width: 20,
                    height: 20,
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                    width: 20,
                    height: 20,
                  },
                ]
              },
              type: "image",
            },
            size: {
              value: 40,
              animation: {
                speed:40,
                minimumValue: 0.1,
              },
            },
            stroke: {
              width: "100px",
              color: {
                value: "#000000",
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true,
                  },
                },
              },
            },
          },
        }}
      />
      )
}