import React, { Component } from "react";
import EditableLabel from "label-editable-react";
import {Row,Col} from 'react-bootstrap'
class Editablelabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      website: "https://www.google.com/",
      sample: "Hello World",
    };
  }

  render() {
    return (
      <div className="m-4">
        <Row>
          <Col>
            <EditableLabel
              heading="Heading"
              initialValue={this.state.sample}
              save={(sample) => {
                this.setState({ sample }, () => console.log(this.state.sample));
              }}
            />
          </Col>
          <Col>
            <EditableLabel
              heading="Website"
              initialValue={this.state.website}
              save={(website) => {
                this.setState({ website }, () =>
                  console.log(this.state.website)
                );
              }}
              isWebsite={true}
            />
          </Col>
          <Col>
            <EditableLabel
              heading="Website"
              initialValue={this.state.website}
              save={(website) => {
                this.setState({ website }, () =>
                  console.log(this.state.website)
                );
              }}
              isWebsite={true}
            />
          </Col>
          <Col>
            <EditableLabel
              heading="Website"
              initialValue={this.state.website}
              save={(website) => {
                this.setState({ website }, () =>
                  console.log(this.state.website)
                );
              }}
              isWebsite={true}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Editablelabel;
