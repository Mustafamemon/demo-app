import React, { Component } from "react";

import ModalDropdow from "modal-dropdown";

class ModalDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionData: [
        {
          Name: "Mustafa",
          Id: "A",
        },
        {
          Name: "Hasnain",
          Id: "B",
        },
        {
          Name: "Hassan",
          Id: "C",
        },
        {
          Name: "Ahsan",
          Id: "D",
        },
        {
          Name: "Osama",
          Id: "E",
        },
      ],
      demoOneName: "Mustafa",
      demoOneId: "A",
      demoTwoName: "Hasnain",
      demoTwoId: "B",
    };
  }
  save = (Id, Name, Key) =>{
    this.setState({ [Key + "Id"]: Id, [Key + "Name"]: Name });
  }

  render() {
    return (
      <div className=" m-4">
        <div className="w-25">
          <ModalDropdow 
          
            save={this.save}
            heading={"Demo 1"}
            subHeading={this.state.demoOneName}
            optionData={this.state.optionData}
            keyField="demoOne"
          />
          <br />
          <ModalDropdow
            save={this.save}
            heading={"Demo 2"}
            subHeading={this.state.demoTwoName}
            optionData={this.state.optionData}
            size="sm"
            isAngleDown={true}
            keyField="demoTwo"
          />
        </div>
      </div>
    );
  }
}

export default ModalDropdown;
