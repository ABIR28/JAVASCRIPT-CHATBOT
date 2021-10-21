function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input == "hi") {
        return "Hello there!";
    }else if (input == "what is the minimum price of your picture" || input == "what is the minimum price of your picture?"){
        return "2$ is the minimum price"
    }else if (input == "how are you" || input == "What are you doing") {
        return "I am Fine :)";
    }else if (input == "goodbye") {
        return " Ok! Talk to you later!";
    }else if (input == "show me a sample picture") {
        return document.write("<img src='https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg' class='image' style='width:1366px;height:768px;' alt='#' />");    
    }else if(input == " "){
        return " ";
    }else if(input == " "){
        return " ";
    }else if(input == " "){
        return " ";
    }else if(input == " "){
        return "";
    }else if(input == " "){
        return "";
    }else if(input == " "){
        return "";
    }else if(input == " "){
        return "";
    }else if(input == " "){
        return "";
    }else if(input == " "){
        return "";
    }else if(input == " "){
        return "";
    }else if(input == " "){
        return "";
    }else if(input == " "){
        return "";
    }else if(input == " "){
        return "";
    }else {
        return "Try asking something else!";
    }

    // Default Response

}