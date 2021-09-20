import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    state = {
        isVisible : false
    }
    static defaultProps = {
        name : 'Default Name',
        salary : 'Default Salary',
        department : 'Default Department'
    }
    onClickEvent = (number,e) => {
        this.setState({
            isVisible : ! this.state.isVisible
        })
    }
    onDeleteUser = (e) => {
        //const {id} = this.props;
        // Consumer Dispatch
    }
    render() {

        //Destructing
        const {name,salary,department}=this.props;
        const{isVisible} = this.state;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent} >{name}</h4>
                        <i className="far fa-trash-alt" style={{cursor : "pointer"}}></i>
                    </div>
                    {
                    isVisible ? 
                        <div className="card-body">
                            <p className="card-text">Salary : {salary}</p>
                            <p className="card-text">Department : {department}</p>
                        </div>
                        : null
                    }
                    
                </div>
                
            </div>
        )
    }
}

User.propTypes={
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired

}
export default User;
