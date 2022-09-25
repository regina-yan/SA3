import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import debounce from 'lodash.debounce';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      // eslint-disable-next-line react/no-unused-state
      selectedVideo: null,
    };
    this.search = debounce(this.search, 1000);
    this.search('pixar');
  }

  search = (text) => {
    youtubeSearch(text).then((videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  };

  render() {
    return (
      <div>
        <SearchBar id="search-bar" onSearchChange={this.search} />
        <div id="video-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

// export default App;

const root = createRoot(document.getElementById('main'));
root.render(<App />);
