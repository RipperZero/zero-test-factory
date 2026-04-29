import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

const Secondary: Story = {
  args: {
    label: "Button",
  },
};

const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

const Small: Story = {
  args: {
    size: "small",
    label: "123",
  },
  // decorators: [
  //   (Story, Args) => {
  //     return (
  //       <div
  //         style={{
  //           backgroundColor: "yellow",
  //         }}
  //       >
  //         <Story>123</Story>
  //       </div>
  //     );
  //   },
  // ],
  render: (args) => {
    return <Button {...args} />;
  },
};

export default meta;
export { Primary, Secondary, Large, Small };
