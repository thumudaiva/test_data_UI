// Dataset.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaPlus, FaDatabase } from 'react-icons/fa'; // Import icons from react-icons
import './Dataset.css';

const Dataset = () => {
  return (
    <div className="dataset-container">
      <h6>Get Started with AI Services</h6>
      <h1>Forecasting</h1>

      <h6>
        <u>Pipeline UUID:</u> <span className="uuid-text">79137460-9369-4b5e-b842-f6588686421b</span>
      </h6>

      <h4>Experimental Datasets</h4>
     {/* Paragraph with specified text and line breaks */}
     <p>Datasets below are available for experiment runs.</p>
      <p>Data configurations from remote sources can be re-used</p>
      <p>when moving to production, so it is recommended to perform</p>
      <p>validations here. OK.</p>

      <div className="button-group">
        <Button className="dataset-button" variant="light">
          <FaPlus className="button-icon" /> Add Dataset
        </Button>
        <Button className="dataset-button" variant="light">
          <FaDatabase className="button-icon" /> My Dataset
        </Button>
        <Button className="dataset-button" variant="light">
          <FaDatabase className="button-icon" /> My Other Dataset
        </Button>
      </div>
    </div>
  );
};

export default Dataset;
