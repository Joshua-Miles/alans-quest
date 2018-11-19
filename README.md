# Alan's Quest

The goal of this lab is to build a console application which interviews a developer.
You already have a function `alan.ask`, which accepts a `(string) question` and a `(function) callback`.
The question will be logged in the console, and then the callback will be saved to `say`.
In the console you should be able to answer the question by calling `alan.responds` (`alan.responds("Sleep In")`, for example), which will invoke the callback you passed into `alan.ask`.

## Deliverables

- Use the ask function to build an survey. Depending on how each question is answered, a different question should be asked next.
- At the end of the quiz, print all of the questions and answers in the console.
- Question structure:
  - You are Alan Hong. You wake up at your bougie penthouse in Downtown Houston. Neon feathers litter the Do you sleep in, or go to work early to deploy the discussion question?
    - Stay in bed:
      - You awaken at 8:50 with 10 minutes left to reach work. Do you walk or call an Uber?
        - Uber
          - The Uber driver stops at JP McNastys for a morning beer. One last customer walks out and then stumbles onto the ground. This Uber driver has built a fine crust on his seats and you start getting ansy. Do you stay in his car, join him, or decide to walk instead?
            - Walk (should route to other walk option)
            - Join him
              - You die of dysentery. You could have drank at WeWork, what else is that free beer for? A bright neon parrot flies off in the distance.
            - Stay in his car
              - You die of dysentery. It's the crust, it got inside you fingernails. Come on man, this was totally not cool. A bright neon parrot flies off in the distance.
        - Walk
          - It begins to rain. Do you run for the tunnels or brave the rain?
            - Tunnels
              - You die of dysentery. A bright neon parrot flies off in the distance. A single tear drops from his bright neon eyes.
            - Brave the Rain
              - You realize the water is cold and you start to shiver, you need to get to Flatiron ASAP. Some jerk on an electric longboard speeds across from you, splashing you in the process. He looks at you, unamused, muttering something about testing. Should you turn back now or continue walking?
                - Turn back
                  - A sharp pain has hit you, you grab your stomach, falling to your knees. You have died of dysentery.
                - Continue Walking
                  - You see the gleeming towers of WeWork, anticipating the warmth and ridiculous lab exercises that come with you entering. You have made it this far and you push the door open and enter the elevator. As you enter in, hair dripping from the rain, you realize Michael is looking at you fiercely. "Alan, have you pushed and commited your work??!?!"
                    - Have Pushed \* Michaels look softens and a smile forms on his face. He realizes that you have done your work and leaves you be. You start to feel funny inside and look down at your hands. But they aren't hands, they are feathers. They slowly start to change and then all the sudden, burst into a million neon colors all vibing at a perfect ultrafast beat. You transform into a glorious neon parrot and fly off into the sunrise, bobbing your head side to side. You have truly ascended.
                    - Have not pushed  
                       \* You die of dysentery. That jerk that splashed you with water must have hit some sewer water. It's the only way! A bright neon parrot flies off in the distance, a single tear falling from his bright neon eyes. Shoulda pushed up, you might have been able to load your work back there.
    - Deploy discussion question:
      - You arrive early. Megan, Barbara, Bilikis and Janet are playing So You Think You Can ~Dance~ Drink. You're feeling a little disturbed at what you see but the hum of the Cha Cha slide brings you in closer. Do you join or nah?
        - Join them
          - You die of dysentery. This is the only outcome, it is inevitable. You are at work Alan, come on man. A bright neon parrot flies off in the distance, dropping a fat bright neon poop before it flutters away with loud squawk "OK".
        - Nah
          - You have successfully avoided dysentery. Great job. You start to feel funny inside and look down at your hands. But they aren't hands, they are feathers. They slowly start to change and then all the sudden, burst into a million neon colors all vibing at a perfect ultrafast beat. You have become the ultimate developer's friend, the ultra fast party parrot himself. You have truly ascended.
