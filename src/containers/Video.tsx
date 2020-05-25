import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { VideoType } from '../services/youtube/models';
import Video, { VideoProps } from '../components/Video';
import { VideoState } from '../reducers/videoReducer';
import { getVideo } from '../actions/youtube';
import Spinner from '../components/Spinner';

interface StateProps {
  video: VideoType;
  isLoading?: boolean;
}

interface DispatchProps {
  getVideoStart: (videoId: string) => void;
}

type EnhancedVideoProps = VideoProps &
  StateProps &
  DispatchProps &
  RouteComponentProps<{ videoId: string }>;

const mapStateToProps = (state: VideoState): StateProps => ({
  video: state.video,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getVideoStart: (videoId: string) => getVideo.start({ videoId }),
    },
    dispatch,
  );

const VideoContainer: FC<EnhancedVideoProps> = ({
  video,
  isLoading,
  getVideoStart,
  match,
}) => {
  const { videoId } = match.params;

  useEffect(() => {
    getVideoStart(videoId);
  }, []);

  console.log(video);

  if (isLoading) return <Spinner />;
  return <Video video={video} />;
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VideoContainer),
);
