import React from "react";
import "./Login.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: {},
    };
  }
  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };
  validateForm = data => {
    const error = {};

    if (data.password.length < 3) {
      error.password = "Паролата е твърде късо.";
    }
    if (data.username.length < 3) {
      error.username = "Името е твърде късо.";
    }

    return error;
  };

  handleSubmit = async () => {
    const errors = this.validateForm(this.state);
    const isValid = Object.values(errors).filter(Boolean).length <= 0;

    if (!isValid) {
      this.setState({ error: errors });
      return;
    }

    this.setState({ request: "" });
    const login = {
      username: this.state.username,
      password: this.state.password
    };
  await  axios
      .post("http://localhost:5000/auth/", login)
      .then(req => localStorage.setItem("jwt", req.data.token))
      .catch(() => this.setState({ request: "failed" }));
    window.location.href = "/admincp";
  };
  render() {
    return (
      <div className="form">
        <div className="logo">
          EasyTrade
          <FontAwesomeIcon className="icon" icon={faRegistered} />
        </div>
        <div className="register_form">Вход</div>
        <div className="login">
          <div>
            <label className="label_username">Име</label>
            <input
              className="input_form"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <div>
              {this.state.error.username === undefined
                ? ""
                : this.state.error.username}
            </div>
          </div>
          <div>
            <label className="label_password">Парола</label>
            <input
              className="input_form"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div>
              {this.state.error.password === undefined
                ? ""
                : this.state.error.password}
            </div>
          </div>
          <button onClick={this.handleSubmit} className="submit">
            Влез
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;

// export default function Login(props) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//
//     function validateForm() {
//         return email.length > 0 && password.length > 0;
//     }
//
//     function handleSubmit(event) {
//         event.preventDefault();
//     }
//
//     return (
//         <div>
//             <NavBar />
//             <div className="Login">
//                 <form onSubmit={handleSubmit}>
//                     <FormGroup controlId="email" bsSize="large">
//                         <FormLabel>Имейл адрес</FormLabel>
//                         <FormControl
//                             autoFocus
//                             type="email"
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                         />
//                     </FormGroup>
//                     <FormGroup controlId="password" bsSize="large">
//                         <FormLabel>Парола</FormLabel>
//                         <FormControl
//                             value={password}
//                             onChange={e => setPassword(e.target.value)}
//                             type="password"
//                         />
//                     </FormGroup>
//                     <Button block bsSize="large" disabled={!validateForm()} type="submit">
//                         Вход
//                     </Button>
//                 </form>
//             </div>
//         </div>
//
//     );
// }
