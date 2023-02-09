import { message, notification } from 'antd';

const openNotificationWithIcon = (type,message,description) => {
  notification[type]({
    message,
    description
  });
};

export const successNotfication = (message,description) =>
  openNotificationWithIcon('success',message,description);

export const infoNotfication = (message,description) =>
  openNotificationWithIcon('info',message,description);

export const warningNotfication = (message,description) =>
  openNotificationWithIcon('warning',message,description);

export const errorNotfication = (message,description) =>
  openNotificationWithIcon('error',message,description);