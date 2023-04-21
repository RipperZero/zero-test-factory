import { FC } from "react";

import { Card, Col, Image, Row, Typography } from "antd";

import { animated, useSpring } from "@react-spring/web";
import ReactTilt from "react-parallax-tilt";

import LakersImage from "../assets/img/Lakers.jpg";

// @see https://codesandbox.io/s/l2pqqzqmmq?file=/src/index.js

const calc = (x: number, y: number) => [
  (y - window.innerHeight / 2) / 20,
  -(x - window.innerWidth / 2) / 20,
  1.02,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const AnimatedAntDImage = animated(Image);

type TiltProps = {};

const Tilt: FC<TiltProps> = () => {
  // #region hooks start
  const [animatedSprings, animatedSpringApi] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: {
        mass: 5,
        tension: 350,
        friction: 40,
      },
    };
  });
  const [animatedAntDImageSprings, animatedAntDImagespringApi] = useSpring(
    () => {
      return {
        xys: [0, 0, 1],
        config: {
          mass: 5,
          tension: 350,
          friction: 40,
        },
      };
    },
  );
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Card title="Tilt">
      <Row
        gutter={32}
        style={{
          width: "95vw",
        }}
      >
        <Col span={8}>
          <Typography.Title level={4}>animated.img</Typography.Title>
          <animated.img
            style={{
              width: "100%",
              height: "90%",
              backgroundImage: `url(${LakersImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",

              willChange: "transform",
              transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
              transform: animatedSprings.xys.to(trans),
            }}
            onMouseMove={({ clientX, clientY }) => {
              animatedSpringApi({ xys: calc(clientX, clientY) });
            }}
            onMouseLeave={() => animatedSpringApi({ xys: [0, 0, 1] })}
          />
        </Col>
        <Col span={8}>
          <Typography.Title level={4}>AnimatedAntDImage</Typography.Title>
          <AnimatedAntDImage
            style={{
              willChange: "transform",
              transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
              transform: animatedAntDImageSprings.xys.to(trans),
            }}
            src={LakersImage}
            preview={false}
            onMouseMove={({ clientX, clientY }) => {
              animatedAntDImagespringApi({ xys: calc(clientX, clientY) });
            }}
            onMouseLeave={() => animatedAntDImagespringApi({ xys: [0, 0, 1] })}
          />
        </Col>
        <Col span={8}>
          <Typography.Title level={4}>ReactTilt</Typography.Title>
          <ReactTilt>
            <Image src={LakersImage} />
          </ReactTilt>
        </Col>
      </Row>
    </Card>
  );
  // #endregion render functions end
};

export { Tilt };
