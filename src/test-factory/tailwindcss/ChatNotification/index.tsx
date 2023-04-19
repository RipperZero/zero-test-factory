import { FC } from "react";

import { Space } from "antd";

import classes from "./index.module.scss";

type ChatNotificationProps = {};

const ChatNotification: FC<ChatNotificationProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <Space direction="vertical" size={"large"}>
      <div className={classes["chat-notification"]}>
        <div className={classes["chat-notification-logo-wrapper"]}>
          <img
            className={classes["chat-notification-logo"]}
            src="/vite.svg"
            alt="ChitChat Logo"
          />
        </div>
        <div className={classes["chat-notification-content"]}>
          <h4 className={classes["chat-notification-title"]}>ChitChat</h4>
          <p className={classes["chat-notification-message"]}>
            You have a new message!
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
        <div className="shrink-0">
          <img className="h-12 w-12" src="/vite.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <button className="bg-sky-500 hover:bg-sky-700">Save changes</button>
    </Space>
  );
  // #endregion render functions end
};

export { ChatNotification };
