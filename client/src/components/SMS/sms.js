var accountSid = 'ACbe5944276326ec25700ed6458724e00a'; // my Account SID Twilio account
var authToken = '3062df25ba7aaaf152c6a1fb008664e7';   // my Auth Token from Twilio account

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+12629015773',  // Your number, change to receive message
    from: '+14142950651' // Don't change this number, only this number can send!
})
.then((message) => console.log(message.sid));
return (
    <div className="form-container">
      <h2>Enter a number, compose your message, press submit!</h2>
      <input
        name="title"
        type="text"
        placeholder="Number"
        value={title}
        onChange={e => onChange(e)}
      />
      <textarea
        name="body"
        cols="30"
        rows="10"
        placeholder="Message body"
        value={body}
        onChange={e => onChange(e)}
      ></textarea>
      <button onClick={() => client.messages.create()}>Send</button>
    </div>
  );
export default client.message.create;