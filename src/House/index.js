import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Avatar } from "antd";

import {
  LoginOutlined,
  DeleteOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

import HouseShareModal from "./HouseShareModal";

import "./index.css";

const Meta = Card.Meta;

const MemberAvatar = ({ member }) => {
  return (
    <Avatar
      style={{ color: "white", backgroundColor: "#00000", fontWeight: 700 }}
    >
      {member}
    </Avatar>
  );
};

const renderMemberAvatars = (members) => {
  if (members && members.length > 0) {
    return (
      <div className="member-avatars">
        <p>{members.length} housemates.</p>
        {members.map((member, index) => (
          <MemberAvatar key={index} member={member} />
        ))}
        <MemberAvatar member={"+3"} />
      </div>
    );
  }
};

const HouseCard = ({ name, id, invite_link, members }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModalState = () => setShowModal(!showModal);
  return (
    <Card
      className="house-card"
      cover={
        <img
          alt="example"
          src="https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale"
        />
      }
      actions={[
        <Link to={`/houses/${id}`}>
          <LoginOutlined key="enter" />
        </Link>,
        <ShareAltOutlined key="share" onClick={toggleModalState} />,
        <DeleteOutlined key="leave" />,
      ]}
    >
      <Meta title={name} description="234B, MLH Street, NY USA" />
      {renderMemberAvatars(members)}

      <HouseShareModal
        showModal={showModal}
        toggleModalState={toggleModalState}
      />
    </Card>
  );
};

export default HouseCard;
