import React from "react";
import { Row, Col, Empty } from "antd";
import { Link } from "react-router-dom";

import "./index.css";

import { HouseCard, LoadingHouseCard } from "../House";

const House = HouseCard;

class HouseList extends React.Component {
  state = {
    houses: null,
    loading: true,
  };
  componentDidMount() {
    this.fetchHouses();
  }
  fetchHouses = () => {
    this.setState({
      loading: true,
    });
    const houses = [
      { id: 123, name: "Eyitayo's House", members: ["A", "B", "C"] },
      { id: 123, name: "Teymour's House", members: ["A", "B", "C"] },
      { id: 123, name: "Gabriel's House", members: ["A", "B", "C"] },
      { id: 123, name: "Jayati's House", members: ["A", "B", "C"] },
      { id: 123, name: "Raymond's House", members: ["A", "B", "C"] },
      { id: 123, name: "Jon's House", members: ["A", "B", "C"] },
      { id: 123, name: "Swift's House", members: ["A", "B", "C"] },
    ];
    this.setState({
      houses,
      loading: false,
    });
  };
  renderHouses = () => {
    const { houses, loading } = this.state;
    if (loading) {
      return (
        <React.Fragment>
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <Col sm={24} md={12} lg={6}>
                <LoadingHouseCard key={i} />
              </Col>
            );
          })}
        </React.Fragment>
      );
    }
    if (houses && houses.length > 0) {
      return houses.map(({ id, name, members }) => (
        <Col sm={24} md={12} lg={6}>
          <House id={id} name={name} members={members} />
        </Col>
      ));
    } else {
      return (
        <div className="no-house-msg">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          <p className="">
            You've no house yet.{" "}
            <Link to="/houses/create">Create a house.</Link>
          </p>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="house-list-wrapper">
        <h2 className="house-header">Here are the houses you belong to</h2>
        <Row gutter={[24, 16]}>{this.renderHouses()}</Row>
      </div>
    );
  }
}

export default HouseList;
