module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: "htdn-api",
      script: "./api.js"
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-52-205-185-207.compute-1.amazonaws.com",
      key: "./ssh/htdn-api.ppk",
      ref: "origin/master",
      repo: "git@github.com:tuetranduy/htdn.git",
      path: "/home/ubuntu/htdn/production",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};