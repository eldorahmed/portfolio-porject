const projects = [
  {
    title: "Champions legue",
    githubLink: "https://github.com/eldorahmed/chempions-legue",
    vercelLink: "https://chempions-legue.vercel.app/",
  },
  {
    title: "Ansormed",
    githubLink: "https://github.com/eldorahmed/ansormed",
    vercelLink: "https://ansormed-six.vercel.app/",
  },

  {
    title: "USA project",
    githubLink: "https://github.com/eldorahmed/USA-project",
    vercelLink: "https://usa-project-six.vercel.app/",
  },
  {
    title: "Pixer project",
    githubLink: "https://github.com/eldorahmed/pixer-project",
    vercelLink: "https://pixer-project-nu.vercel.app/",
  },
  {
    title: "Akademnashr",
    githubLink: "https://github.com/eldorahmed/AkademNashr",
    vercelLink: "https://akadem-nashr-six.vercel.app/",
  },
  {
    title: "QR code",
    githubLink: "https://github.com/eldorahmed/qr-code-small-project",
    vercelLink: "https://qr-code-small-project.vercel.app/",
  },
  {
    title: "Social links",
    githubLink: "https://github.com/eldorahmed/social-links-profile",
    vercelLink: "https://social-links-profile-black-gamma.vercel.app/",
  },
  {
    title: "Blog-card",
    githubLink: "https://github.com/eldorahmed/blog-preview-card",
    vercelLink: "https://blog-preview-card-neon-omega.vercel.app/",
  },
  {
    title: "Perfume card",
    githubLink: "https://github.com/eldorahmed/card-perfume",
    vercelLink: "https://card-perfume-lemon.vercel.app/",
  },
  {
    title: "Remote work",
    githubLink: "https://github.com/eldorahmed/remote-work-intro",
    vercelLink: "https://remote-work-intro-nu.vercel.app/",
  },
  {
    title: "Persanal portfolio",
    githubLink: "https://github.com/eldorahmed/portfolio-porject",
    vercelLink: "https://portfolio-porject-alpha.vercel.app/",
  },
  {
    title: "Tip Calculator(functioning)",
    githubLink: "https://github.com/eldorahmed/tipcalculator",
    vercelLink: "https://tipcalculator-black.vercel.app/",
  },
  {
    title: "Champions legue (updated)",
    githubLink: "https://github.com/eldorahmed/chempions-legue",
    vercelLink: "https://chempions-legue.vercel.app/",
  },
  {
    title: "Castaway",
    githubLink: "https://github.com/eldorahmed/Castaway-project-main",
    vercelLink: "https://castaway-project-main.vercel.app/",
  },
  {
    title: "CreateX",
    githubLink: "https://github.com/eldorahmed/create-x.-main",
    vercelLink: "https://create-x-main.vercel.app/",
  },
  {
    title: "Animations (11)",
    githubLink: "https://github.com/eldorahmed/animation",
    vercelLink: "https://animation-iota-taupe.vercel.app/",
  },
  {
    title: "Crowfund",
    githubLink: "https://github.com/eldorahmed/crowfund-main",
    vercelLink: "https://crowfund-main.vercel.app/",
  },
  {
    title: "Exam",
    githubLink: "https://github.com/eldorahmed/My-Team-main",
    vercelLink: "https://my-team-main.vercel.app/",
  },
  {
    title: "JS string methods",
    githubLink: "https://github.com/eldorahmed/2-dars-String-Methods",
    vercelLink: "https://2-dars-string-methods.vercel.app/",
  },
  {
    title: "3-dars misollar ",
    githubLink: "https://github.com/eldorahmed/3-dars",
    vercelLink: "https://3-lesson-sand.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
