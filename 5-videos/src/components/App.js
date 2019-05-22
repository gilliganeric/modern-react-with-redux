import React from 'react';
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import youtube from '../api/youtube-data'

class App extends React.Component {
  state = {videos: [], selectedVideo: null};

  componentDidMount() {
    this.onSearchSubmit('buildings');
  }

  onVideoSelect = (video) => {
    console.log("From the app: ",video);
    this.setState({ selectedVideo: video});
  }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { 
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;