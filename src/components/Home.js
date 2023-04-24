import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserDetails } from "../services/actions/action";
import { withRouter } from "./wrapper";

const mapStateToProps = (state) => ({
  storeData: state.userItems.userData,
  editData:state.editData || {}
});

const mapDispatchToProps = (dispatch) => ({
  userDetailsHandler: (data) => dispatch(getUserDetails(data)),
});

class Home extends Component {
  constructor(props) {
    super(props);
  // console.log('this.props.storeData :>> ', this.props.storeData);
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

  componentDidMount() {
    let id = this.props.params.id;
    // console.log("id----->",id)
    // let val = this.props.editData;
    // console.log(val)
    if(id !== undefined) {
      // console.log("this.props.storeData--->",this.props.storeData)
      const val = this.props?.storeData[id] || [];
      // console.log("val--->",val)
      this.setState({
        userDetails: {
          firstName: val.firstName,
          middleName: val.middleName,
          lastName: val.lastName,
        },
        index: id,
      });
    }
    this.setState({
      userData:this.props.storeData,
    })
  }
  
  submitForm = (e) => {
    e.preventDefault();
    const form = document.getElementById("myForm");
    const firstName = form.elements["firstName"].value.trim();
    const middleName = form.elements["middleName"].value.trim();
    const lastName = form.elements["lastName"].value.trim();

    switch (true) {
      case firstName === "" && middleName === "" && lastName === "":
        alert("Please enter all fields");
        break;
      case firstName === "":
        alert("Please enter your Firstname");
        break;
      case middleName === "":
        alert("Please enter your Middlename");
        break;
      case lastName === "":
        alert("Please enter your Lastname");
        break;
      default:
        let index = document.getElementById("inde").value;
        if (index === "" || index === undefined) {
          this.setState(
            {
              userData: [...this.state.userData, { ...this.state.userDetails }],
            },
            () => this.props.userDetailsHandler([...this.state.userData])
          );
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
    }
    // this.props.navigate('/usertable')
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

  handleDelete = (i) => {
    let newData = this.state.userData;
    newData.splice(i, 1);
    this.setState({
      userData: [...newData],
    });
  };

  render() {
    return (
      <div className="container my-3">
        <form id="myForm">
          <input id="inde" type="hidden" value={this.state.index} />
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
              value={this.state.userDetails.firstName}
              className="form-control"
            />
            <span id="fi" className="error"></span>
          </div>
          <div className="mb-3">
            <label className="form-label">Middle Name</label>
            <input
              type="text"
              name="middleName"
              id="middleName"
              placeholder="Middle Name"
              onChange={this.handleChange}
              value={this.state.userDetails.middleName}
              className="form-control"
            />
            <span id="mi" className="error"></span>
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}
              value={this.state.userDetails.lastName}
              className="form-control"
            />
            <span id="la" className="error"></span>
          </div>
          <button
            className="btn btn-primary"
            onClick={(e) => this.submitForm(e)}
          >
            Submit
          </button>
        </form>
      </div>
      // this.submitForm
    );
  }
}
//
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
// export default Home
