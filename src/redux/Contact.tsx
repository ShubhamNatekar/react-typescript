import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./slice";


function Contact() 
{
    const info = useSelector((state: any) => state.info);
    const dispatch = useDispatch();

    return (<>
                    <h1>Contact PAGE</h1>
                    <h1>Name Data Is = {info.name}</h1>

                    <input type="text" value={info.name} 
                           onChange={(e) => 
                            {
                            //   setContactName(e.target.value);
                              dispatch(changeName({name: e.target.value}))
                            }}></input>

                    {/* <button onClick={() => dispatch(changeName({name: contactName}))}>Update Name</button> */}
            </>);
}

export default Contact;