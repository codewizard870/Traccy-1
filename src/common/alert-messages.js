import { message } from "antd";

export const showAlert = {
  success: (string, duration = 2) => {
    message.success(string, duration);
  },
  error: (string, duration = 2) => {
    message.error(string, duration);
  },
};
