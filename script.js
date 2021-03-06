let ballPrice, gamePrice;
let is4Players, isAdd;
let scoreItem1, scoreItem2, scoreItem3
let people; // People variables is when Private ball goes in and only one person effect so naming not include 1, 2, 3
let s1, s2, s3;

// This function basically Initialize the things
document.getElementById("startGameButton").onclick = function() {
    Init();

    Set_All_Name();
    Remove_All_Input();
};

// Refresh the whole page to reset all
document.getElementById("resetAll").onclick = function() {
    Reset_All();
}

//#region Public, Private Foul Buttonssss
//#region Player 1 Score Buttons
document.getElementById("player1PublicButton").onclick = function() {
    isAdd = document.getElementById("player1Add").checked ? true : false;
    PublicScore(ballPrice, is4Players, isAdd, "score21", "score31", "score41")
};
document.getElementById("player1PrivateButton").onclick = function() {
    isAdd = document.getElementById("player1Add").checked ? true : false;
    if (is4Players) {PrivateScore(ballPrice, isAdd, "score41")}
    else if(!is4Players) {PrivateScore(ballPrice, isAdd, "score31")}
};
document.getElementById("player1FoulButton").onclick = function() {
    isAdd = document.getElementById("player1Add").checked ? true : false;
    FoulScore(ballPrice, isAdd, "player1WaterScore")
};
//#endregion
//#region Player 2 Score Buttons
document.getElementById("player2PublicButton").onclick = function() {
    isAdd = document.getElementById("player2Add").checked ? true : false;
    PublicScore(ballPrice, is4Players, isAdd, "score12", "score32", "score42")
};
document.getElementById("player2PrivateButton").onclick = function() {
    isAdd = document.getElementById("player2Add").checked ? true : false;
    if (is4Players) {PrivateScore(ballPrice, isAdd, "score12")}
    else if(!is4Players) {PrivateScore(ballPrice, isAdd, "score12")}
};
document.getElementById("player2FoulButton").onclick = function() {
    isAdd = document.getElementById("player2Add").checked ? true : false;
    FoulScore(ballPrice, isAdd, "player2WaterScore")
};
//#endregion
//#region Player 3 Score Buttons
document.getElementById("player3PublicButton").onclick = function() {
    isAdd = document.getElementById("player3Add").checked ? true : false;
    PublicScore(ballPrice, is4Players, isAdd, "score13", "score23", "score43")
};
document.getElementById("player3PrivateButton").onclick = function() {
    isAdd = document.getElementById("player3Add").checked ? true : false;
    if (is4Players) {PrivateScore(ballPrice, isAdd, "score23")}
    else if(!is4Players) {PrivateScore(ballPrice, isAdd, "score23")}
};
document.getElementById("player3FoulButton").onclick = function() {
    isAdd = document.getElementById("player3Add").checked ? true : false;
    FoulScore(ballPrice, isAdd, "player3WaterScore")
};
//#endregion
//#region Player 4 Score Buttons
document.getElementById("player4PublicButton").onclick = function() {
    isAdd = document.getElementById("player4Add").checked ? true : false;
    PublicScore(ballPrice, is4Players, isAdd, "score14", "score24", "score34")
};
document.getElementById("player4PrivateButton").onclick = function() {
    isAdd = document.getElementById("player4Add").checked ? true : false;
    if (is4Players) {PrivateScore(ballPrice, isAdd, "score34")}
    //Actually no need check whether there is player 4, THIS IS PLAYER 4!
    //else if(!is4Players) {PrivateScore(ballPrice, isAdd, "score13")}
};
document.getElementById("player4FoulButton").onclick = function() {
    isAdd = document.getElementById("player4Add").checked ? true : false;
    FoulScore(ballPrice, isAdd, "player4WaterScore")
};
//#endregion
//#endregion

//#region Public Score and Private Score function
// This function handle score update, such as add, undo for public and private
function PublicScore(score, is4Players, isAdd, first, second, third) {
    s1 = Number(document.getElementById(first).textContent)
    s2 = Number(document.getElementById(second).textContent)

    if (is4Players) {
        s3 = Number(document.getElementById(third).textContent)

        if (isAdd) {
            s1 += score;
            s2 += score;
            s3 += score;

            document.getElementById(first).textContent = s1;
            document.getElementById(second).textContent = s2;
            document.getElementById(third).textContent = s3;
        }
        else if(!isAdd) {
            if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
                Alert_Undo();
            }
            else {
                s1 -= score;
                s2 -= score;
                s3 -= score;
        
                document.getElementById(first).textContent = s1;
                document.getElementById(second).textContent = s2;
                document.getElementById(third).textContent = s3;
            }
        }
    }
    else if(!is4Players) {
        if (isAdd) {
            s1 += score;
            s2 += score;

            document.getElementById(first).textContent = s1;
            document.getElementById(second).textContent = s2;
        }
        else if(!isAdd) {
            if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
                Alert_Undo();
            }
            else {
                s1 -= score;
                s2 -= score;
        
                document.getElementById(first).textContent = s1;
                document.getElementById(second).textContent = s2;
            }
        }
    }
}
function PrivateScore(score, isAdd, people) {
    s1 = Number(document.getElementById(people).textContent)

    if (isAdd) {
        s1 += score;
        document.getElementById(people).textContent = s1;
    }
    else if(!isAdd) {
        if (s1 <= 0) {
            Alert_Undo();
        }
        else {
            s1 -= score;    
            document.getElementById(people).textContent = s1;
        }
    }
}
function FoulScore(score, isAdd, people) {      // Same as PrivateScore, may change later
    s1 = Number(document.getElementById(people).textContent)

    if (isAdd) {
        s1 += score;
        document.getElementById(people).textContent = s1;
    }
    else if(!isAdd) {
        if (s1 <= 0) {
            Alert_Undo();
        }
        else {
            s1 -= score;    
            document.getElementById(people).textContent = s1;
        }
    }
}
//#endregion

function Alert_Undo() {
    alert("Hello, please think twice");
    alert("Someone score is already zero");
}

// Initialize the variables just to make things look clear
function Init() {
    console.log("Init Start")
    ballPrice = Number(document.getElementById("ballPriceText").value);
    gamePrice = Number(document.getElementById("gamePriceText").value);

    is4Players = document.getElementById("fourPlayers").checked ? true : false;

    if (!is4Players) {
        Remove_Player4();
    }
}

// Update the name in label near input fields, table
function Set_All_Name() {
    console.log("Set_All_Name Start")
    if (document.getElementById("fourPlayers").checked) {
        document.getElementById("player1NameColumn").textContent = document.getElementById("player1NameInput").value;
        document.getElementById("player1NameRow").textContent = player1Name = document.getElementById("player1NameInput").value;
        document.getElementById("player2NameColumn").textContent = document.getElementById("player2NameInput").value;
        document.getElementById("player2NameRow").textContent = player1Name = document.getElementById("player2NameInput").value;
        document.getElementById("player3NameColumn").textContent = document.getElementById("player3NameInput").value;
        document.getElementById("player3NameRow").textContent = player1Name = document.getElementById("player3NameInput").value;
        document.getElementById("player4NameColumn").textContent = document.getElementById("player4NameInput").value;
        document.getElementById("player4NameRow").textContent = player1Name = document.getElementById("player4NameInput").value;

        document.getElementById("player1NameLabel").textContent = "Player 1: " + document.getElementById("player1NameInput").value;
        document.getElementById("player2NameLabel").textContent = "Player 2: " + document.getElementById("player2NameInput").value;
        document.getElementById("player3NameLabel").textContent = "Player 3: " + document.getElementById("player3NameInput").value;
        document.getElementById("player4NameLabel").textContent = "Player 4: " + document.getElementById("player4NameInput").value;        

        document.getElementById("player1Id").textContent = document.getElementById("player1NameInput").value;
        document.getElementById("player2Id").textContent = document.getElementById("player2NameInput").value;
        document.getElementById("player3Id").textContent = document.getElementById("player3NameInput").value;
        document.getElementById("player4Id").textContent = document.getElementById("player4NameInput").value;
    }
    else if(document.getElementById("threePlayers").checked) {
        document.getElementById("player1NameColumn").textContent = document.getElementById("player1NameInput").value;
        document.getElementById("player1NameRow").textContent = player1Name = document.getElementById("player1NameInput").value;
        document.getElementById("player2NameColumn").textContent = document.getElementById("player2NameInput").value;
        document.getElementById("player2NameRow").textContent = player1Name = document.getElementById("player2NameInput").value;
        document.getElementById("player3NameColumn").textContent = document.getElementById("player3NameInput").value;
        document.getElementById("player3NameRow").textContent = player1Name = document.getElementById("player3NameInput").value;
        document.getElementById("player4NameColumn").textContent = "";
        document.getElementById("player4NameRow").textContent = "";

        document.getElementById("player1NameLabel").textContent = "Player 1: " + document.getElementById("player1NameInput").value;
        document.getElementById("player2NameLabel").textContent = "Player 2: " + document.getElementById("player2NameInput").value;
        document.getElementById("player3NameLabel").textContent = "Player 3: " + document.getElementById("player3NameInput").value;
        document.getElementById("player4NameLabel").textContent = "";        

        document.getElementById("player1Id").textContent = document.getElementById("player1NameInput").value;
        document.getElementById("player2Id").textContent = document.getElementById("player2NameInput").value;
        document.getElementById("player3Id").textContent = document.getElementById("player3NameInput").value;
        document.getElementById("player4Id").textContent = "";

        document.getElementById("score14").textContent = "";
        document.getElementById("score24").textContent = "";
        document.getElementById("score34").textContent = "";
        document.getElementById("score41").textContent = "";
        document.getElementById("score42").textContent = "";
        document.getElementById("score43").textContent = "";
    }

    document.getElementById("ballPriceLabel").textContent = "Ball Price: " + ballPriceText.value;
    document.getElementById("gamePriceLabel").textContent = "Game Price: " + gamePriceText.value;
}

// Remove input field to make the interface look clear
function Remove_All_Input() {
    console.log("Remove_All_Input Start")
    let field = document.getElementById("inputField");

    field.removeChild(document.getElementById("player1NameInput"));
    field.removeChild(document.getElementById("player2NameInput"));
    field.removeChild(document.getElementById("player3NameInput"));
    field.removeChild(document.getElementById("player4NameInput"));
    field.removeChild(document.getElementById("ballPriceText"));
    field.removeChild(document.getElementById("gamePriceText"));

    field.removeChild(document.getElementById("startGameButton"));
}

// Remove player buttons: public, private, radio options etc...
function Remove_Player4() {
    console.log("Remove_Player4 Start")

    let fieldDiv = document.getElementById("waterField");
    fieldDiv.removeChild(document.getElementById("player4WaterField"));
    fieldDiv.removeChild(document.getElementById("player4WaterScore"));

    let fieldButton = document.getElementById("Player4Buttons");

    fieldButton.removeChild(document.getElementById("player4PublicButton"));
    fieldButton.removeChild(document.getElementById("player4PrivateButton"));
    fieldButton.removeChild(document.getElementById("player4FoulButton"));
    fieldButton.removeChild(document.getElementById("player4Add"));
    fieldButton.removeChild(document.getElementById("player4Undo"));
    fieldButton.removeChild(document.getElementById("player4AddLabel"));
    fieldButton.removeChild(document.getElementById("player4UndoLabel"));
}

// Reset all things by refresh the whole page
function Reset_All() {
    console.log("Reset_All Start")
    var okToRefresh = confirm("Reset all will reset all name and score");

    if (okToRefresh) {
        {
            setTimeout("location.reload(true);", 1000);
        }
    }
}