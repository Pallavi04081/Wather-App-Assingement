import "./login.css"


const Login = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header">
                        <h1>Member Login</h1>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <input type="text" class="form-control" id="exampleInputtext" placeholder="username" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button class="btn btn-primary">Login</button>
                        <div style={{margin:"auto"}}>
                        <p>Register</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;