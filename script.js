// Typing effect
const typedText = document.querySelector(".typed-text");
if (typedText) {
  const words = ["a UI/UX Learner", "a Frontend Developer", "a Web Designer"];
  let i = 0, j = 0, isDeleting = false;

  function type() {
    let currentWord = words[i];
    let displayed = isDeleting ? currentWord.substring(0, j--) : currentWord.substring(0, j++);
    typedText.textContent = displayed;

    if (!isDeleting && j === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
  type();
}

// Project Cards (used only in projects.html)
const projects = [
  {
    title: "Weather App",
    desc: "Real-time weather data using OpenWeatherMap API",
    link: "https://garvit1903.github.io/weather-forecast-app/",
  },
  {
    title: "NomadNest UI",
    desc: "Travel app UI/UX built with Figma",
    link: "https://www.figma.com/proto/GYE4TtgjGFFL01MYuuUksJ/NomadNest?node-id=0-1",
  }
];

const projectList = document.getElementById("projectList");
if (projectList) {
  projects.forEach(p => {
    projectList.innerHTML += `
      <div class="project-card">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a href="${p.link}" target="_blank">View Project</a>
      </div>
    `;
  });
}
