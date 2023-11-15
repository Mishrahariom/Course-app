// CourseListing.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseListing = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the API
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/81db1f05-25c1-490c-aa46-e25fda26846d');
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Course Listing</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListing;
