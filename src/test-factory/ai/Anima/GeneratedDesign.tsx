import { FC } from "react";

import { Button, Col, Image, Layout, Progress, Row, Typography } from "antd";

import { BellOutlined } from "@ant-design/icons";

import frame2 from "./frame-2.png";
import image from "./image.png";

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

const GeneratedDesign: FC = () => {
  return (
    <Layout>
      <Header style={{ background: "#fff", padding: 0 }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={4} style={{ margin: 0 }}>
              11智能物流管理平台
            </Title>
          </Col>
          <Col>
            <Button type="default" style={{ marginRight: 8 }}>
              切换视图
            </Button>
            <Button type="primary">新建订单</Button>
          </Col>
          <Col>
            <Button shape="circle" icon={<BellOutlined />} />
            <Text style={{ marginLeft: 8 }}>通知</Text>
            <Button type="primary" shape="round" style={{ marginLeft: 16 }}>
              管理
            </Button>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "24px 50px" }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <div style={{ background: "#fff", padding: 24, borderRadius: 4 }}>
              <Row align="middle">
                <Col>
                  <Image src={image} width={24} height={24} preview={false} />
                </Col>
                <Col>
                  <Title level={5} style={{ margin: 0 }}>
                    货物追踪
                  </Title>
                  <Text>实时监控货物运输状态，确保安全</Text>
                </Col>
              </Row>
              <Row gutter={16} style={{ marginTop: 16 }}>
                <Col span={12}>
                  <div
                    style={{
                      background: "#f0f0f0",
                      padding: 16,
                      borderRadius: 4,
                    }}
                  >
                    <Title level={2} style={{ margin: 0 }}>
                      89%
                    </Title>
                    <Text>准时送达率</Text>
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    style={{
                      background: "#f0f0f0",
                      padding: 16,
                      borderRadius: 4,
                    }}
                  >
                    <Title level={2} style={{ margin: 0 }}>
                      256
                    </Title>
                    <Text>在途包裹</Text>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <div style={{ background: "#fff", padding: 24, borderRadius: 4 }}>
              <Row align="middle">
                <Col>
                  <Image src={frame2} width={24} height={24} preview={false} />
                </Col>
                <Col>
                  <Title level={5} style={{ margin: 0 }}>
                    路线规划
                  </Title>
                  <Text>智能规划最优运输路线</Text>
                </Col>
              </Row>
              <Row style={{ marginTop: 16 }}>
                <Col span={24}>
                  <Text>路线优化进度</Text>
                  <Progress percent={75} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col span={24}>
            <div style={{ background: "#fff", padding: 24, borderRadius: 4 }}>
              <Row justify="space-between" align="middle">
                <Col>
                  <Title level={5} style={{ margin: 0 }}>
                    待办事项
                  </Title>
                </Col>
                <Col>
                  <Text>查看全部</Text>
                </Col>
              </Row>
              <Row style={{ marginTop: 16 }}>
                <Col span={24}>
                  <Text>更新运输进度信息</Text>
                  <Text style={{ float: "right" }}>今天 14:00</Text>
                </Col>
                <Col span={24}>
                  <Text>审核新提交的订单</Text>
                  <Text style={{ float: "right" }}>今天 16:00</Text>
                </Col>
                <Col span={24}>
                  <Text>优化配送路线</Text>
                  <Text style={{ float: "right" }}>明天 10:00</Text>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col span={24}>
            <div style={{ background: "#fff", padding: 24, borderRadius: 4 }}>
              <Row justify="space-between" align="middle">
                <Col>
                  <Title level={5} style={{ margin: 0 }}>
                    系统状态
                  </Title>
                </Col>
                <Col>
                  <Text>日</Text>
                  <Text style={{ margin: "0 16px" }}>周</Text>
                  <Text>月</Text>
                </Col>
              </Row>
              <Row style={{ marginTop: 16 }}>
                <Col span={6}>
                  <Title level={2} style={{ margin: 0, textAlign: "center" }}>
                    128
                  </Title>
                  <Text style={{ textAlign: "center", display: "block" }}>
                    在途订单
                  </Text>
                </Col>
                <Col span={6}>
                  <Title level={2} style={{ margin: 0, textAlign: "center" }}>
                    85%
                  </Title>
                  <Text style={{ textAlign: "center", display: "block" }}>
                    准时率
                  </Text>
                </Col>
                <Col span={6}>
                  <Title level={2} style={{ margin: 0, textAlign: "center" }}>
                    32
                  </Title>
                  <Text style={{ textAlign: "center", display: "block" }}>
                    活跃车辆
                  </Text>
                </Col>
                <Col span={6}>
                  <Title level={2} style={{ margin: 0, textAlign: "center" }}>
                    98%
                  </Title>
                  <Text style={{ textAlign: "center", display: "block" }}>
                    客户满意度
                  </Text>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>智能物流管理平台 ©2024</Footer>
    </Layout>
  );
};

export default GeneratedDesign;
