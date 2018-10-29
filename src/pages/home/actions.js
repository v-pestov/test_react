import { actionTypes }  from './reducer';

export const writeVideo = (allVideos) => ({
    type: actionTypes.WRITE_VIDEO,
    all_video: allVideos,
})

export const writeOneVideo = (video) => ({
    type: actionTypes.WRITE_ONE_VIDEO,
    video: video,
})

export const getAllVideo = () => {console.log('action getAllVideo'); return {type: actionTypes.REQUST_VIDEOS}};

export const getOneVideo = (video) => {console.log('hhhhhhhhhhhhhhhhhhhhhhhhh'); return {type: actionTypes.REQUEST_ONE_VIDEO}}