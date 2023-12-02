import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.YOUTUBE_DATA_API_KEY

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext,{getState}) => {
        const {
            youtubeApp: {
                nextPageToken: nextPageTokenFromState, videos
            },
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResult=20&q="chai aur code"&key=${API_KEY}&part=snippet&type=video`);
        console.log(response);
    }
)