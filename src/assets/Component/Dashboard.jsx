// StudentDashboard.js
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses from the API
    const fetchEnrolledCourses = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/81db1f05-25c1-490c-aa46-e25fda26846d/enrolled-courses');
        const data = await response.json();
        setEnrolledCourses(data.enrolledCourses);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {enrolledCourses.map(enrolledCourse => (
          <li key={enrolledCourse.id}>
            {enrolledCourse.name} - {enrolledCourse.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;


