export const analyzeATS = (resumeData) => {
  let score = 0;
  const suggestions = [];
  const checks = [];
  const {
    personal_info,
    professional_summary,
    education,
    skills,
    experience,
    projects,
  } = resumeData;
  const POINTS = {
    fullName: 5,
    email: 5,
    phone: 5,
    profession: 5,
    location: 5,
    summary: 15,
    skills: 20,
    experience: 20,
    education: 10,
    projects: 10,
  };
  const personalCheck = [
    {
      field: "full_name",
      title: "Full Name",
      points: POINTS.fullName,
      suggestion: "Add your full name.",
    },
    {
      field: "email",
      title: "Email",
      points: POINTS.email,
      suggestion: "Add your email address.",
    },
    {
      field: "phone",
      title: "Phone Number",
      points: POINTS.phone,
      suggestion: "Add your phone number.",
    },
    {
      field: "profession",
      title: "Profession",
      points: POINTS.profession,
      suggestion: "Add your profession title.",
    },
    {
      field: "location",
      title: "Location",
      points: POINTS.location,
      suggestion: "Add your location.",
    },
  ];

  personalCheck.forEach((item) => {
    const value = personal_info[item.field];
    if (value.trim()) {
      score += item.points;
      checks.push({
        title: item.title,
        status: true,
        score: item.points,
      });
    } else {
      checks.push({
        title: item.title,
        status: false,
        score: 0,
      });
      suggestions.push(item.suggestion);
    }
  });

  //summary
  if (professional_summary.trim()) {
    score += POINTS.summary;
    checks.push({
      title: "Professional Summary",
      status: true,
      score: POINTS.summary,
    });
  } else {
    checks.push({
      title: "Professional Summary",
      status: false,
      score: 0,
    });
    suggestions.push("Add a professional summary.");
  }

  //skills
  if (skills.length >= 5) {
    score += POINTS.skills;
    checks.push({
      title: "Skills",
      status: true,
      score: POINTS.skills,
    });
  } else {
    checks.push({
      title: "Skills",
      status: false,
      score: 0,
    });
    suggestions.push("Add more skills.");
  }

  //experience
  if (experience.length > 0) {
    score += POINTS.experience;
    checks.push({
      title: "Experience",
      status: true,
      score: POINTS.experience,
    });
  } else {
    checks.push({
      title: "Experience",
      status: false,
      score: 0,
    });
    suggestions.push("Add at least one work experience.");
  }

  //education
  if (education.length > 0) {
    score += POINTS.education;
    checks.push({
      title: "Education",
      status: true,
      score: POINTS.education,
    });
  } else {
    checks.push({
      title: "Education",
      status: false,
      score: 0,
    });
    suggestions.push("Add your education details.");
  }

  //projects
  if (projects.length > 0) {
    score += POINTS.projects;
    checks.push({
      title: "Projects",
      status: true,
      score: POINTS.projects,
    });
  } else {
    checks.push({
      title: "Projects",
      status: false,
      score: 0,
    });
    suggestions.push("Add at least one project.");
  }

  return { score, checks, suggestions };
};
