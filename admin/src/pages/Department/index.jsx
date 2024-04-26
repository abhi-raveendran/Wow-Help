import React, { useState } from 'react';
import axios from '../../../src/components/axios';
import './index.css';

const Department = () => {
    const [inputDep, setInputDep] = useState({
        name: '',
        description: '',
    });

    const [departments, setDepartments] = useState([]);

    const onChange = (e, key) => {
        setInputDep({ ...inputDep, [key]: e.target.value });
    };

    const addDepartment = async () => {
        const response=await axios.post('/department/',inputDep)
    };

    

    return (
        <div className="dep">
            <div className="head">
                <h2>Welcome Admin</h2>
            </div>
            <div className="dep-inputs">
                <input
                    onChange={(e) => onChange(e, 'name')}
                    type="text"
                    placeholder="Department Name"
                />
                <input
                    onChange={(e) => onChange(e, 'description')}
                    type="text"
                    placeholder="Department Description"
                />
                <button onClick={addDepartment}>Add Department</button>

            </div>
            <div className="dep-list">
                {departments.map((dep, index) => (
                    <div key={index} className="dep-item">
                        <h3>{dep.name}</h3>
                        <p>{dep.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Department;
