import InputArea from "../Component/Input and label/InputArea";
import "./Form.css";
import Staticpage from "./Statics_page";
function Form() {
  return (
    <div className="container">
      <div className="page">
        <Staticpage />
      </div>

      <div className=" main">
        <h1>Create your account</h1>
        <h4>11% free and easy</h4>
        <div className="fome-area">
          <InputArea
            label="your name"
            placeholder="enter your name"
            type="text"
          />

          <InputArea label="E-mail and phone" placeholder="enter your mail " />

          <InputArea label="Password" placeholder="password " type="password" />

          <input className="checkbox" type="checkbox"></input>
          <label className="checkwrite" style={{ marginLeft: "8px" }}>
            Login by email or phone number
          </label>

          <div>
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
