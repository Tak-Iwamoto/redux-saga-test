import React, { FC } from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { VideoType } from '../services/youtube/models';
import Spinner from './Spinner';

export interface VideoProps {
  video: VideoType;
  isLoading?: boolean;
}

const Video: FC<VideoProps> = ({ video, isLoading = false }) => {
  const title = video.title != null ? `${video.title}` : 'undefined';
  const thumbnailURL =
    video.thumbnails != null && video.thumbnails.default != null
      ? `${video.thumbnails.default.url}`
      : '/public/assets/image_not_found.png';

  console.log(title);
  console.log(thumbnailURL);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Card>
          <Avatar src={thumbnailURL} />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {title}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Video;
