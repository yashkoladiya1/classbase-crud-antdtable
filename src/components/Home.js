import React, { Component } from "react";
import { Table } from "antd";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        firstName: "",
        middleName: "",
        lastName: "",
      },
      index: "",
      userData: [],
    };
  }
  columns = [
    {
      title: "first Name",
      dataIndex: "firstName",
    },
    {
      title: "middle Name",
      dataIndex: "middleName",
    },
    {
      title: "last Name",
      dataIndex: "lastName",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (record, data, i) => {
        return (
          <>
            <button
              type="button"
              onClick={() => this.handleEdit(i)}
              className="btn btn-success mx-2"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => this.handleDelete(i)}
              className="btn btn-danger mx-2"
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];
  submitForm = () => {
    let index = document.getElementById("inde").value;
    if (index === "" || index === undefined) {
      this.setState({
        userData: [...this.state.userData, { ...this.state.userDetails }],
      });
    } else {
      let newData = this.state.userData;
      let newdetails = this.state.userDetails;
      newData.splice(index, 1, newdetails);
      this.setState({
        userData: [...newData],
      });
    }

    this.setState({
      userDetails: {
        firstName: "",
        middleName: "",
        lastName: "",
      },
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleEdit = (i) => {
    let arr = this.state.userData;
    let val = arr[i];
    this.setState({
      userDetails: {
        firstName: val.firstName,
        middleName: val.middleName,
        lastName: val.lastName,
      },
    });
    this.setState({
      index: i,
    });
    console.log(val);
  };

  handleDelete = (i) => {
    let newData = this.state.userData;
    newData.splice(i, 1);
    this.setState({
      userData: [...newData],
    });
  };

  render() {
    return (
      <div>
        <input id="inde" type="hidden" value={this.state.index} />
        <label label="First Name">
          <input
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.userDetails.firstName}
          ></input>
        </label>
        <label label="Middle Name">
          <input
            name="middleName"
            placeholder="Middle Name"
            onChange={this.handleChange}
            value={this.state.userDetails.middleName}
          ></input>
        </label>
        <label label="First Name">
          <input
            name="lastName"
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.userDetails.lastName}
          ></input>
        </label>
        <button onClick={this.submitForm}>Submit</button>

        <Table dataSource={this.state.userData} columns={this.columns} />
      </div>
    );
  }
}
