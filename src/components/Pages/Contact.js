import React from 'react'

const Contact = () => {
    return (
        <>
            <div id="adminForm" className="container">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="contmap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.557305895279!2d2.5060891158590928!3d48.82850751076412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60da376565ae5%3A0xe1380c43fdb38a1a!2s101%20Quai%20Louis%20Ferber%2C%2094360%20Bry-sur-Marne!5e0!3m2!1sen!2sfr!4v1606531225473!5m2!1sen!2sfr" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Nom</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Addresse</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 rue"/>
                            </div>
                            <div className="col-12">
                                <label for="inputAddress2" className="form-label">Addresse 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Appartement, batiment, ou étage"/>
                            </div>
                            <div className="col-md-5">
                                <label for="inputCity" className="form-label">Ville</label>
                                <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="col-md-4">
                                <label for="inputState" className="form-label">Département</label>
                                <select id="inputState" className="form-select">
                                    <option selected>00</option>
                                    <option>75</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label id="zip" for="inputZip" className="form-label">Code postal</label>
                                <input type="text" className="form-control" id="inputZip"/>
                            </div>
                                <div className="col-12">
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Contact;
