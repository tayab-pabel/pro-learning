import React from 'react';
import './Course.css';

const Course = (props) => {
  const data = props.courseObject;
  
  return (
    <div className="single-course text-center p-3 shadow">
      <img src={data.img} alt=""/>
      <h4 className="text-center pt-3">{data.name}</h4>
      <p>Instructor: {data.instructor}</p>
      <h4 className="price">${data.price}</h4>
      <a onClick={() => props.btnClick(data.price)} class="btn rounded-pill px-4">Enroll Now</a>
    </div>
  );
};

export default Course;