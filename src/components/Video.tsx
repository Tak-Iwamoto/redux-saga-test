import React, { FC } from 'react';
import { Image, Card, Icon, Button } from 'semantic-ui-react';
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
        <Image src={thumbnailURL} circular />
        <Card.Content>
          <Card.Header variant="body2" color="textSecondary" component="p">
            {title}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button>
            <Icon name="heart" />
          </Button>
          <Button>
            <Icon name="share" />
          </Button>
        </Card.Content>
      </Card>
      )
    </>
  );
};

export default Video;
