export const goToHome = (navigate) => {
  navigate("/");
};

export const goToAbout = (navigate) => {
  navigate("/about");
};

export const goToSkills = (navigate) => {
  navigate("/skills");
};

export const goToProjects = (navigate) => {
  navigate("/projects");
};

export const goToContact = (navigate) => {
  navigate("/contact");
};

export const goTo = (url, navigate) => {
  navigate(url);
};
