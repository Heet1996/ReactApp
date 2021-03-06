import React from 'react';
import {SearchSharp,ArrowRightSharp,StarSharp,VerifiedUserSharp} from '@material-ui/icons';


import './Home.css'

 export let Home=function(props){
        let nextPage=()=>{
            props.history.push('/token');
        }    
        return(
            <main className="HomePage">
                
                <header className="Header">
                    <h3 className="Title">GitHub Repo Finder</h3>
                    <p>A simple application which helps to perform below actions on GitHub with the help of Access token</p>    
                </header>

                <div className="HomeList"> 
                
                <ul className="list">
                    <li>
                        <VerifiedUserSharp className="icon" fontSize="large"></VerifiedUserSharp>
                        Validate your Access token
                    </li>
                    <li>
                    <SearchSharp className="icon" fontSize="large"></SearchSharp>
                    Find a GitHub Public Repo
                    </li>
                    <li>
                     <ArrowRightSharp className="icon" fontSize="large"></ArrowRightSharp>   
                        Provides the repo details of Results
                    </li>
                    <li>
                        <StarSharp className="icon" fontSize="large"></StarSharp>
                        Star or watch your favoriate git repo
                    </li>

                </ul>
                
                <button class="btn-inline" onClick={nextPage}>Start Finder</button>
                </div>

            </main>
        )
}

