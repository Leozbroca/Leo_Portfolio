export const goToHome = (navigate) => {
  navigate("/");
  window.scrollTo({
    top: 0,
  });
};

export const goToAbout = (navigate) => {
  navigate("/about");
  window.scrollTo({
    top: 0,
  });
};

export const goToSkills = (navigate) => {
  navigate("/skills");
  window.scrollTo({
    top: 0,
  });
};

export const goToProjects = (navigate) => {
  navigate("/projects");
  window.scrollTo({
    top: 0,
  });
};

export const goToContact = (navigate) => {
  navigate("/contact");
  window.scrollTo({
    top: 0,
  });
};

export const goTo = (url, navigate) => {
  navigate(url);
  window.scrollTo({
    top: 0,
  });
};
