import React from 'react';
import { Pagination } from 'react-bootstrap';
import WFStatus from "../Views/WorkFlowStatus.js";

const WorkFlowFullList = ({ submissions = [] }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(submissions.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const submissionsList = submissions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="card">
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th style={{ position: 'relative' }}>
                Status</th>
              <th>From</th>
              <th>To</th>
              <th>Customer Address</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {submissionsList.map((submission, index) => (
              <tr key={index}>
                <td>{`Work Flow: ${submission.location_status}`}</td>
                <td style={{ position: 'relative'}}>
                <WFStatus text={submission.workflow_status}/>
                </td>
                <td>{submission.from}</td>
                <td>{submission.to}</td>
                <td>{submission.customer_address}</td>
                <td>{submission.due_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end">
        <Pagination className="pagination" size="sm" activePage={currentPage} items={totalPages} onSelect={handlePageChange} />
      </div>
    </div>
  );
};

export default WorkFlowFullList;
