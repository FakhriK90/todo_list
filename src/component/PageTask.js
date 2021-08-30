import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import './styles.css';

const PageTask = () => {
    return (
        <div className="page">
            <AddTask/>
            <ListTask/>
        </div>
    )
}

export default PageTask
