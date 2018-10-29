import immutable from 'seamless-immutable';

export const REQUST_VIDEOS = 'REQUST_VIDEOS'
export const WRITE_VIDEO = 'WRITE_VIDEO'
export const REQUEST_ONE_VIDEO = 'REQUEST_ONE_VIDEO'
export const WRITE_ONE_VIDEO = 'WRITE_ONE_VIDEO'

export const actionTypes = {
  REQUST_VIDEOS : 'REQUST_VIDEOS',
  WRITE_VIDEO: 'WRITE_VIDEO',
  REQUEST_ONE_VIDEO: 'REQUEST_ONE_VIDEO',
  WRITE_ONE_VIDEO: 'WRITE_ONE_VIDEO',
};

const initialState = immutable({videos_data: [], current_video: []});

export default (state = initialState, action) => {
  switch (action.type) {

    case REQUST_VIDEOS:
      return {...state}

    case WRITE_VIDEO:
      return {...state, videos_data: action.all_video}

    case WRITE_ONE_VIDEO:
      return {...state, current_video: action.video}

    case REQUEST_ONE_VIDEO:
      return {...state}

    default:
      return state;
  }
};