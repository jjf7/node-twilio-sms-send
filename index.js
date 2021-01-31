const dotenv = require('dotenv').config();
const accound_sid = process.env.ACCOUND_SID;
const auth_token = process.env.AUTH_TOKEN;
const client = require('twilio')(accound_sid,auth_token);
client.messages
    .create({
        body: 'I love it',
        from: '+12513166721',
        to:'+584128256644'
    }).then(message => console.log(message.sid))
