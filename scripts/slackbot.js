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

// module.exports = function(robot) {
//   //  YOUR CODE HERE
//   //  Example
//    robot.hear(/blissme/i, function(msg) {
//      return msg.send("You are not special. You're not a beautiful and unique snowflake. You're the same decaying organic matter as everything else.");
//    });
// }

// bot.hear(/Hello!/, function(res) {
//    return res.send("Hi there!");
//  });

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/


var nature;
nature = ["http://lorempixel.com/400/400/nature/", "http://lorempixel.com/400/400/cats/", "http://lorempixel.com/400/400/abstract/"];

module.exports = function(robot) {
  // Random Example
  return robot.hear(/blissful/i, function(msg) {
    return msg.send(msg.random(nature));
  });
};
