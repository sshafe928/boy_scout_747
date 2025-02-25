const events = [
    {
      title: "New Year Kickoff Meeting",
      start: new Date(2025, 0, 3), // January 3rd
      end: new Date(2025, 0, 5),   // January 5th
      allDay: true,
      resource: { location: "Conference Room A" },
    },
    {
      title: "Product Launch Planning",
      start: new Date(2025, 0, 15), // January 15th
      end: new Date(2025, 0, 17),   // January 17th
      allDay: false,
      resource: { organizer: "John Doe" },
    },
    {
      title: "Team Building Retreat",
      start: new Date(2025, 0, 25), // January 25th
      end: new Date(2025, 0, 29),   // January 29th
      allDay: true,
      resource: { venue: "Mountain Lodge" },
    },
    {
      title: "Quarterly Review Meeting",
      start: new Date(2025, 1, 5), // February 5th
      end: new Date(2025, 1, 6),   // February 6th
      allDay: false,
      resource: { department: "Finance" },
    },
    {
      title: "Hackathon",
      start: new Date(2025, 1, 20), // February 20th
      end: new Date(2025, 1, 25),   // February 25th
      allDay: true,
      resource: { teams: ["DevOps", "AI", "Frontend"] },
    },
  ];

export default events