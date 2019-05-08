import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {videos:[], selectedVideo:null};

    componentDidMount(){
        this.onSubmit('cars');
    }

    onSubmit = async (text) => {
        const vid = await youtube.get('/search',
        {params:
            {q:text}
        })
        this.setState({videos:vid.data.items,selectedVideo:vid.data.items[0]});
        console.log(vid);
    };

    onVideoSelect = (video)=>{
        this.setState({selectedVideo:video})
    }
   
    
    render(){
        return (
            <div className="ui container">
                <SearchBar onTextSubmit={this.onSubmit}/>
                <div className="ui grid" style={{marginTop:'5px'}}>
                <div className="ui row">
                    <div className="eleven wide column">
                    <VideoDetail Video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                    <VideoList videosList={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
export default App;