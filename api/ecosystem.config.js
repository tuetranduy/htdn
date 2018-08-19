module.exports = {
    apps: [{
      name: 'htdn-api',
      script: './api.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: '52.205.185.207',
        key: './ssh/htdn-api.pem',
        ref: 'origin/master',
        repo: 'git@github.com:tuetranduy/htdn.git',
        path: '/home/ubuntu/htdn',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }