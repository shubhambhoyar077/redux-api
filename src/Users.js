import { getUsers } from "./redux/users/usersSclice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Users() {
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.isLoading);
  const err = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getUsers());
  }, [dispatch]);
  if(loading){
    return (
      <h3>Loading...</h3>
    );
  }else if(err){
    return (
      <h3>{err}</h3>
    );
  }else{
    return (
      <div>
        <h1>Name</h1>
        {users.map((element, index) => {
          return (
            <li key={index}>
              <div>First:-{element.name.first} Last:-{element.name.last}</div>
              <div></div>
            </li>
          );
        })}
      </div>
    );
  }
}