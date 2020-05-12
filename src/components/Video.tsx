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

export interface VideoProps {
  video: VideoType;
}

const Video: FC<VideoProps> = ({ video }) => {
  const title = video.title ? video.title : 'undefined';
  const thumbnailURL =
    video.thumbnails && video.thumbnails.default
      ? `${video.thumbnails.default.url}`
      : '/public/assets/image_not_found.png';

  return (
    <>
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
      )
    </>
  );
};

export default Video;
