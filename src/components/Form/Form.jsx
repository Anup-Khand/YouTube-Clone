
import "./Form.css"; // Import your CSS file
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/auth.action";
// import { useNavigate } from "react-router-dom";
import search from '../../assets/search.png'

const Form = () => {

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };


  return (
    <div className="form-container">
      <form>
        <span type="submit" onClick={handleLogin} className="form-submit-btn">
          <img
            className="signin-img"
            src={search}
            alt=""
          />
          LOGIN WITH GOOGLE
        </span>
      </form>
    </div>
  );
};

export default Form;
