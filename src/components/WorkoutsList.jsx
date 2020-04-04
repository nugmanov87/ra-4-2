import React from 'react';

const WorkoutsList = ({ workouts, handleEdit, handleDelete }) => {
  return (
    <table className="ui basic table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Пройдено (км)</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map(workout => (
          <tr key={workout.id}>
            <td>{workout.date}</td>
            <td>{workout.distance}</td>
            <td>
              <button onClick={() => handleEdit(workout.id)}>
                <i className="edit icon"></i>
              </button>
              <button onClick={() => handleDelete(workout.id)}>
                <i className="trash icon"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WorkoutsList;
