import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter Your Username" />
            <label>Email</label>
            <input type="email" className="registerInput" placeholder="Enter Your Email" />
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter Your password" />
            <button className="registerButton">Register </button>
        </form>
    <button className="registerLoginButton">Login</button>
    </div>
  )
}
