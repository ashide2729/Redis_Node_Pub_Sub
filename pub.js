const redis = require('redis');

const publisher = redis.createClient();

const news = {
    heading : "Hallelujah",
    details : "Live life king size."
}

publisher.publish("newsletter",JSON.stringify(news), console.log("News published for today."))
