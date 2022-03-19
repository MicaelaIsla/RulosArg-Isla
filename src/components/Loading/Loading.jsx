import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
    return (
        <div className="loading">
          <Spinner animation="grow" variant="info" />
        </div>

    );
};

export default Loading;