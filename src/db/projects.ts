export const projects = [
  {
    name: "Website Revamp",
    isActive: true,
    teams: [
      {
        name: "Design Team",
        members: [
          { name: "Sophia Walker", image: "sophia.jpg" },
          { name: "Liam Moore", image: "liam.jpg" },
        ],
        tasks: [
          {
            name: "Create Wireframes for Landing Page",
            assignedTo: ["Sophia Walker"],
            deadline: "2025-02-20",
            status: "In Progress",
          },
          {
            name: "Design Mobile Layouts",
            assignedTo: ["Liam Moore"],
            deadline: "2025-03-01",
            status: "Not Started",
          },
          {
            name: "Finalize Branding Colors",
            assignedTo: ["Sophia Walker"],
            deadline: "2025-03-05",
            status: "Completed",
          },
        ],
      },
      {
        name: "Development Team",
        members: [
          { name: "Emma Scott", image: "emma.jpg" },
          { name: "James Carter", image: "james.jpg" },
          { name: "Noah Brown", image: "noah.jpg" },
        ],
        tasks: [
          {
            name: "Set Up Frontend Framework",
            assignedTo: ["Emma Scott"],
            deadline: "2025-03-10",
            status: "In Progress",
          },
          {
            name: "Develop API Integrations",
            assignedTo: ["James Carter", "Noah Brown"],
            deadline: "2025-03-20",
            status: "Not Started",
          },
        ],
      },
      {
        name: "QA Team",
        members: [
          { name: "Olivia Adams", image: "olivia.jpg" },
          { name: "William Garcia", image: "william.jpg" },
        ],
        tasks: [
          {
            name: "Perform Usability Testing",
            assignedTo: ["Olivia Adams"],
            deadline: "2025-03-25",
            status: "In Progress",
          },
          {
            name: "Test Cross-Browser Compatibility",
            assignedTo: ["William Garcia"],
            deadline: "2025-03-28",
            status: "Not Started",
          },
          {
            name: "Conduct Accessibility Audit",
            assignedTo: ["Olivia Adams"],
            deadline: "2025-03-30",
            status: "Completed",
          },
        ],
      },
    ],
  },
  {
    name: "Mobile App Development",
    isActive: false,
    teams: [
      {
        name: "Backend Team",
        members: [
          { name: "Ethan Green", image: "ethan.jpg" },
          { name: "Lucas Hall", image: "lucas.jpg" },
        ],
        tasks: [
          {
            name: "Set Up Database Schema",
            assignedTo: ["Ethan Green"],
            deadline: "2025-04-05",
            status: "Completed",
          },
          {
            name: "Develop Authentication APIs",
            assignedTo: ["Lucas Hall"],
            deadline: "2025-04-10",
            status: "In Progress",
          },
        ],
      },
    ],
  },
  {
    name: "AI Research Initiative",
    isActive: false,
    teams: [
      {
        name: "Research Team",
        members: [
          { name: "Hannah Wilson", image: "hannah.jpg" },
          { name: "Benjamin King", image: "benjamin.jpg" },
          { name: "Grace Martin", image: "grace.jpg" },
        ],
        tasks: [
          {
            name: "Collect Training Data",
            assignedTo: ["Hannah Wilson"],
            deadline: "2025-05-15",
            status: "In Progress",
          },
          {
            name: "Analyze Data Bias",
            assignedTo: ["Benjamin King"],
            deadline: "2025-05-20",
            status: "Not Started",
          },
          {
            name: "Optimize Neural Network Architecture",
            assignedTo: ["Grace Martin"],
            deadline: "2025-05-25",
            status: "Not Started",
          },
        ],
      },
      {
        name: "DevOps Team",
        members: [{ name: "Mia Clark", image: "mia.jpg" }],
        tasks: [
          {
            name: "Set Up Cloud Infrastructure",
            assignedTo: ["Mia Clark"],
            deadline: "2025-05-30",
            status: "Completed",
          },
        ],
      },
    ],
  },
  {
    name: "E-Commerce Enhancement",
    isActive: false,
    teams: [
      {
        name: "Frontend Team",
        members: [
          { name: "Amelia Perez", image: "amelia.jpg" },
          { name: "Alexander Young", image: "alexander.jpg" },
        ],
        tasks: [
          {
            name: "Update Homepage Design",
            assignedTo: ["Amelia Perez"],
            deadline: "2025-06-15",
            status: "In Progress",
          },
          {
            name: "Add New Filters to Product Page",
            assignedTo: ["Alexander Young"],
            deadline: "2025-06-20",
            status: "Not Started",
          },
          {
            name: "Fix Bugs in Cart Functionality",
            assignedTo: ["Amelia Perez"],
            deadline: "2025-06-25",
            status: "Completed",
          },
        ],
      },
      {
        name: "Marketing Team",
        members: [
          { name: "Chloe Rivera", image: "chloe.jpg" },
          { name: "Jack Turner", image: "jack.jpg" },
          { name: "Harper Collins", image: "harper.jpg" },
        ],
        tasks: [
          {
            name: "Launch Social Media Campaign",
            assignedTo: ["Chloe Rivera"],
            deadline: "2025-07-01",
            status: "In Progress",
          },
          {
            name: "Create Video Advertisements",
            assignedTo: ["Jack Turner"],
            deadline: "2025-07-05",
            status: "Not Started",
          },
          {
            name: "Publish Blog Series",
            assignedTo: ["Harper Collins"],
            deadline: "2025-07-10",
            status: "Completed",
          },
        ],
      },
    ],
  },
];
