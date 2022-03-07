import React, { useState } from "react";
import data from "./DetailsDoc.json";
import "./StudentsDetails.css";

const StudentsDetails = () => {
  const [contacts, setContacts] = useState(data);

  return (
    <div className="main-container">
      <h1 className="studentDetails">Students Details</h1>
      <button className="btn" id="btn">
        Add New
      </button>

      <table>
        <thead>
          <tr>
            <th>Names</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.age}</td>
              <td>{contact.course}</td>
              <td>{contact.batch}</td>
              <td>
                <a href="">{contact.change}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsDetails;
