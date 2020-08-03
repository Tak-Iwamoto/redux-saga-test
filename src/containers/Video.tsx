import React, {FC, useEffect} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {useParams} from 'react-router';
import {VideoType} from '../services/youtube/models';
import Video, {VideoProps} from '../components/Video';
import {VideoState} from '../reducers/videoReducer';
import {getVideo} from '../actions/youtube';
import Spinner from '../components/Spinner';

interface StateProps {
  video: VideoType;
  isLoading?: boolean;
}

interface DispatchProps {
  getVideoStart: (videoId: string) => void;
}

type EnhancedVideoProps = VideoProps & StateProps & DispatchProps;

const mapStateToProps = (state: VideoState): StateProps => ({
  video: state.video,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getVideoStart: videoId => dispatch(getVideo.start({videoId})),
});

const VideoContainer: FC<EnhancedVideoProps> = ({
  video,
  isLoading,
  getVideoStart,
}) => {
  const {videoId} = useParams();

  useEffect(() => {
    getVideoStart(videoId);
  }, []);

  if (isLoading) return <Spinner />;
  return <Video video={video} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);
