import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container">
                <div className="login">
                    <h1 className="display-4">EXAIN</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1>Inicia sesion</h1>
                    </div>
                    <div className="col-12">
                        <div className="custom-card">
                            <br/>
                            <label>Correo</label>
                            <br/>
                            <input type="email"></input>
                            <br/>
                            <label>Contraseña</label>
                            <br/>
                            <input type="password"></input>
                            <br/>
                            <br/>
                            <button onClick={()=>this.props.onClick()}>Ingresar</button>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;