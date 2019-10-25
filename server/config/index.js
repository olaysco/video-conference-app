/* eslint-disable no-unused-vars */
const CONFIG = {
  PORT: process.env.PORT || 3050,
  CHAT_NAMESPACE: "/video-chat",
  REDIS_HOST: process.env.REDIS_HOST || "localhost",
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  ORIGINS: process.env.ORIGINS || "*:*",
  KEY: "unique",
  appSecret: "vdconfsecretapplication"
};

module.exports = CONFIG;
