import { FC } from "react";

import { Button, Form, Input, Select } from "antd";
import { current, produce } from "immer";
import { cloneDeep, merge } from "lodash";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AntDForm: FC = () => {
  const [form] = Form.useForm();

  //   const onGenderChange = (value: string) => {
  //     switch (value) {
  //       case "male":
  //         form.setFieldsValue({ note: "Hi, man!" });
  //         break;
  //       case "female":
  //         form.setFieldsValue({ note: "Hi, lady!" });
  //         break;
  //       case "other":
  //         form.setFieldsValue({ note: "Hi there!" });
  //         break;
  //       default:
  //     }
  //   };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
  };

  return (
    <>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        onFinishFailed={(values) => {
          console.log(values);
        }}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            //   onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        {/* <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) =>
          getFieldValue("gender") === "other" ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item> */}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>

      <Button
        type="primary"
        onClick={() => {
          const object = {
            a: [{ b: 2, c: 2 }, { d: 4 }],
            x: { x1: [1, 2], x2: [{ x21: 666, x33: 999 }] },
            y: 88888,
          };

          const other = {
            a: [{ c: 3 }, { e: 5 }],
            x: { x1: [0, 1, 2], x2: [{ x21: 777, x22: 888 }] },
            z: "湖人总冠军！！！",
          };

          const mergeResultWithCloneDeep = merge(cloneDeep(object), other);

          console.log("object", object);
          console.log("other", other);
          console.log("mergeResultWithCloneDeep", mergeResultWithCloneDeep);
          console.log(object === mergeResultWithCloneDeep);
        }}
      >
        merge
      </Button>
    </>
  );
};

export { AntDForm };
