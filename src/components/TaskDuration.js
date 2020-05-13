import React from 'react';

const TaskDuration = (props) => {
  const { time } = props;

  return (
    <div>
      <div className="mt-20">
        <strong>Duration: </strong>
        {time.duration}
      </div>
      <div className="mt-20">
        <strong>Start Date: </strong>
        {time.startdate}
      </div>
      <div className="mt-20">
        <strong>End Date: </strong>
        {time.enddate}
      </div>
    </div>
  );
}
 
export default TaskDuration;