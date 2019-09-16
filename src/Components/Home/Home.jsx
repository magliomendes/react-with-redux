import * as React from "react";
import { connect } from "react-redux";
import { Thumb } from "./Components/PlaylistComponents/Thumb";
import { LoadingButton } from "./Components/LoadingButton";
import { Spinner } from "../../Shared/Components/Spinner";
import { HomeAction } from "./Components/HomeSideActions/HomeAction";
import { youtubeActions } from "../../Actions/Youtube.actions";
import { HomeContent, Playlist } from "./HomeStyles";

class HomeComponent extends React.Component {
  
  maxResults = 5;

  componentDidMount() {
    this.props.getVideos();
  }

  loadMore = () => {
    this.maxResults = this.maxResults + 5;
    this.props.getVideos(this.maxResults);
  };

  render() {
    return (
      <>
        {!this.props.videos && <Spinner />}
        {this.props.videos && (
          <HomeContent className="row">
            <HomeAction />
            <Playlist className="col-12 col-md-8 row justify-content-center">
              {this.props.videos &&
                this.props.videos.map(item => (
                  <Thumb thumb={item} key={item.id} />
                ))}
              {this.props.videos &&
                this.props.pageInfo > this.props.videos.length && (
                  <div className="col-10 col-md-5 m-auto justify-content-center align-items-center text-center">
                    {!this.props.loading && (
                      <div onClick={() => this.loadMore()}>
                        <LoadingButton />
                      </div>
                    )}
                    {this.props.loading && <Spinner />}
                  </div>
                )}
            </Playlist>
          </HomeContent>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  const loading = state.loading;
  const pageInfo = state.pageInfo;
  const videos = state.items;
  return { loading, pageInfo, videos };
}

const actionCreators = {
  getVideos: youtubeActions.getVideos
};

const connectedHomePage = connect(
  mapStateToProps,
  actionCreators
)(HomeComponent);

export { connectedHomePage as HomeComponent };