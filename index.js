const alan = {
    ask: function(question, answer){
        console.log(question)
        alan.responds = answer
    }
}

// alan.ask("Stay in bed or go in early?", function(answer){
//     if (answer.toLowerCase() == "stay in bed") {
//         alan.ask("Walk or Uber?", function(answer){
//             if (answer.toLowerCase() == "walk") {
//                 alan.ask("Tunnels or rain?", function(answer){
//                     if (answer.toLowerCase() == "tunnels") {
//                         console.log("You have died of dysentery")
//                     }
//                     else if (answer.toLowerCase() == "rain") {
//                         alan.ask("Turn back or continue?", function(answer){
//                             if (answer.toLowerCase() == "turn back") {
//                                 console.log("You have died of dysentery")
//                             } else if (answer.toLowerCase() == "continue") {
//                                 alan.ask("Michael: Have you pushed your repo yet? >:|", function(answer){
//                                     if (answer.toLowerCase() == "yes") {
//                                         console.log("You have transformed into the ultrafast parrot. Happy end!")
//                                     }
//                                     else if (answer.toLowerCase() == "no") {
//                                         console.log("You have died of dysentery.")
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//             else if (answer.toLowerCase() == "uber"){
//                 alan.ask("Join driver for a drink, stay in his car, or walk?", function(answer){
//                     if (answer.toLowerCase() == "join driver for a drink"){
//                         console.log("You have died of dysentery.")
//                     }else if (answer.toLowerCase() == "stay in his car"){
//                         console.log("You have died of dysentery.")
//                     }else if (answer.toLowerCase() == "walk"){
//                         alan.ask("Tunnels or rain?", function(answer){
//                             if (answer.toLowerCase() == "tunnels") {
//                                 console.log("You have died of dysentery")
//                             }
//                             else if (answer.toLowerCase() == "rain") {
//                                 alan.ask("Turn back or continue?", function(answer){
//                                     if (answer.toLowerCase() == "turn back") {
//                                         console.log("You have died of dysentery")
//                                     } else if (answer.toLowerCase() == "continue") {
//                                         alan.ask("Michael: Have you pushed your repo yet? >:|", function(answer){
//                                             if (answer.toLowerCase() == "yes") {
//                                                 console.log("You have transformed into the ultrafast parrot. Happy end!")
//                                             }
//                                             else if (answer.toLowerCase() == "no") {
//                                                 console.log("You have died of dysentery.")
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//     })
//     }
//     else if (answer.toLowerCase() == "go in early"){
//         alan.ask("Dance or don't?", function(answer){
//             if (answer.toLowerCase() == "dance"){
//                 console.log("You have died of dysentery.")
//             }else if(answer.toLowerCase() == "don't"){
//                 console.log("You have transformed into the ultrafast parrot. Happy end!")
//             }
//         })
//     }
// })



alan.ask("Stay in bed or go in early?", function(answer){
    switch(answer.toLowerCase()){
        case "stay in bed":
            alan.ask("Walk or uber?", function(answer){
                switch(answer.toLowerCase()){
                    case "walk":
                        rain_or_tunnels()
                    break;
                    case "uber":
                        alan.ask("Join driver for a drink, stay in his car, or walk?", function(answer){
                            switch(answer.toLowerCase()){
                                case "join driver for a drink":
                                    console.log("You die of dysentery.")
                                break;
                                case "stay in his car":
                                    console.log("You die of dysentery.")
                                break;
                                case "walk":
                                    rain_or_tunnels()
                                break;
                            }
                        })
                    break;
                }
            })
        break;
        case "go in early":
        alan.ask("Dance or nah?", function(answer){
            switch(answer.toLowerCase()){
                case "dance":
                    console.log("You die of dysentery.")
                break;
                case "nah":
                    console.log("You have transformed into the ultrafast parrot. Happy end!")
                break;
            }
        })
        break;
        
    }
})

const rain_or_tunnels = function(){alan.ask("Rain or tunnels?", function(answer){
    switch(answer.toLowerCase()){
        case "rain":
            alan.ask("Turn back or continue?", function(answer){
                switch(answer.toLowerCase()){
                    case "turn back":
                        console.log("You have died of dysentery.")
                    break;
                    case "continue":
                        alan.ask("Michael: Have you pushed your repo yet? >:|", function(answer){
                            switch(answer.toLowerCase()){
                                case "yes":
                                    console.log("You have transformed into the ultrafast parrot. Happy end!")
                                break;
                                case "no":
                                    console.log("You have died of dysentery.")
                                break;
                            }
                        })
                    break;
                }
            })
        break;
        case "tunnels":
            console.log("You have died of dysentery.")
        break;
    }
})
}