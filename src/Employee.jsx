import React from "react";

const Employee = (props) => {
    const { firstName: primeiroNome, lastName } = props;
    return (
        <div>
            <h6> Employee Name: {primeiroNome} {lastName} </h6> 
        </div>
    );
};

export default Employee;