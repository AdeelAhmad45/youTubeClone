import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = process.env.YOUTUBE_DATA_API_KEY

export const getHomePageVideo = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext,{getState}) => {
        const {
            youtube: {
                nextPageToken: nextPageTokenFromState, video
            },
        } = getState();
    }
)