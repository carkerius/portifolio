document.getElementById("year").textContent = new Date().getFullYear();

const projectsGrid = document.getElementById("projectsGrid");

projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const links = document.createElement("div");
  links.className = "card-links";

  if (project.repoUrl) {
    const repoLink = document.createElement("a");
    repoLink.href = project.repoUrl;
    repoLink.target = "_blank";
    repoLink.rel = "noopener";
    repoLink.textContent = "Repositório";
    links.appendChild(repoLink);
  }

  if (project.demoUrl) {
    const demoLink = document.createElement("a");
    demoLink.href = project.demoUrl;
    demoLink.target = "_blank";
    demoLink.rel = "noopener";
    demoLink.textContent = "Demo";
    links.appendChild(demoLink);
  }

  card.append(title, description, links);
  projectsGrid.appendChild(card);
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
