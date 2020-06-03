import React from "react";
import { Card, Avatar } from "antd";
import {
  LoginOutlined,
  DeleteOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

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
        <LoginOutlined
          key="enter"
          onClick={() => console.log("entering room..")}
        />,
        <ShareAltOutlined key="share" />,
        <DeleteOutlined key="leave" />,
      ]}
    >
      <Meta title={name} description="234B, MLH Street, NY USA" />
      {renderMemberAvatars(members)}
    </Card>
  );
};

export default HouseCard;
