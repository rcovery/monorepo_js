module.exports = {
  apps: [
    {
      name: "web",
      script: "yarn web:start",
    },
    {
      name: "core",
      script: "yarn core:start",
      env_production: {
        PORT: 3001,
      },
    },
  ],
};
