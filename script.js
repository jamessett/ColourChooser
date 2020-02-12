let NUMROWS = 4;
let NUMCOLS = 4;
let NUMCELLS = NUMROWS * NUMCOLS;
let DIFFSCALE = 50;
let score = 0;
let results = ' ';

let createTable = function(){


    //FOR LOOP - used when you KNOW how many times to loop something.

    //FOR(initialize control variable; state the boolean expression; update control variable)

    let Sith = Math.floor(Math.random()*256);
    let Yoda = Math.floor(Math.random()*256);
    let Jedi = Math.floor(Math.random()*256);

    let regColor = "rgb(" + Sith + "," + Yoda + "," + Jedi + ")";
    let diffColor = "rgb(" + (Sith + DIFFSCALE) + "," + (Yoda + DIFFSCALE) + "," + (Jedi + DIFFSCALE) + ")";

    let randRow = Math.floor(Math.random()*NUMROWS) + 1;
    let randCols = Math.floor(Math.random()*NUMCOLS) + 1;

    let table = document.createElement("TABLE");

    for(let row = 1; row <= NUMROWS; row++){
        let tableRow = document.createElement("TR");
        table.appendChild(tableRow);

        for(let col = 1; col <= NUMCOLS; col++){

            let cell = document.createElement("TD");
            cell.onclick = function(){checkWin(this)};
            cell.style.backgroundColor = regColor;

            if(row === randRow && col === randCols){
                cell.style.backgroundColor = diffColor;
                cell.id = "ChosenOne";
            }
            tableRow.appendChild(cell);
        }

    }

    table.classList.add("aside");

    let placeofTable = document.getElementById("content");
    placeofTable.innerHTML = " ";
    placeofTable.appendChild(table);

    let scoreRow = document.createElement("TR");
    let scoreRow2 = document.createElement("TR");
    let scoreRow3 = document.createElement("TR");
    let scoreCol = document.createElement("TD");
    let scoreCol2 = document.createElement("TD");
    let scoreCol3 = document.createElement("TD");
    scoreCol3.id = "results";
    scoreCol.innerText = "Player's Score";
    scoreCol2.innerText = score;
    scoreCol3.innerText = results;
    scoreCol.classList.add ("smallCell");
    scoreCol2.classList.add ("smallCell");
    scoreCol3.classList.add("smallCell");
    scoreRow.appendChild(scoreCol);
    scoreRow2.appendChild(scoreCol2);
    scoreRow3.appendChild(scoreCol3);

    let scoreboard = document.createElement("TABLE");
    scoreboard.classList.add("aside");
    scoreboard.appendChild(scoreRow);
    scoreboard.appendChild(scoreRow2);
    scoreboard.appendChild(scoreRow3);

    placeofTable.appendChild(scoreboard);
};

let checkWin = function(BugsBunny){
    if(BugsBunny.id === "ChosenOne"){
        results = "You Found It!";
        score++;
        if (score >= 10){
            score = 0;
            DIFFSCALE -=5;
        }
        if (DIFFSCALE <= 0){
            winMenu();
        }else{
            createTable()
        }

    }else{
        results = "Wrong One";
        score--;
        if(score <= -5){
            score = 0;
            DIFFSCALE = 50;
            startMenu();
        }else{
            createTable()
        }
    }
};

let winMenu = function(){

    let title = document.createElement("H1");
    title.innerText = "Color Chooser";

    let directions = document.createElement("P");
    directions.innerText = "YOU WON, YOU BEAT THE GAME! CLICK TO TRY AGAIN!";

    let begin = document.createElement("BUTTON");
    begin.innerText = "BEGIN";
    begin.onclick = createTable;

    let display = document.getElementById("content");
    display.innerHTML = " ";
    display.appendChild(title);
    display.appendChild(directions);
    display.appendChild(begin);
};

let startMenu = function(){

    let title = document.createElement("H1");
    title.innerText = "Color Chooser";

    let directions = document.createElement("P");
    directions.innerText = "Find the color that is different. Score a point if you do! Lose a point if you don't. A score of 10 progresses you to the next level. A score of -5 ends the game";

    let begin = document.createElement("BUTTON");
    begin.innerText = "BEGIN";
    begin.onclick = createTable;

    let display = document.getElementById("content");
    display.innerHTML = " ";
    display.appendChild(title);
    display.appendChild(directions);
    display.appendChild(begin);
};
