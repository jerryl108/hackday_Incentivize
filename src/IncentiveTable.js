import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

function IncentiveTable(props)
{
    return (
      <Table striped bordered condensed hover width="500">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Course</th>
            <th>Due Date</th>
            <th>Incentive</th>
            <th>Currently Held Hostage</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </Table>
    );
}

class IncentiveRow extends Component {
  IncentiveRow(assignment,course,due_date,incentive,hostage_status)
  {
    this.assignment=assignment;
    this.course=course;
    this.due_date=due_date;
    this.hostage_status=hostage_status;
  }
  render() {
    return (
          <tr>
            <td>{this.assignment}</td>
            <td>{this.course}</td>
            <td>{this.due_date}</td>
            <td>{this.incentive}</td>
            <td>{this.hostage_status}</td>
          </tr>
    );
  }
}


export default IncentiveTable;
export { IncentiveRow };
