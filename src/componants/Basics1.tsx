// import { Component, type ChangeEvent } from 'react';
// import Row from './Row';
// // import UI from './UI';
// type IProps = Record<string, never>;

// interface IEmp{
//     fname: string;
//     lname: string;
// }

// interface IState {
//    emp : IEmp;
//    emps : IEmp[];
// }
 
// class Basics1 extends Component<IProps, IState> {
//     state: IState = {
//                         emp :  { fname: "", lname: "" },
//                         emps : []
//                     };
//     Change1 = () => {  
//         this.setState({ emp: { ...this.state.emp, fname: "Jane" } });
//     }

//     OnTextChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const copyEmp: IEmp = { ...this.state.emp };
//         const name = e.target.name as keyof IEmp;
//         copyEmp[name] = e.target.value;
//         this.setState({ emp: copyEmp });
//     }
//     Add = () => {
//         const copyEmps: IEmp[] = [ ...this.state.emps ];
//         copyEmps.push(this.state.emp);
//         this.setState({ emps: copyEmps });
//        // this.setState({ emps: [...this.state.emps, this.state.emp] });
//         this.setState({ emp: { fname: "", lname: "" } });
//     }
//     Edit = (index: number) => () => {
//         const empToEdit: IEmp = this.state.emps[index];
//         this.setState({ emp: empToEdit });
//     }
        
//     Remove = (index: number) => () => {
//         this.setState({ emps: this.state.emps.filter((_, i) => i !== index) });
//     }

//     MyFetch(method: 'GET', url: string): Promise<unknown> {
//         return new Promise(() => {
//             const helper = new XMLHttpRequest();
//             helper.onreadystatechange = function () {
//                 if (helper.status >= 200 && helper.readyState === 4) {
//                     return;
//                 }
//             };

//             helper.open(method, url);
//             helper.send();
//         });
//     }

//     async componentDidMount() {
//         const data = (await this.MyFetch('GET', 'https://dummyjson.com/users')) as {
//             users: Array<{ firstName: string; lastName: string }>;
//         };
//         this.setState({
//             emps: data.users.map((u) => ({ fname: u.firstName, lname: u.lastName })),
//         });
//     }

//     render() 
//     {
//         return (// <React.Fragment>
//                 <div>
//                     {/* <h1>Hello {this.state.emp.fname} {this.state.emp.lname}</h1>
//                      */}
//                     {/* <button onClick={this.Change1}>Click Me 1</button> */}
//                     <hr />
//                     <h2>Add Employee</h2>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>First Name</th>
//                                 <th>Last Name</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <Row variant="edit" emp={this.state.emp} OnTextChange={this.OnTextChange} />
//                         </tbody>
//                     </table>
//                     <button onClick={this.Add}>Add Employee</button>
//                     <hr />
//                     <h2>Employees</h2>
//                     <table> 
//                         <thead>
//                             <tr>
//                                 <th>First Name</th> 
//                                 <th>Last Name</th>
//                                 <th>Edit</th>
//                                 <th>Remove</th>
//                             </tr>
//                         </thead>
//                        <tbody>
//                          {this.state.emps.map((e, index) => (
//                             <Row
//                                 key={index}
//                                 variant="display"
//                                 fname={e.fname}
//                                 lname={e.lname}
//                                 EditEmp={this.Edit(index)}
//                                 RemoveEmp={this.Remove(index)}
//                             />
//                          ))}
//                        </tbody>
//                     </table>
//                 </div>
//                 // </React.Fragment>
//          );
//     }
// }
 
// export default Basics1;