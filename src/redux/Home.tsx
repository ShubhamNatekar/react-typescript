

import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "./slice";
interface IProps {

}

function Home(props: IProps) {
    const info = useSelector((state: any) => state.info);
    const dispatch = useDispatch();
    return (<>
                    <h1>Home</h1>
                    <h1>Name = {info.name}</h1>
                    <h1>Age = {info.age}</h1>
                    <button onClick={() => dispatch(changeName({name: "Infosys"}))}>Update Name</button>
                    <button onClick={() => dispatch(changeAge({age: 50}))}>Update Age</button>
            </>);
}

export default Home;