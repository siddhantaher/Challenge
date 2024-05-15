import React, { useState } from 'react';
import "../survey.css"
import challengeImage from "../stock-vector-versus-vs-comics-style-background-vertical-template-orange-and-blue-comic-book-style-background-2320000483.jpg"
function SurveyForm() {
  const [formData, setFormData] = useState({
    name: '',
    interest: '',
    email: '',
    challenge: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can send this data to your server or perform any other action
  };

  return (
    <div className="survey">
        <div className='challengeImage'>
       
        </div>
       
      <h2>Survey Form</h2>
      <form onSubmit={handleSubmit} className='surveyForm'>
        <div className="formElements">
          <label htmlFor="name">Name:</label>
          <input
            className='surveyElement'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formElements">
          <label htmlFor="interest">Area of Interest:</label>
          <input
            className='surveyElement'
            type="text"
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formElements">
          <label htmlFor="email">Email:</label>
          <input
            className='surveyElement'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formElements">
          <label htmlFor="challenge">Personal Challenge:</label>
          <textarea
            className='surveyElement'
            id="challenge"
            name="challenge"
            value={formData.challenge}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" class="Submit">Submit</button>
      </form>
    </div>
  );
}

export default SurveyForm;
