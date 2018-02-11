import _ from 'lodash';
import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyC-SKUIra4ZqeJL8uJwBTk-Ppr1E8Has-Q';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('game of thrones');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 1000);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }

}

export default App;
