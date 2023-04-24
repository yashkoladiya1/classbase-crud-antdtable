import React, { Component } from "react";
import { Button, Space } from "antd";
import { Table } from "antd";
import { connect } from "react-redux";
import { withRouter } from "./wrapper";
import { getEditDetails } from "../services/actions/action";
import { getUserDetails } from "../services/actions/action";
const mapStateToProps = (state) => ({
  storeData: state.userItems.userData,
});

const mapDispatchToProps = (dispatch) => ({
  editDetailsHandler: (data) => dispatch(getEditDetails(data)),
  userDetailsHandler: (data) => dispatch(getUserDetails(data)),
});

class Usertable extends Component {
  handleEdit = (i) => {
    // let editData = this.props.storeData[i];
    // console.log("editdata--->",editData)
    // this.props.editDetailsHandler(editData);
    this.props.navigate(`/edit/${i}`)
  };

  // componentDidMount(){
  //   this.handleDelete();
  // }

  handleDelete = (i) =>{
    // let id = this.props.params.id;
    // console.log("id----->",i)
    let newData = this.props.storeData;
    newData.splice(i,1);
    console.log(newData)
    this.props.userDetailsHandler([...newData])
  }


  columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Middle Name",
      dataIndex: "middleName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (record, data, i) => {
        return (
          <>
            <Space>
              <Button
                type="primary"
                onClick={() => this.handleEdit(i)}
                className="btn btn-success mx-2"
              >
                Edit
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => this.handleDelete(i)}
                className="btn btn-danger mx-2"
              >
                Delete
              </Button>
            </Space>
          </>
        );
      },
    },
  ];
  render() {
    return (
      <div>
        <Table dataSource={this.props.storeData} columns={this.columns} />
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Usertable)
);

// handleEdit = (i) => {
//   let val = arr[i];
//   this.setState({
//     userDetails: {
//       firstName: val.firstName,
//       middleName: val.middleName,
//       lastName: val.lastName,
//     },
//   });
//   this.setState({
//     index: i,
//   });
//   console.log(val);
//   console.log(i);
//   this.props.navigate(`/edit/${i}`);
// };
