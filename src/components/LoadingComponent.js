import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Loading = () =>{
      return(
            <div className="col-auto text-center" >
                  <FontAwesomeIcon  icon ={faSpinner} spin pulse />
                  <p > Loading . . .</p>
            </div>
      );
}