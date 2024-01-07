import React, { Component } from "react";

import { Flipper, Flipped } from "react-flip-toolkit";

import "./Card.css";
import crm from "../assets/video/crm.mp4";
const createCardFlipId = (index) => `listItem-${index}`;

const shouldFlip = (index) => (prev, current) =>
  index === prev || index === current;

const ListItem = ({ description, Icon, name, index, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      shouldInvert={shouldFlip(index)}
    >
      <div className="listItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
              delayUntil={createCardFlipId(index)}
            >
              <div>
                <Icon size={100} />
              </div>
            </Flipped>
            <div className="description">
              <Flipped
                flipId={`description`}
                stagger="card-content"
                shouldFlip={shouldFlip(index)}
                delayUntil={createCardFlipId(index)}
              >
                <>
                  <p style={{ paddingLeft: "10px" }}>
                    <h4>{name}</h4>
                    {description}
                  </p>
                </>
              </Flipped>
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

const ExpandedListItem = ({
  description,
  image,
  video,
  name,
  index,
  onClick,
}) => {
  console.log(description);
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      onStart={(el) => {
        setTimeout(() => {
          el.classList.add("animated-in");
        }, 400);
      }}
    >
      <div className="expandedListItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="expandedListItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              delayUntil={createCardFlipId(index)}
            >
              <>
                {image && (
                  <img
                    src={image}
                    className="rounded-3"
                    alt="Avatar"
                    style={{ maxWidth: "400px", maxHeight: "400px" }}
                  />
                )}
                {video && (
                  <video width="400" height="300" controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </>
            </Flipped>
            <div className="description">
              <Flipped
                flipId={`description`}
                stagger="card-content"
                delayUntil={createCardFlipId(index)}
              >
                <>
                  <p>
                    <h4>{name}</h4>
                    {description}
                  </p>
                  <ul>
                    <p>
                      Link:
                      <a href="https://customer-management-nine.vercel.app/">
                        customer-management-nine.vercel.app
                      </a>
                    </p>
                    <p>Python ,Django ,MERN</p>
                  </ul>
                </>
              </Flipped>
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

export class AnimatedList extends Component {
  state = { focused: null };
  onClick = (index) =>
    this.setState({
      focused: this.state.focused === index ? null : index,
    });
  render() {
    const { listData } = this.props;
    console.log(listData);
    return (
      <Flipper
        flipKey={this.state.focused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{
          card: {
            reverse: this.state.focused !== null,
          },
        }}
        decisionData={this.state.focused}
      >
        <div className="list">
          {listData?.map((item, index) => {
            return (
              <div className="li" key={index}>
                {index === this.state.focused ? (
                  <ExpandedListItem
                    description={item.description}
                    name={item.name}
                    video={item?.video}
                    image={item?.image}
                    index={this.state.focused}
                    onClick={this.onClick}
                  />
                ) : (
                  <ListItem
                    description={item.description}
                    name={item.name}
                    Icon={item.icon}
                    video={item.video}
                    index={index}
                    key={index}
                    onClick={this.onClick}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Flipper>
    );
  }
}
