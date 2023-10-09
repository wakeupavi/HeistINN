// Class Based component
import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };

    console.log("Constructor")
  }

   componentDidMount(){
    // API Calls 
    console.log("CopmonentDidMount")
   }

//    first constructor then render then componentDidMount call..so we should call Api in componentDidMount(lifeCycle method)
  render() {
    console.log("render")
    return (

      <div>
        <h1>Profile Class Component</h1>
        <h3>
          Name:{this.props.Fname}
          {this.props.Lname}
        </h3>
        <p>Count:{this.state.count}</p>
        <button
          onClick={() => {
            // we do not mutate state directly
            // neve do this.state=something
            this.setState({
              count: 1,
              count2:2
            });
          }}
        >
          SetCount
        </button>
      </div>
    );
  }
}

export default Profile;

// VVI
// 1.You Cannot create a clas based component without render method
// 2.render returns jsx
