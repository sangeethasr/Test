import React, {useState, useEffect} from "react";

const employees = [
    { id: 1,
    name: 'Alice',
    role: 'Developer',
    department: 'Engineering'
    },
    { id: 2,
    name: 'Bob',
    role: 'Designer',
    department: 'UI/UX'
    },
    { id: 3,
    name: 'Charlie',
    role: 'Manager',
    department: 'Sales'
    },
    { id: 4,
    name: 'Alice',
    role: 'Developer',
    department: 'Engineering'
    },
    { id: 5,
    name: 'Bob',
    role: 'Designer',
    department: 'UI/UX'
    },
    { id: 6, name: 'Charlie', role: 'Manager', department: 'Sales' },
    ];

const EmployeeList =()=>{

    const [employeList, setEmployeList] = useState(employees);
    

    return(
        <>
        {
            employees.map((employee)=> (
                <div key={employee.id} style={{border: "1px solid black"}}>
                    <p>name: {employee.name}</p>
                    <p>name: {employee.role}</p>
                    <p>name: {employee.department}</p>
                </div>
            ))
        
    }
        </>
    )
}

export default EmployeeList;