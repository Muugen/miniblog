import React from 'react'

const Presentation = () => {
    return (
        <>
            <div className="card">
                <img src="./img/photo.png" className="card-img-top" alt="..."/>
                <h1>À propos de moi</h1>
                <div className="card-body">
                    <div className="aboutbox">
                        <p>
                            <b>Nom :</b> Anthony HUYNH<br />
                            <b>Age :</b> 25 ans<br />
                            <b>Ville actuelle :</b> Vitry-sur-seine (94)<br />
                            <b>Hobbies :</b> jeux-vidéo, cuisine, littérature fantasy/SF, Cinémas 90's, web-design
                        </p>
                    </div>
                    <p className="card-text">
                        J’ai 25 ans, je suis en formation de développement web. J'ai fait un licence d'economie et
                        gestion et puis j’ai travaillé pendant plus de 3 ans pour une entreprise technologie
                        medical, en commençant en bas de l’échelle et ne connaissant rien au métier j’ai quand même
                        fini en tant que Achats et sourcing Support. Je peux dire que je suis déterminé et
                        ambitieux. J’aime cuisiné et je suis un geek et fier de l’être.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Presentation
