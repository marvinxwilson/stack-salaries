import React from 'react';
import { Link } from 'react-router';


var DataInput = (props) => (

  <div className="data-input">
    <form>
      <input type="city" value={props.city} onChange={props.addCity} className="city-input" placeholder="City" />
      <input type="state" value={props.state} onChange={props.addState} className="state-input" placeholder="State" />
      <input type="education" value={props.education} onChange={props.addEducation} className="education-input" placeholder="Education" />
      <input type="gender" value={props.gender} onChange={props.addGender} className="gender-input" placeholder="Gender" />
      <input type="experience" value={props.experience} onChange={props.addGender} className="experience-input" placeholder="Experience" />
      <input type="salary" value={props.salary} onChange={props.addSalary} className="salary-input" placeholder="Salary" />
      <input type="stack" value={props.stack} onChange={props.addStack} className="stack-input" placeholder="Stack" />
    <button type="submit">Submit</button>
    </form>
  </div>

);

export default DataInput;