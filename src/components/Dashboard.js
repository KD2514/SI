import React from "react";
import Card from "./Card.js";
import { DashboardContainer } from "D:/SI/src/style.js"; // Add `.js` extension


const courses = [
  { title: "Foundations of SE", term: "Winter 2025", color: "green" },
  { title: "Project Management", term: "Winter 2025", color: "lightblue" },
  { title: "Software Dev Methods", term: "Winter 2025", color: "darkblue" },
  { title: "School of Graduate Studies", term: "Ongoing", color: "teal" },
];

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <div className="grid">
        {courses.map((course, index) => (
          <Card key={index} title={course.title} term={course.term} color={course.color} />
        ))}
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
