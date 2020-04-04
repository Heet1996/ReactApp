import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import * as actions from '../../store/actions/index';
import Repository from '../Repository/Repository';
import './RepoSearch.css';

const useStyles = (theme)=>({
    btnList:{
       fontSize:'2rem'
    }
   });

   class RepoSearch extends Component {

            state = {
                repoName: ''
            }
            render() {

                let formElement = (
                    <div className="repoBox">
                    <form autoComplete = "off"
                    onSubmit = { this.handleForm } 
                    className="formElement2"
                    >
                  
                    <input name = "repoName"
                    onChange = { this.inputChangeHandler }
                    className = "formInput"
                    placeholder="Search Your Repository here..."
                    value = { this.state.repoName }
                    /> 
                    
                    <button color = "primary"
                    className = "btn btn-search"
                    type = "submit" > Search </button> 
                     
                    
                </form>  
                <button 
                    className = "btn btn-clear"
                    onClick = { this.props.clearSearch }> Clear All Results </button>
                    </div>)
                let repoList = this.props.repo.length ? this.repositoryMapper() : null;
                let status = ( <h4 className="status"> { this.props.status } </h4>)
                let repoCount = this.props.repoCount ? ( <p className="searchCount"> Search Result: Total { this.props.repoCount } Repository </p>):null;
                    return (

                    <main className = "RepoPage" id = "top"> 
                            {this.props.error ? ( <p> { this.props.error.message } </p>) : 
                            <>
                                {formElement}
                                {repoCount}
                                {repoList}
                                {status}
                            </>
                            } 
                    </main>
                )
            }
   }

const mapStateToProps = (state) => {
    return {
        repo: state.repoReducer.repo,
        loading: state.repoReducer.loading,
        error: state.repoReducer.error,
        token: state.tokenValidator.token,
        pageInfo: state.repoReducer.pageInfo,
        status: state.repoReducer.status,
        repoCount: state.repoReducer.repositoryCount
    }
    }
const mapDispatchToProps = (dispatch) => {
    return {
        repoSearch: (query, token) => dispatch(actions.repoSearch(query, token)),
        clearSearch: () => dispatch(actions.clearSearch())
    }
    }
export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(RepoSearch));