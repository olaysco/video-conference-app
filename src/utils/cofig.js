export const url = `${process.env.VUE_APP_SOCKET_HOST || "localhost"}:${process
  .env.VUE_APP_SOCKET_PORT || "3000"}`;

export const SERVER_URL = "http://localhost:3050";

export const STORE_ACTIONS = {
  joinRoom: "joinRoom",
  setRooms: "setRooms",
  changeRoom: "changeRoom",
  leaveChat: "leaveChat",
  changeStatus: "changeStatus"
};
