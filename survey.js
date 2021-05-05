const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (name) => {

  rl.question('What is an activity you like doing? ', (activity) => {
  
    rl.question('What do you listen to while doing that? ', (listen) => {
    
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {

        rl.question('What is your favourite thing to eat for that meal? ', (eat) => {
    
          rl.question('Which sport is you absolute favourte? ', (sport) => {

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {                

              console.log(`${name} loves listening to ${listen} while coding, devouring ${eat} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
                
              rl.close();
  
            })
          })
        })
      })
    })
  })
});