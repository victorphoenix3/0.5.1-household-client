import React from "react";
import { Row, Col } from "antd";

import "./index.css";

import House from "../House";

class HouseList extends React.Component {
  render() {
    return (
      <div className="house-list-wrapper">
        <h2>House List</h2>
        <Row gutter={[24, 16]}>
          <Col sm={24} md={12} lg={6}>
            <House id="123" name="Eyitayo's House" members={["A", "B", "C"]} />
          </Col>
          <Col sm={24} md={12} lg={6}>
            <House id="123" name="Eyitayo's House" members={["A", "B", "C"]} />
          </Col>
          <Col sm={24} md={12} lg={6}>
            <House id="123" name="Eyitayo's House" members={["A", "B", "C"]} />
          </Col>
          <Col sm={24} md={12} lg={6}>
            <House id="123" name="Eyitayo's House" members={["A", "B", "C"]} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HouseList;
