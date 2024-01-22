import { Col, Flex, Form, Input, Row } from "antd";

function App() {
  return (
    <Flex
      gap="middle"
      justify="center"
      align="center"
      style={{ height: "100vh" }}
    >
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="Email" name="email">
              <Input placeholder="Digite seu email" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Senha" name="senha">
              <Input placeholder="Digite sua senha" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
}

export default App;
