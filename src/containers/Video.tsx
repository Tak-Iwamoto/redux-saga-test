import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { VideoType } from '../services/youtube/models';
import Video, { VideoProps } from '../components/Video';
import { VideoState } from '../reducers/video_reducer';
import { getVideo } from '../actions/youtube';

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
    console.log(videoId);
    getVideoStart(videoId);
  }, []);

  return <Video video={video} isLoading={isLoading} />;
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VideoContainer),
);
