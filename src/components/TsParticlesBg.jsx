import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const TsParticlesBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        detect_on: "canvas",
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: {
            enable: true,
            mode: "attract",
            parallax: { enable: false, force: 60, smooth: 20 },
          },
          resize: true,
        },
        modes: {
          push: { quantity: 7 },
          attract: { distance: 200, duration: 0.6, factor: 5 },
        },
      },
      particles: {
        color: { value: "#B7B7B7" },
        links: {
          color: "#B7B7B7",
          distance: 180,
          enable: true,
          opacity: 0.4,
          width: .8,
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          bounce: false,
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 100 },
        opacity: {
          animation: { enable: false, minimumValue: 0.1, speed: 7, sync: false },
          random: false,
          value: 0.5,
        },
        shape: {
          type: "circle",
          stroke: { color: "#8EB486", width: 0 },
        },
        size: {
          animation: { enable: false, minimumValue: 0.1, speed: 90, sync: false },
          random: true,
          value: 5,
        },
      },
      retina_detect: true,
    }),
    []
  );

  return (
    <div>
      {init && <Particles id="tsparticles" options={options} />}
      <div className="github">
        <a
          className="btn btn-link"
          href="https://github.com/matteobruni/tsparticles"
          title="Find more info on GitHub"
        >
          <img
            className="img-fluid"
            id="gh-mark"
            src="https://cdn.matteobruni.it/images/particles/GitHub-Mark-120px-plus.png"
            alt=""
          />
          <span id="gh-project">tsParticles</span>
        </a>
        <div>
          <a
            className="github-button"
            href="https://github.com/matteobruni/tsparticles"
            data-icon="octicon-star"
            aria-label="Star matteobruni/tsparticles on GitHub"
          >
            Star
          </a>
          <a
            className="github-button"
            href="https://github.com/matteobruni/tsparticles/fork"
            data-icon="octicon-repo-forked"
            aria-label="Fork matteobruni/tsparticles on GitHub"
          >
            Fork
          </a>
          <a
            className="github-button"
            href="https://github.com/matteobruni/tsparticles/releases/tag/v1.15.1"
            data-icon="octicon-download"
            aria-label="Download matteobruni/tsparticles on GitHub"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default TsParticlesBg;
