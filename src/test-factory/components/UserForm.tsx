import { FC } from "react";

import { Button, Form, Input, Space } from "antd";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { RegisterUserReqParams } from "@api.testFactory";
import isEmail from "validator/es/lib/isEmail";
import isIdentityCard from "validator/es/lib/isIdentityCard";
import isMobilePhone from "validator/es/lib/isMobilePhone";

type UserFormProps = {
  loading?: boolean;
  onSubmit?: (formValues: RegisterUserReqParams) => void;
};

const UserForm: FC<UserFormProps> = ({ loading = false, onSubmit }) => {
  // #region hooks start
  const [userForm] = Form.useForm<RegisterUserReqParams>();
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleSubmit = () => {
    userForm
      .validateFields()
      .then((formValues) => {
        onSubmit?.(formValues);
      })
      .catch((formValidateError) => {
        console.log(formValidateError);
      });
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <Form
      form={userForm}
      name="userForm"
      disabled={loading}
      labelAlign="left"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 6 }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username" }]}
      >
        <Input maxLength={50} showCount allowClear />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password" }]}
      >
        <Input.Password
          maxLength={30}
          showCount
          allowClear
          iconRender={(visible) => {
            return visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;
          }}
        />
      </Form.Item>
      <Form.Item
        label="Idcard"
        name="idcard"
        rules={[
          { required: true, message: "Please input your idcard" },
          () => {
            return {
              validator(_rule, value: RegisterUserReqParams["idcard"]) {
                return isIdentityCard(value, "zh-CN")
                  ? Promise.resolve()
                  : Promise.reject(new Error("invalid idcard"));
              },
            };
          },
        ]}
      >
        <Input maxLength={20} showCount allowClear />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email" },
          () => {
            return {
              validator(_rule, value: RegisterUserReqParams["email"]) {
                return isEmail(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error("invalid email"));
              },
            };
          },
        ]}
      >
        <Input maxLength={30} showCount allowClear />
      </Form.Item>
      <Form.Item
        label="Mobile"
        name="mobile"
        rules={[
          { required: true, message: "Please input your mobile" },
          () => {
            return {
              validator(_rule, value: RegisterUserReqParams["mobile"]) {
                return isMobilePhone(value, [
                  "zh-CN",
                  "zh-HK",
                  "zh-TW",
                  "zh-MO",
                ])
                  ? Promise.resolve()
                  : Promise.reject(new Error("invalid email"));
              },
            };
          },
        ]}
      >
        <Input maxLength={30} showCount allowClear />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 2, span: 6 }}>
        <Space>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            onClick={() => {
              userForm.resetFields();
            }}
          >
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
  // #endregion render functions end
};

export { UserForm };
