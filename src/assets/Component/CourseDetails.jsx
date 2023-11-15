// CourseDetails.js
    import React, { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';

    const CourseDetails = () => {
      const { id } = useParams();
      const [course, setCourse] = useState(null);

      useEffect(() => {
        // Fetch course details from the API based on the ID
        const fetchCourseDetails = async () => {
          try {
            const response = await fetch(`https://mocki.io/v1/81db1f05-25c1-490c-aa46-e25fda26846d/course/${id}`);
            const data = await response.json();
            setCourse(data);
          } catch (error) {
            console.error('Error fetching course details:', error);
          }
        };

        fetchCourseDetails();
      }, [id]);

      if (!course) {
        return <div>Loading...</div>;
      }

      return (
        <div>
          <h2>{course.name}</h2>
          <p>Instructor: {course.instructor}</p>
          {/* Display other course details here */}
        </div>
      );
    };

    export default CourseDetails;
