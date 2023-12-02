
import "./Form.css"; // Import your CSS file
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/auth.action";
// import { useNavigate } from "react-router-dom";

const Form = () => {

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };
  // const history = useNavigate();

  {
    /* <button onClick={handleLogin} className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </button> */
  }

  {
    /* <button className="hidden" onClick={handleLoginClick} id="login">
              Sign In
            </button> */
  }

  return (
    <div className="form-container">
      <form >
       
          <span
            type="submit"
            onClick={handleLogin}
            className="form-submit-btn"
          >
            LOGIN WITH GOOGLE
          </span>
      </form>
    </div>
  );
};

export default Form;
