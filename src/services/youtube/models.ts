import {youtube_v3} from 'googleapis/build/src';

export interface VideoType {
  categoryId?: string | null;
  channelId?: string | null;
  channelTitle?: string | null;
  defaultAudioLanguage?: string | null;
  defaultLanguage?: string | null;
  description?: string | null;
  liveBroadcastContent?: string | null;
  localized?: youtube_v3.Schema$VideoLocalization;
  publishedAt?: string | null;
  tags?: string[] | null;
  thumbnails?: youtube_v3.Schema$ThumbnailDetails;
  title?: string | null;
}
