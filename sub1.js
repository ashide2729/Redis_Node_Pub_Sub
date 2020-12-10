const redis = require('redis');

const subscriber = redis.createClient();

subscriber.on("message",(channel,message) => {
    console.log("Today's news :"+message);
})

subscriber.subscribe("newsletter");