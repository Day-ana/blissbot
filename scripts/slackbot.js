// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
// Notes:
//
//
// Author:
// <github username of the original script author>
//

module.exports = function(robot) {
  //  YOUR CODE HERE
  //  Example
   robot.hear(/blissme/i, function(msg) {
     return msg.send("You are not special. You're not a beautiful and unique snowflake. You're the same decaying organic matter as everything else.");
   });
}

// bot.hear(/Hello!/, function(res) {
//    return res.send("Hi there!");
//  });

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/


var nature;
nature = ["http://lorempixel.com/400/400/nature/"];

module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
  // return robot.respond(/hi|hello/i, function(msg) {
  //   return msg.send("Howdy!");
  // });

  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.hear(/blissful/i, function(msg) {
    return msg.send(msg.random(nature));
  });
};
