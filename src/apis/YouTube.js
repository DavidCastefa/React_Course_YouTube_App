import axios from 'axios';

const KEY = YT_KEY;

export default axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});
