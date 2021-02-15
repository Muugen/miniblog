import React, { Component } from 'react';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Ajout extends Component {
    constructor(props) {
        super(props);
        
        this.initState = { 
            titre:"",
            contenue:"",
            url:"",
            image:"",
            prix:0,          
         }

         this.state = this.initState;
    }

    handleChange = (e)=>{
       
        const {name, type, checked, value} = e.target;
        const val = type === 'checkbox' ? checked : value;
        this.setState({[name]:val});

    }
    handleSubmit = (e)=>{
        e.preventDefault();
        let img = '';
        if(this.state.image){

            img = this.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0];
        }
        const newArt = {
            titre: this.state.titre,
            contenue: this.state.contenue,
            url: this.state.url,
            prix: this.state.prix,
            image: img
        }
        this.props.getArticle(newArt);

        this.setState(this.initState);
        toast('Article ajoutée avec succès!', {className:'bg-success text-white fw-bolder'});
        //window.location.reload(true);

    }
    render() {
        const {titre, contenue, url, prix,} = this.state;
       
        return (
            <>
                <div className="row">
                    <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-header text-center"> Formulaire d'ajout</div>
                        <div className="card-body">
                        
                            <form className="row g-3 needs-validation" onSubmit={this.handleSubmit}>
                            <div className="col-md-6">
                                <label htmlFor="titre" className="form-label">titre</label>
                                <input type="text" required  className="form-control"  id="titre" name="titre" value={titre} onChange={this.handleChange}  placeholder="Entrer la titre" />
                               
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="contenue" className="form-label">contenue</label>
                                <input type="text" required className="form-control" id="contenue"  name="contenue" value={contenue} onChange={this.handleChange} placeholder="Entrer le modèle" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="url" className="form-label">Lien</label>
                                <input type="text" required className="form-control" id="url" name="url" value={url} onChange={this.handleChange} placeholder="Entrer le lien de l'article" />
                               
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="prix" className="form-label">Prix</label>
                                <input type="number" required className="form-control" id="prix" value={prix} onChange={this.handleChange}  name="prix" placeholder="Entrer le prix" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="prix" className="form-label">Image</label>
                                <input type="file" required className="form-control" id="image" onChange={this.handleChange} name="image"  />
                            </div>
                            
                            <div className="col-12">
                                <button className="btn btn-primary col-12" type="submit">Soumettre</button>
                            </div>
                            </form>
                        </div>
                    </div>
                    <Link to="/Admin/reload"> <FaRegHandPointLeft size="25"/> </Link>
                    </div>
                </div>
               <ToastContainer/>
            </>
          );
    }
}
 
export default Ajout;