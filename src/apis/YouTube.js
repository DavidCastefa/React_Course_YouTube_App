import axios from 'axios';

const KEY = Process.env.YT_KEY;

export default axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});
