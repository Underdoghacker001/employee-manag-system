const employees = [
  {
      id: 1,
      firstName: "Amaan",
      email: "e@e.com",
      password: "123",
      tasks: [
          {
              title: "Fix UI Bugs",
              description: "Resolve layout issues on the dashboard page.",
              date: "2025-03-18",
              category: "Development",
              active: true,
              newTask: false,
              completed: false,
              failed: false,
          },
          {
              title: "Update Documentation",
              description: "Add new API endpoints to the docs.",
              date: "2025-03-19",
              category: "Documentation",
              active: false,
              newTask: true,
              completed: false,
              failed: false,
          },
          {
              title: "Database Optimization",
              description: "Optimize SQL queries for better performance.",
              date: "2025-03-20",
              category: "Database",
              active: false,
              newTask: false,
              completed: true,
              failed: false,
          },
      ],
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 }
  },
  {
      id: 2,
      firstName: "Faizan",
      email: "employee2@example.com",
      password: "123",
      tasks: [
          {
              title: "Design Landing Page",
              description: "Create a new design for the website landing page.",
              date: "2025-03-18",
              category: "Design",
              active: true,
              newTask: false,
              completed: false,
              failed: false,
          },
          {
              title: "Client Meeting",
              description: "Discuss project requirements with the client.",
              date: "2025-03-19",
              category: "Management",
              active: false,
              newTask: false,
              completed: true,
              failed: false,
          },
          {
              title: "Bug Fixing",
              description: "Fix reported issues from the QA team.",
              date: "2025-03-20",
              category: "Development",
              active: false,
              newTask: false,
              completed: false,
              failed: true,
          },
      ],
      taskCount: { active: 1, newTask: 0, completed: 1, failed: 1 }
  },
  {
      id: 3,
      firstName: "Zaid",
      email: "employee3@example.com",
      password: "123",
      tasks: [
          {
              title: "Social Media Strategy",
              description: "Plan social media content for next month.",
              date: "2025-03-18",
              category: "Marketing",
              active: true,
              newTask: false,
              completed: false,
              failed: false,
          },
          {
              title: "SEO Optimization",
              description: "Improve website ranking with SEO best practices.",
              date: "2025-03-19",
              category: "SEO",
              active: false,
              newTask: true,
              completed: false,
              failed: false,
          },
          {
              title: "Content Writing",
              description: "Write a blog post about new company policies.",
              date: "2025-03-20",
              category: "Content",
              active: false,
              newTask: false,
              completed: true,
              failed: false,
          },
          {
              title: "Ad Campaign Analysis",
              description: "Analyze the performance of recent ad campaigns.",
              date: "2025-03-21",
              category: "Marketing",
              active: false,
              newTask: false,
              completed: false,
              failed: true,
          },
      ],
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 }
  },
  {
      id: 4,
      firstName: "Arham",
      email: "employee4@example.com",
      password: "123",
      tasks: [
          {
              title: "Server Maintenance",
              description: "Perform routine server maintenance.",
              date: "2025-03-18",
              category: "IT",
              active: true,
              newTask: false,
              completed: false,
              failed: false,
          },
          {
              title: "Security Audit",
              description: "Conduct a security audit on internal systems.",
              date: "2025-03-19",
              category: "Security",
              active: false,
              newTask: false,
              completed: false,
              failed: true,
          },
          {
              title: "Software Deployment",
              description: "Deploy the latest version of the software.",
              date: "2025-03-20",
              category: "Development",
              active: false,
              newTask: false,
              completed: true,
              failed: false,
          },
          {
              title: "Network Upgrade",
              description: "Upgrade the office network infrastructure.",
              date: "2025-03-21",
              category: "IT",
              active: false,
              newTask: true,
              completed: false,
              failed: false,
          },
      ],
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 }
  },
  {
      id: 5,
      firstName: "Rehan",
      email: "employee5@example.com",
      password: "123",
      tasks: [
          {
              title: "Team Training Session",
              description: "Conduct training on new project management tools.",
              date: "2025-03-18",
              category: "Training",
              active: true,
              newTask: false,
              completed: false,
              failed: false,
          },
          {
              title: "Product Research",
              description: "Research new market trends for upcoming product launch.",
              date: "2025-03-19",
              category: "Research",
              active: false,
              newTask: false,
              completed: true,
              failed: false,
          },
          {
              title: "Customer Feedback Analysis",
              description: "Analyze recent customer feedback for improvements.",
              date: "2025-03-20",
              category: "Customer Support",
              active: false,
              newTask: true,
              completed: false,
              failed: false,
          },
          {
              title: "Financial Report",
              description: "Prepare a financial report for the last quarter.",
              date: "2025-03-21",
              category: "Finance",
              active: false,
              newTask: false,
              completed: false,
              failed: true,
          },
          {
              title: "Sales Target Review",
              description: "Review the current sales performance against targets.",
              date: "2025-03-22",
              category: "Sales",
              active: false,
              newTask: false,
              completed: false,
              failed: false,
          },
      ],
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 }
  }
];

const admin = [
  {
      id: 1,
      firstName: "Shoaib",
      email: "admin@example.com",
      password: "123",
  },
];
 
  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin};
  }

  // export const setLocalStorage = () => {
  //   if (!localStorage.getItem("employees")) {
  //     localStorage.setItem("employees", JSON.stringify(employees));
  //   }
  //   if (!localStorage.getItem("admin")) {
  //     localStorage.setItem("admin", JSON.stringify(admin));
  //   }
  // };
  
  // export const getLocalStorage = () => {
  //   const employees = JSON.parse(localStorage.getItem("employees")) || [];
  //   const admin = JSON.parse(localStorage.getItem("admin")) || [];
  
  //   return(employees, admin)
  // };