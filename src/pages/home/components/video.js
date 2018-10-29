import React from "react";
import { Link } from "react-router-dom";
import { YouTube } from "react-youtube";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { writeOneVideo } from '../actions'
import { all, put, call, takeEvery, fork } from "redux-saga/effects";
import axios from "axios";
import ReactPlayer from 'react-player'
import { Label } from 'react-bootstrap'

class ShowOneVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
        .get(`http://18.219.216.115:8000/videos/${this.props.id}`)
        .then(res => this.props.actions.writeOneVideo(res.data[0].data))
  }
  render() {
    const video_src = this.props.data.current_video.media_embed ? this.props.data.current_video.media_embed.content.split(' ')[3].split('"')[1] : ' '
    return (
      <div className="video--page">
        <Link to="/">Show all. </Link>
        
        <ReactPlayer className='react--video' url={video_src || ' '} playing />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      writeOneVideo
    },
    dispatch
  )
});

const mapStateToProps = props => ({
  data: props.home
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowOneVideo);
