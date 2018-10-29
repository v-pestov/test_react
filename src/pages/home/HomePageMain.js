import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllVideo } from "./actions";
import ReactTable from "react-table";
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "react-table/react-table.css";

class HomePageMain extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getAllVideo();
  }
  render() {
    console.log(this.props.data)
    if (!this.props.data) return null;
    const videos = this.props.data["videos_data"];

    const columns = [
      { Header: "Watch", 
      accessor: 'id',
      width: 150,
      Cell: ({row}) => (<Link to={row.id}>Watch</Link>) },
      { Header: "Image", 
      accessor: 'thumbnail',
      width: 250,
      Cell: ({row}) => (<Image src={row.thumbnail}/>) },
      { Header: "Title", 
      accessor: 'title'  }
    ];

    return (
      <main className="home-main">
        <ReactTable 
        data={videos} 
        columns={columns} 
        defaultPageSize={5}
        />
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getAllVideo
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
)(HomePageMain);
