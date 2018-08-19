module.exports = {
    apps: [{
      name: 'htdn-api',
      script: './api.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-52-205-185-207.compute-1.amazonaws.com',
        key: './ssh/htdn-api.ppk',
        ref: 'origin/master',
        repo: 'git@github.com:tuetranduy/htdn.git',
        path: '/home/ubuntu/htdn',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }