import React from 'react';


class SearchBar extends React.Component{
    state={text:''};
    onInputSubmit=(event)=>{
        event.preventDefault();
        this.props.onTextSubmit(this.state.text);
        
    }
    render(){
        return (
            <div style={{marginTop:'20px'}} className="ui container">
                <form onSubmit={this.onInputSubmit} className="ui form">
                    <input type="text" 
                    value={this.state.text} 
                    onChange={(event)=>{this.setState({text:event.target.value})}}/>
                </form>
                
            </div>
        );
    }
}
export default SearchBar;