import React, { Component } from "react";
import Cell from "./Cell";

export default class Matrix extends Component {
  static defaultProps = {
    values: [
      [
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
      ],
      [
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
      ],
      [
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
      ],
      [
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
      ],
      [
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
      ],
      [
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
      ],
      [
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
      ],
      [
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
      ],
      [
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
      ],
      [
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
        "#F00",
      ],
    ],
  };

  genRow = (cells) => {
    return cells.map((cell) => <Cell value={cell} />);
  };

  genMatrix = () => {
    return this.props.values.map((cells) => (
      <div className="row">{this.genRow(cells)}</div>
    ));
  };

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}
