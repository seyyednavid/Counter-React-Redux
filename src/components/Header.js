import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import classes from "./Header.module.css";

const Header = () => {
  const isAth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(authActions.logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
