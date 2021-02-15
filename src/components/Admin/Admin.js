import React, { Component } from 'react';
import { BsFillPlusSquareFill } from "react-icons/bs";
import Ajout from './Ajout';
import Edit from './Edit';
import Liste from './Liste';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            artData: [
                {   id:1, 
                    titre: 'Développeurs et Métiers réunis en 2021 ?', 
                    contenue: 'Low-code et massification du travail à distance pousseraient responsables du développement applicatif et décideurs métiers hors de leur zone de confort.', 
                    url: 'https://www.silicon.fr/developpeurs-metiers-reunis-2021-350381.html', 
                    auteur: 'Ariane Beky', 
                    image: 'développeur.png'
                },
                {   id:2, 
                    titre: 'GitLab : le retour d’expérience de Veepee', 
                    contenue: 'Comment GitLab Enterprise a permis au cybermarchand européen Veepee de réduire de « quatre jours à quelques minutes » ses déploiements applicatifs en production.', 
                    url: 'https://www.silicon.fr/gitlab-retour-experience-veepee-351585.html', 
                    auteur: 'Ariane Beky', 
                    image: 'GitLab.png'
                },
                {   id:3, 
                    titre: 'GitHub nie tout piratage mais pas toute fuite de code source', 
                    contenue: 'Confronté à une prétendue fuite de code source, GitHub n’en dément pas l’authenticité, mais en minimise l’ampleur et exclut tout piratage.', 
                    url: 'https://www.silicon.fr/github-puratage-fuite-code-source-350885.html', 
                    auteur: 'Clément Bohic', 
                    image: 'GitHub.jpg'
                },
                {   id:4, 
                    titre: '«Confusion de dépendances» : le strike à 140 000 $ d’un white hat', 
                    contenue: 'D’Apple à Microsoft, un chercheur a mis à défaut la sécurité de dizaines de grandes entreprises en exploitant une faille dans les gestionnaires de paquets officiels de plusieurs langages de programmation.', 
                    url: 'https://www.silicon.fr/confusion-dependances-strike-white-hat-361442.html', 
                    auteur: 'Clément Bohic', 
                    image: 'Security.jpg'
                }
            ],
            result: [],
            editForm: false,
            indexMod: -1,
            editArt: {id:-1, titre:'', contenue:'', url:'', image:'', auteur:''},
         }
    }

    componentDidMount = ()=>{
    
        let article1 = JSON.parse(localStorage.getItem('articlesKey'));
        if(!article1 || article1.length === 0){
            localStorage.setItem('articlesKey',JSON.stringify(this.state.articles));
            let articlesRecup = JSON.parse(localStorage.getItem('articlesKey'));
            this.setState({articles: articlesRecup});
        }else{

            let article2 = JSON.parse(localStorage.getItem('articlesKey'));
            this.setState({articles: article2});
        }
       
    }

    handleRemove = (index)=>{
        console.log(index);

        let newArticles = [...this.state.articles];
        let arts = newArticles.filter((v, id) =>{
            return id !== index;
        });
        console.log(arts);

        this.setState({articles:arts},()=>{
            localStorage.setItem('articlesKey', JSON.stringify(this.state.articles));
            console.log(this.state);
        });

    }

    handleShow = (etat)=>{
        this.setState({editForm:true});
    }
    handleArt = (auto)=>{
        auto.id = this.state.articles[this.state.articles.length -1].id + 1;
        let articlesClone = [...this.state.articles, auto];
        this.setState({articles: articlesClone}, ()=>{
            localStorage.setItem('articlesKey', JSON.stringify(this.state.articles));
        });
        console.log(auto);
    }
    handleItem = (index)=>{
        const vEdit =  this.state.articles[index];
        this.setState({editArt: vEdit, indexMod: index});
        console.log(index);
    }

    handleUpdate = (data)=>{
        let articlesUpdate = [...this.state.articles];
        articlesUpdate[this.state.indexMod] = data;
        this.setState({articles: articlesUpdate}, ()=>{
            localStorage.setItem('articlesKey', JSON.stringify(this.state.articles));
        });
    }
    render() { 
        console.log(this.state.editArt);
        return ( 
            <div className="container">  
                <h1 className="bg-dark text-white text-center">Administration</h1>
                {
                    (!this.state.editForm && this.state.indexMod === -1) 
                    &&  <button onClick={this.handleShow} className="btn btn-warning offset-11 mb-1 ">
                        <BsFillPlusSquareFill />
                       </button>
                }
               
                {
                    (!this.state.editForm && this.state.indexMod > -1)
                    ?<Edit artshared = {this.state.editArt} update = {this.handleUpdate}/>
                    :
                    (this.state.editForm)
                    ?<Ajout getArticle = {this.handleArt} />
                    :<Liste lines = {this.state.articles} handleDelete = {this.handleRemove} handleEdit = {this.handleItem} />
                }
                
               
                
            </div>
         );
    }
}
 
export default Admin;