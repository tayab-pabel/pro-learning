import React from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import fakeData from '../../fakeData/fakeData';
import Cart from '../Cart/Cart';
import './Courses.css';

const Courses = () => {
  const courseData = fakeData;

  const [price, setPrice] = useState([]);
  const btnClick = (Price) => {const newPrice = [...price, Price]; setPrice(newPrice)}

  return (
    <div className="courses-container mt-3">
      <div className="row m-0">
        <div className="col-md-9">
          <div className="course-container d-flex flex-wrap justify-content-center">
          {
            courseData.map((course) => <Course key={course.key} btnClick={btnClick} courseObject={course}></Course>)
          }
          </div>
        </div>
        <div className="col-md-3">
          <div className="cart-container">
              <Cart orderedCourseValue={price}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;