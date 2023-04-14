import logo  from '../images/logo.svg'
import '../styles/registration.css'

const LoginPage = () => {
    const checkLogin = ()=>{
        console.log("test")

        return true
    }
    return (
        <div className="registration-wrapper">
        <div className="main-body">
            <section className="main-body-section">
                <div className="content-box flex">
                    <form action="/login" method="post"  onSubmit={checkLogin}>
                        <div className="outer-container">
                            <div className="top-logo-container">
                                <img src={logo} width="100px" alt="logo" />
                            </div>
                       
                       
                            <div className="inner-container">
                                
                                <div className="head-container"> 
                                    <h3 className="head-text">Welcome Back</h3>
                                </div>
                                <div className="">
                                    
                
                                    <div className="email-box flex flex-col">
                                        <label className="label-text" htmlFor="useremail">Email</label>
                                        <input className="text-box" id="loginEmail" type="text" name="useremail" />
                                    </div>
                
                                    <div className="password-box flex flex-col" >
                                        <label className="label-text" htmlFor="password">Password</label>
                                        <input className="text-box" id="loginPass" type="password" name="password" />
                                        <div id="login-warning" className="red login-warning"><label className="red label-test">  err msg</label> </div>
                                    </div>

                                    <div>
                                        <p className="label-text" >Forgot Password? <a className="link-golden" href="/Login">Click Here</a></p>
                                    </div>
                
                
                                    <div className="submit-box flex">
                                        <input type="submit" className="submitBtn" value="Login" />
                                    </div>
                
                                    <div className="bottom-text">
                                        <p className="label-text" >Don't have an account? <a className="link-golden" href="/register">Sign up Here</a></p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                
                    </form>
                    <div className="bottom-logo-container">
                        <img src="/images/bottom-logo.png" width="150px" alt="" />
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default LoginPage