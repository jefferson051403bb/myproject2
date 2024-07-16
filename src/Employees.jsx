import React from 'react';
import './Employees.css';

const employees = [
  { name: 'Bustamante', position: 'Manager', salary: 80000, status: 'Active' },
  { name: 'Micheal', position: 'Developer', salary: 85000, status: 'Active' },
  { name: 'Jhon', position: 'Designer', salary: 72000, status: 'Active' },
  { name: 'Ericson', position: 'Developer', salary: 76000, status: 'Active' },
  { name: 'Brigildo', position: 'Manager', salary: 82000, status: 'Active' },
  { name: 'Jake', position: 'Developer', salary: 78000, status: 'Active' },
  { name: 'Rexy', position: 'Manager', salary: 81000, status: 'Active' },
  { name: 'Yang', position: 'Designer', salary: 74000, status: 'Active' },
  { name: 'Jefferson', position: 'Designer', salary: 70000, status: 'Not Active' },
  { name: 'Ryan', position: 'Developer', salary: 79000, status: 'Not Active' },
];

const Employee = ({ employee, index }) => (
  <tr>
    <td>{index + 1}</td>
    <td>{employee.name}</td>
    <td>{employee.position}</td>
    <td>{employee.status === 'Active' ? employee.salary : 'N/A'}</td>
    <td>{employee.status}</td>
  </tr>
);

const Employees = () => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>No.</th>
          <th>Employee Names</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <Employee key={index} employee={employee} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Employees;
