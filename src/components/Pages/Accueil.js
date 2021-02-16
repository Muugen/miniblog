import React, { Fragment } from 'react';
import '../../App.css';
import HeroSection from '../Navbar/HeroSection';

const Accueil = () => {

    // const articles = JSON.parse(localStorage.getItem('articlesKey'));

    const articles  = JSON.parse(localStorage.getItem('artData'));
    let val = false ;
    let tVal = false;
    if(articles){
        val = true;
    }
    if(val && articles.length > 0){

        tVal = true;
    }

    console.log(articles);

    return (
        <Fragment>
        
        <main>
            <HeroSection />
            <div className="row">
                <div className="col-md-12">
                {/* <div className="row">
                        {articles.map((article) =>{
                            return <div className="col-12">
                                <div className="card">
                                    <img src={`img/${article.image}`} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">article {article.id}</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{article.titre}</li>
                                            <li className="list-group-item">{article.contenue}</li>
                                            <li className="list-group-item">{article.url}</li>
                                            <li className="list-group-item">{article.auteur}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div> */}
                    <div className="row">
                        {tVal ? articles.map((article, index) =>{
                            return(
                                <div id="artCard" className="col-md-6" key={index}>
                                    <div className="card">
                                        <img className="card-img-top" src={process.env.PUBLIC_URL + '/img/' + article.image} alt="Card" />
                                        <div className="card-body">
                                            <h5 className="card-title"><strong>{article.titre}</strong></h5>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">{article.contenue}</li>
                                                <li className="list-group-item"><a href="">{article.url}</a></li>
                                                <li className="list-group-item">{article.auteur}</li>
                                            </ul>
                                        </div>
                            
                                    </div>
                                </div>
                                    );
                                })
                                : 'Aucun article.'
                            }
                    </div>
                </div>
            </div>
        </main>

    </Fragment> 
    )
}

export default Accueil
