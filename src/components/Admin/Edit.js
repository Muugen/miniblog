import React, { Component } from 'react';
import { FaRegHandPointLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Edit extends Component {
    constructor(props) {
        super(props);
        
        this.initState = { 
            id: -1,
            titre:"",
            contenue:"",
            auteur:"",
            image:"",
         }

         this.state = this.initState;
    }

    componentDidMount = ()=>{
        this.setState(this.props.autoShared);
        console.log(this.props.autoShared);
    }
    handleChange = (e)=>{
       
        const {name, type, checked, value} = e.target;
        const val = type === 'checkbox' ? checked : value;
        this.setState({[name]:val});

    }
    handleUpdateSubmit = (e)=>{
        e.preventDefault();
        const img = this.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0];
        const updateArt = {
            id: this.state.id,
            titre: this.state.titre,
            contenue: this.state.contenue,
            auteur: this.state.auteur,
            image: img
        }
        this.props.update(updateArt);
        toast('Article modifiée avec succès', {className:'bg-success text-white fw-bolder'});
    }
    render() {
        const {id, titre, contenue, auteur} = this.state;
       
        return (
            <>
                <div className="row">
                    <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-header text-center"> Formulaire d'édition</div>
                        <div className="card-body">
                        
                            <form className="row g-3 needs-validation" onSubmit={this.handleUpdateSubmit}>
                            <div className="col-md-2">
                                <label htmlFor="id" className="form-label">id</label>
                                <input type="text" readOnly className="form-control"  id="id" name="id" value={id} onChange={this.handleChange}  />
                               
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="titre" className="form-label">Titre</label>
                                <input type="text" className="form-control"  id="titre" name="titre" value={titre} onChange={this.handleChange}  placeholder="Entrer la titre" />
                               
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="contenue" className="form-label">Contenue</label>
                                <input type="text" className="form-control" id="contenue"  name="contenue" value={contenue} onChange={this.handleChange} placeholder="Entrer le modèle" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="auteur" className="form-label">Auteur</label>
                                <input type="text" className="form-control" id="auteur" name="auteur" value={auteur} onChange={this.handleChange} placeholder="Entrer le auteur" />
                               
                            </div>
                            
                            <div className="col-md-12">
                                <label htmlFor="prix" className="form-label">Image</label>
                                <input type="file" className="form-control" id="image" onChange={this.handleChange} name="image"  />
                            </div>
                            
                            <div className="col-12">
                                <button className="btn btn-warning col-12" type="submit">Modifier</button>
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
 
export default Edit;