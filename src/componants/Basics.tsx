// import { Component } from "react";

// interface IEmp {
//   fname: string;
//   lname: string;
//   dept: IDept;
// }
// interface IDept {
//   deptId: number;
//   deptName: string;
// }

// interface IState {
//   emp: IEmp;
//   emps: IEmp[];
// }

// class Basics extends Component<{}, IState> {
//   state: IState = {
//     emp: { fname: "John", lname: "Doe", dept: { deptId: 1, deptName: "HR" } },
//     emps: [
//       { fname: "John", lname: "Doe", dept: { deptId: 1, deptName: "HR" } },
//       { fname: "Jane", lname: "Doe", dept: { deptId: 2, deptName: "Finance" } },
//       { fname: "Jim", lname: "Beam", dept: { deptId: 3, deptName: "IT" } },
//     ],
//   };
//   ChangeName = () => {
//     // this.setState({emp: {...this.state.emp,fname: "Smith", lname: "Mark"}});
//     this.setState({
//       emp: {
//         ...this.state.emp,
//         fname: "Smith",
//         lname: "Mark",
//         dept: { ...this.state.emp.dept, deptId: 2 },
//       },
//     });
//   };
//   render() {
//     return (
//       <>
//         <div>
//           <h2>
//             Employee Name: {this.state.emp.fname} {this.state.emp.lname}
//           </h2>
//           <h2>
//             Employee Department: {this.state.emp.dept.deptId}{" "}
//             {this.state.emp.dept.deptName}
//           </h2>
//           <button onClick={this.ChangeName}>Change Name</button>
//           <hr />
//           <h2>All Employees:</h2>
//           <ul>
//             {this.state.emps.map((e, index) => (
//               <li key={index}>
//                 {e.fname} {e.lname} - {e.dept.deptId} {e.dept.deptName}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </>
//     );
//   }
// }

// export default Basics;
