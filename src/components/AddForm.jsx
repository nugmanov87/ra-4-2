import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WorkoutModel from '../model/WorkoutModel';
import shortid from 'shortid';

const AddForm = ({ currentWorkout, handleAdd }) => {
  const [form, setForm] = useState({ date: '', distance: '' });

  useEffect(() => {
    if (currentWorkout) {
      setForm({ date: currentWorkout.date, distance: currentWorkout.distance });
    }
  }, [currentWorkout]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const workout = new WorkoutModel(
      shortid.generate(),
      form.date,
      form.distance,
    );
    handleAdd(workout);
    setForm({ date: '', distance: '' });
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="two fields">
        <div className="field">
          <label htmlFor="date">Дата</label>
          <div className="ui input left icon">
            <i className="calendar icon"></i>
            <input
              type="date"
              id="date"
              name="date"
              className="ui calendar"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="distance">Пройдено (км)</label>
          <input
            type="number"
            step="any"
            name="distance"
            id="distance"
            value={form.distance}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button className="ui button" type="submit">
        Добавить
      </button>
    </form>
  );
};

AddForm.propTypes = {
  setWorkouts: PropTypes.func.isRequired,
};

export default AddForm;
