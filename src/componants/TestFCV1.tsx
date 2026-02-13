import axios from "axios";
import { useEffect, useState } from "react";
import Row from "./Row";

interface IEmp {
  FName: string;
  Lname: string;
}

interface IUser {
  firstName: string;
  lastName: string;
}

interface IUserResponse {
  users: IUser[];
}

function TestFC() {
  const [emps, setEmps] = useState<IEmp[]>([]);
  //    const [msg1, setMessage1] = useState<string>("Hello");
  //    const [msg2, setMessage2] = useState<string>("Bye");

  useEffect(() => {
    console.log("Liked Component Did Mount");

    axios.get<IUserResponse>("https://dummyjson.com/users").then((response) => {
    //   console.log(response.data);
      const newEmps: IEmp[] = response.data.users.map((u) => ({
        FName: u.firstName,
        Lname: u.lastName,
      }));

      setEmps((prevState) => [...prevState, ...newEmps]);
    });
  }, []);

  //     useEffect( () => {
  //         console.log("Liked Component Did Update only on msg1 change");
  //    }, [msg1] );

  //     useEffect( () => {
  //         console.log("Liked Component Did Update only on msg2 change");
  //    }, [msg2] );

  //     useEffect( () => {
  //         console.log("Liked Component Did Update but when msg1 or msg2 changes");
  //    }, [msg1, msg2] );

  // const OnChange = () => {
  //     setEmps([{FName: "Jane", Lname: "Doe"}]);
  // }

  console.log("TestFC Rendered");
  return (
    // <React.Fragment>
    <div>
      {/* <h1>Hello {state.emp.fname} {state.emp.lname}</h1>
       */}
      {/* <button onClick={Change1}>Click Me 1</button> */}
      <hr />
      <h2>Add Employee</h2>
      {/* <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Row variant="edit" emp={emp} OnTextChange={OnChange} />
                        </tbody>
                    </table> */}
      {/* <button onClick={Add}>Add Employee</button> */}
      <hr />
      <h2>Employees</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {emps.map((e, index) => (
            <Row
              key={index}
              variant="display"
              fname={e.FName}
              lname={e.Lname}
              // EditEmp={Edit(index)}
              // RemoveEmp={Remove(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
    // </React.Fragment>
  );
}

export default TestFC;
