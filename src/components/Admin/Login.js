import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            login:'',
            pass:'',
            loginError:'',
            passError:'',
            errorMessage:''
         }
    }
    handleChange = (e) =>{
        const {name, value} = e.target;
        let val = value;

        let err1 = '', err2 = '';
        if(name === "login"){
            if(val === ''){
                err1 = <strong>Le champ login est réquis</strong>
            }
        }else if(name==="pass"){
            if(val === ''){
                err2 = <strong>Le champ mot de passe est réquis</strong>
            }
        }
        this.setState({loginError:err1, passError:err2 });
        this.setState({[name]:val});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {login, pass} = this.state;
        if(login !== '' && pass!==''){
            if(login === 'Admin' && pass ==='123'){
                const d = new Date();
                const cle = d.toLocaleDateString();// 
                sessionStorage.setItem('token',cle);
                this.props.history.push('/Admin');
                window.location.reload();
            }else{
                const error  = 'Le login et/ou le mot de passe ne correspondent pas';
                this.setState({errorMessage: error});
        }
           
        }else{
            const error  = 'Veuillez saisir les deux champs svp';
            this.setState({errorMessage: error});
        }
    }
    render() { 
        return ( 
            <>
            
            <div className="card">
                {this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}
                <div className="card-header text-center h4">Connexion</div>
                <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-1">
                        <label htmlFor="login" className="form-label">Login</label>
                        <input type="text" onChange={this.handleChange} className="form-control" id="login" name="login" placeholder="Entrez votre identifiant..."/>
                    </div>
                    {this.state.loginError}
                    <div className="mb-1">
                        <label htmlFor="pass" className="form-label">Mot de passe</label>
                        <input type="password" onChange={this.handleChange} className="form-control" id="pass" name="pass" placeholder="Entrez votre mot de passe..."/>
                    </div>
                    {this.state.passError}
                    <button type="submit" className="btn btn-primary col-12">Soumettre</button>
                    </form>
                </div>
            </div>
            
            </>
         );
    }
}
 
export default Login;