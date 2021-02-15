import React from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Liste = (props) => {

    return ( 
         <> 
        
        <table className="table table-striped text-center">
            <thead className="table-dark">
                <tr>
                    <th>Id</th><th>Titre</th><th>Contenue</th><th>Auteur</th><th>Image</th><th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
            {props.lines.map((line, index) =>{
                return (
                        <tr key={index}>
                            <td>{line.id}</td>
                            <td>{line.titre}</td>
                            <td>{line.contenue}</td>
                            <td>{line.auteur}</td>
                            <td><img src={`img/${line.image}`} alt="" width="80"/></td>

                            <td>
                                <button onClick={()=>{props.handleEdit(index)}} className="btn btn-success"><FaEdit/></button>
                            </td>
                            <td>
                                <button onClick={ ()=>{
                                                    if(window.confirm('Etes vous sûr de supprimer cette Article')){

                                                        {props.handleDelete(index)}
                                                        toast.success('Suppression avec succès');
                                                    }
                                                    
                                                    }   }
                                                className="btn btn-danger">
                                    <FaTrashAlt/>
                                </button>

                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <ToastContainer/>
        </>
     );
}
 
export default Liste;

