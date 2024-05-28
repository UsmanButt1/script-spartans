// Global variables
var computerPlay;
var start = 0;
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const resultSpace = document.getElementById("resultSpace");

// Hide quit and reset button
document.getElementById("quit").style.display = "none";
document.getElementById("reset").style.display = "none";

const celebritiesByProfession = {
  Politics: [
    "Barack Obama (USA)",
    "Angela Merkel (Germany)",
    "Narendra Modi (India)",
    "Vladimir Putin (Russia)",
    "Jacinda Ardern (New Zealand)",
    "Emmanuel Macron (France)",
    "Justin Trudeau (Canada)",
    "Xi Jinping (China)",
    "Boris Johnson (UK)",
    "Shinzo Abe (Japan)",
    "Ellen Johnson Sirleaf (Liberia)",
    "Recep Tayyip Erdoğan (Turkey)",
    "Cyril Ramaphosa (South Africa)",
    "Moon Jae-in (South Korea)",
    "Andrés Manuel López Obrador (Mexico)",
    "Jair Bolsonaro (Brazil)",
    "Arancha González Laya (Spain)",
    "Scott Morrison (Australia)",
    "Sauli Niinistö (Finland)",
    "Prayut Chan-o-cha (Thailand)",
  ],
  Football: [
    "Lionel Messi (Argentina)",
    "Cristiano Ronaldo (Portugal)",
    "Neymar Jr. (Brazil)",
    "Kylian Mbappe (France)",
    "Megan Rapinoe (USA)",
    "Mohamed Salah (Egypt)",
    "Luka Modrić (Croatia)",
    "Paul Pogba (France)",
    "Son Heung-min (South Korea)",
    "Sergio Ramos (Spain)",
    "Robert Lewandowski (Poland)",
    "Virgil van Dijk (Netherlands)",
    "Manuel Neuer (Germany)",
    "Luis Suárez (Uruguay)",
    "Sadio Mané (Senegal)",
    "Kevin De Bruyne (Belgium)",
    "Gareth Bale (Wales)",
    "Andrea Pirlo (Italy)",
    "Didier Drogba (Ivory Coast)",
    "Alex Morgan (USA)",
  ],
  "Movie Star": [
    "Leonardo DiCaprio (USA)",
    "Scarlett Johansson (USA)",
    "Dwayne Johnson (USA)",
    "Tom Cruise (USA)",
    "Jennifer Lawrence (USA)",
    "Jackie Chan (Hong Kong)",
    "Shah Rukh Khan (India)",
    "Priyanka Chopra (India)",
    "Daniel Craig (UK)",
    "Penélope Cruz (Spain)",
    "Cate Blanchett (Australia)",
    "Jean Dujardin (France)",
    "Toni Collette (Australia)",
    "Song Kang-ho (South Korea)",
    "Lupita Nyong'o (Kenya/Mexico)",
    "Ryan Reynolds (Canada)",
    "Margot Robbie (Australia)",
    "Donnie Yen (Hong Kong)",
    "Gael García Bernal (Mexico)",
    "Mads Mikkelsen (Denmark)",
  ],
  Music: [
    "Beyoncé (USA)",
    "Taylor Swift (USA)",
    "Drake (Canada)",
    "Ed Sheeran (UK)",
    "Adele (UK)",
    "Shakira (Colombia)",
    "BTS (South Korea)",
    "Rihanna (Barbados)",
    "Jay-Z (USA)",
    "Ariana Grande (USA)",
    "Bad Bunny (Puerto Rico)",
    "Rosalía (Spain)",
    "Wizkid (Nigeria)",
    "Maluma (Colombia)",
    "Harry Styles (UK)",
    "Billie Eilish (USA)",
    "Justin Bieber (Canada)",
    "J Balvin (Colombia)",
    "Selena Gomez (USA)",
    "David Guetta (France)",
  ],
  Literature: [
    "J.K. Rowling (UK)",
    "Haruki Murakami (Japan)",
    "Chimamanda Ngozi Adichie (Nigeria)",
    "George R.R. Martin (USA)",
    "Isabel Allende (Chile)",
    "Salman Rushdie (India/UK)",
    "Margaret Atwood (Canada)",
    "Gabriel García Márquez (Colombia)",
    "Kazuo Ishiguro (UK)",
    "Orhan Pamuk (Turkey)",
    "Ngugi wa Thiong'o (Kenya)",
    "Elena Ferrante (Italy)",
    "Naguib Mahfouz (Egypt)",
    "Alice Munro (Canada)",
    "Han Kang (South Korea)",
    "Chinua Achebe (Nigeria)",
    "Jorge Luis Borges (Argentina)",
    "Jhumpa Lahiri (India/USA)",
    "Toni Morrison (USA)",
    "Umberto Eco (Italy)",
  ],
  Science: [
    "Stephen Hawking (UK)",
    "Neil deGrasse Tyson (USA)",
    "Jane Goodall (UK)",
    "Michio Kaku (USA)",
    "Jennifer Doudna (USA)",
    "Tim Berners-Lee (UK)",
    "James Watson (USA)",
    "Tu Youyou (China)",
    "Frances Arnold (USA)",
    "Emmanuelle Charpentier (France)",
    "Katherine Johnson (USA)",
    "Carl Sagan (USA)",
    "Mary Jackson (USA)",
    "Yoshinori Ohsumi (Japan)",
    "Guglielmo Marconi (Italy)",
    "Satyendra Nath Bose (India)",
    "Mae Jemison (USA)",
    "Jean-Pierre Sauvage (France)",
    "Gertrude B. Elion (USA)",
    "Ada Yonath (Israel)",
  ],
  Business: [
    "Elon Musk (USA)",
    "Jeff Bezos (USA)",
    "Warren Buffett (USA)",
    "Jack Ma (China)",
    "Mukesh Ambani (India)",
    "Bill Gates (USA)",
    "Richard Branson (UK)",
    "Oprah Winfrey (USA)",
    "Mark Zuckerberg (USA)",
    "Carlos Slim (Mexico)",
    "Aliko Dangote (Nigeria)",
    "Gina Rinehart (Australia)",
    "Amancio Ortega (Spain)",
    "Pony Ma (China)",
    "Ingvar Kamprad (Sweden)",
    "Larry Ellison (USA)",
    "Masayoshi Son (Japan)",
    "Isabel dos Santos (Angola)",
    "Dietrich Mateschitz (Austria)",
    "Marta Ortega (Spain)",
  ],
  Fashion: [
    "Coco Chanel (France)",
    "Giorgio Armani (Italy)",
    "Ralph Lauren (USA)",
    "Donatella Versace (Italy)",
    "Miuccia Prada (Italy)",
    "Karl Lagerfeld (Germany)",
    "Yves Saint Laurent (France)",
    "Tom Ford (USA)",
    "Stella McCartney (UK)",
    "Diane von Fürstenberg (Belgium)",
    "Marc Jacobs (USA)",
    "Victoria Beckham (UK)",
    "Virgil Abloh (USA)",
    "Alexander McQueen (UK)",
    "Christian Louboutin (France)",
    "Jean-Paul Gaultier (France)",
    "Anna Wintour (UK)",
    "Riccardo Tisci (Italy)",
    "Isabel Marant (France)",
    "Phoebe Philo (UK)",
  ],
  "Sports (other than football)": [
    "Michael Jordan (USA, Basketball)",
    "Serena Williams (USA, Tennis)",
    "Roger Federer (Switzerland, Tennis)",
    "Usain Bolt (Jamaica, Athletics)",
    "LeBron James (USA, Basketball)",
    "Sachin Tendulkar (India, Cricket)",
    "Tiger Woods (USA, Golf)",
    "Rafael Nadal (Spain, Tennis)",
    "Lewis Hamilton (UK, Formula 1)",
    "Simone Biles (USA, Gymnastics)",
    "Michael Phelps (USA, Swimming)",
    "Virat Kohli (India, Cricket)",
    "Naomi Osaka (Japan, Tennis)",
    "Novak Djokovic (Serbia, Tennis)",
    "Floyd Mayweather (USA, Boxing)",
    "Conor McGregor (Ireland, MMA)",
    "Cristiano Ronaldo (Portugal, Football)",
    "Lionel Messi (Argentina, Football)",
    "Eliud Kipchoge (Kenya, Athletics)",
    "Ayrton Senna (Brazil, Formula 1)",
  ],
  Art: [
    "Pablo Picasso (Spain)",
    "Frida Kahlo (Mexico)",
    "Vincent van Gogh (Netherlands)",
    "Andy Warhol (USA)",
    "Leonardo da Vinci (Italy)",
    "Salvador Dalí (Spain)",
    "Claude Monet (France)",
    "Michelangelo (Italy)",
    "Henri Matisse (France)",
    "Banksy (UK)",
    "Georgia O'Keeffe (USA)",
    "Jackson Pollock (USA)",
    "Yayoi Kusama (Japan)",
    "Rene Magritte (Belgium)",
    "Keith Haring (USA)",
    "Ai Weiwei (China)",
    "David Hockney (UK)",
    "Zaha Hadid (Iraq/UK)",
    "Gustav Klimt (Austria)",
    "Ansel Adams (USA)",
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  const professionSelect = document.getElementById("profession-select");
  const celebritySelect = document.getElementById("celebrity-select");
  const playerName = document.getElementById("player-name");
  const computerName = document.getElementById("computer-name");

  let profession = professionSelect.value;

  professionSelect.addEventListener("change", function () {
    profession = professionSelect.value;
    updateCelebrityOptions(profession);
  });

  function updateCelebrityOptions(profession) {
    celebritySelect.innerHTML = '<option value="">Select Celebrity</option>';
    if (profession && celebritiesByProfession[profession]) {
      for (const celebrity of celebritiesByProfession[profession]) {
        const option = document.createElement("option");
        option.value = celebrity;
        option.textContent = celebrity;
        celebritySelect.appendChild(option);
      }
    }
  }

  function formatCelebrityName(celebrity) {
    return celebrity.split("(")[0].trim().toLowerCase().replace(/\s/g, "-");
  }

  celebritySelect.addEventListener("change", function () {
    const selectedCelebrity = celebritySelect.value;
    if (selectedCelebrity) {
      playerName.textContent = selectedCelebrity;
      const playerImage = formatCelebrityName(selectedCelebrity);
      console.log(`Player image path: ./static/images/${playerImage}.jpg`);
      document.getElementById(
        "player-image"
      ).src = `./assets/images/${playerImage}.jpg`;
      document.getElementById("player-image").alt = selectedCelebrity;

      const randomCelebrity = getRandomCelebrity();
      computerName.textContent = randomCelebrity;
      const computerImage = formatCelebrityName(randomCelebrity);
      console.log(`Computer image path: ./static/images/${computerImage}.jpg`);
      document.getElementById(
        "computer-image"
      ).src = `./assets/images/${computerImage}.jpg`;
      document.getElementById("computer-image").alt = randomCelebrity;
    }
  });

  function getRandomCelebrity() {
    const allCelebrities = [];
    for (const profession in celebritiesByProfession) {
      allCelebrities.push(...celebritiesByProfession[profession]);
    }
    const randomIndex = Math.floor(Math.random() * allCelebrities.length);
    return allCelebrities[randomIndex];
  }
});

// Start button event listener
let startButton = document.getElementById("start");

startButton.addEventListener("click", function() {
    start = 1;
    playerImage.style.background = "";
    computerImage.style.background = "";
    document.getElementById("quit").style.display = "";
    document.getElementById("start").style.display = "";
    resultSpace.innerText = "Make your choice using the buttons and see the result here!";

// setTimeOut function
setTimeout(()=> {
    computerImage.innerText = "Waiting for player";
    }, 500);
});

// Quit button event listener
let quitButton = document.getElementById("quit");

quitButton.addEventListener("click", function() {
    location.reload();
});

// Reset button event listener
let resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function() {
    location.reload();
})

// Event listeners for the player choices and run functions when selected
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let lizardButton = document.getElementById("lizard");
let spockButton = document.getElementById("spock");

rockButton.addEventListener("click", function() {
    if (start === 1){
        playerChoice('rock');
        computerChoice();
        runGame('rock');
    }
});

paperButton.addEventListener("click", function() {
    if (start === 1){
        playerChoice('paper');
        computerChoice();
        runGame('paper');
    }
});

scissorsButton.addEventListener("click", function() {
    if (start === 1){
        playerChoice('scissors');
        computerChoice();
        runGame('scissors');
    }
});

lizardButton.addEventListener("click", function() {
    if (start === 1){
        playerChoice('lizard');
        computerChoice();
        runGame('lizard');
    }
});

spockButton.addEventListener("click", function() {
    if (start === 1){
        playerChoice('spock');
        computerChoice();
        runGame('spock');
    }
});

// Images for Player selected game choice
function playerChoice(playType) {
    switch (playType) {
        case "rock":
            playerImage.style.background="url(assets/images/rock.png)";
            playerImage.style.backgroundSize="cover";
            break;
        case "paper":
            playerImage.style.background="url(assets/images/paper.png)";
            playerImage.style.backgroundSize="cover";
            break;
        case "scissors":
            playerImage.style.background="url(assets/images/scissors.png)";
            playerImage.style.backgroundSize="cover";
            break;
        case "lizard":
            playerImage.style.background="url(assets/images/lizard.png)";
            playerImage.style.backgroundSize="cover";
            break;
        case "spock":
            playerImage.style.background="url(assets/images/spock.png)";
            playerImage.style.backgroundSize="cover";
            break;
    }
}

// Computer randomly selects game choice

function computerChoice() {
    computerPlay = Math.floor(Math.random() * 5);

    switch (computerPlay) {
        case 0:
            computerImage.innerText = "";
            computerImage.style.background="url(assets/images/rock.png";
            computerImage.style.backgroundSize="cover";
            break;
        case 1:
            computerImage.innerText = "";
            computerImage.style.background="url(assets/images/paper.png";
            computerImage.style.backgroundSize="cover";
            break;
        case 2:
            computerImage.innerText = "";
            computerImage.style.background="url(assets/images/scissors.png";
            computerImage.style.backgroundSize="cover";
            break;
        case 3:
            computerImage.innerText = "";
            computerImage.style.background="url(assets/images/lizard.png";
            computerImage.style.backgroundSize="cover";
            break;
        case 4:
            computerImage.innerText = "";
            computerImage.style.background="url(assets/images/spock.png";
            computerImage.style.backgroundSize="cover";
            break;
    }
}

// Main game loop
function runGame(playType) {
    switch(computerPlay) {
        case 0:
            if (playType == "paper") {
                resultMsg("rockPaper");
                playerScore();
            } else if
            (playType == "spock") {
                resultMsg("rockSpock");
                playerScore();
            } else if
            (playType == "rock") {
                resultMsg("draw");
            } else if
            (playType == "lizard") {
                resultMsg("rockLizard");
                computerScore();
            } else {
                resultMsg("rockScissors");
                computerScore();
            }
            break;

        case 1:
            if (playType == "paper") {
                resultMsg("draw");
            } else if
            (playType == "spock") {
                resultMsg("paperSpock");
                computerScore();
            } else if
            (playType == "rock") {
                resultMsg("paperRock");
                computerScore();
            } else if
            (playType == "lizard") {
                resultMsg("paperLizard");
                playerScore();
            } else {
                resultMsg("paperScissors");
                playerScore();
            }
            break;

        case 2:
            if (playType == "paper") {
                resultMsg("scissorsPaper");
                computerScore();
            } else if
            (playType == "spock") {
                resultMsg("scissorsSpock");
                playerScore();
            } else if
            (playType == "rock") {
                resultMsg("scissorsRock");
                playerScore();
            } else if
            (playType == "lizard") {
                resultMsg("scissorsLizard");
                computerScore();
            } else {
                resultMsg("draw");
            }
            break;

        case 3:
            if (playType == "paper") {
                resultMsg("lizardPaper");
                computerScore();
            } else if
            (playType == "spock") {
                resultMsg("lizardSpock");
                computerScore();
            } else if
            (playType == "rock") {
                resultMsg("lizardRock");
                playerScore();
            } else if
            (playType == "lizard") {
                resultMsg("draw");
            } else {
                resultMsg("lizardScissors");
                playerScore();
            }
            break;

        case 4:
            if (playType == "paper") {
                resultMsg("spockPaper");
                playerScore();
            } else if
            (playType == "spock") {
                resultMsg("draw");
            } else if
            (playType == "rock") {
                resultMsg("spockRock");
                computerScore();
            } else if
            (playType == "lizard") {
                resultMsg("spockLizard");
                playerScore();
            } else {
                resultMsg("spockScissors");
                computerScore();
            }
            break;
    }
}

// runGame outcome displays corresponding message

function resultMsg (resultType) {
    switch (resultType){
        case "draw":
            resultSpace.innerText = "It's a draw - have another go!";
            resultSpace.style.borderColor = "#2C3E50";
            break;

        // Rock vs
        case "rockPaper":
            resultSpace.innerText = "Paper covers rock - ${playerName} wins!";
            resultSpace.style.borderColor = "green";
            break;

        case "rockSpock":
            resultSpace.innerText = "Spock vaporizes rock - ${playerName} wins!";
            resultSpace.style.borderColor = "green";
            break;

        case "rockLizard":
            resultSpace.innerText = "Rock crushes lizard - ${computerName} wins!";
            resultSpace.style.borderColor = "red";
            break;

        case "rockScissors":
            resultSpace.innerText = "Rock crushes scissors - ${computerName} wins!";
            resultSpace.style.borderColor = "red";
            break;

        // Paper vs
        case "paperRock":
            resultSpace.innerText = "Paper covers rock - ${computerName} wins!";
            resultSpace.style.borderColor = "red";
            break;

        case "paperScissors":
            resultSpace.innerText = "Scissors cuts paper - ${playerName} wins!";
            resultSpace.style.borderColor = "green";
            break;

        case "paperLizard":
            resultSpace.innerText = "Lizard eats paper - ${playerName} wins!";
            resultSpace.style.borderColor = "green";
            break;
        
        case "paperSpock":
            resultSpace.innerText = "Paper disproves spock - ${computerName} wins!";
            resultSpace.style.borderColor = "red";
            break;

        // Scissors vs
        case "scissorsRock":
            resultSpace.innerText = "Rock crushes scissors - ${playerName} wins!";
            resultSpace.style.borderColor = "green";
            break;

        case "scissorsPaper":
            resultSpace.innerText = "Scissors cuts paper - ${computerName} wins!";
            resultSpace.style.borderColor = "red";
            break;

        case "scissorsLizard":
            resultSpace.innerText = "Scissors decapitates lizard - ${computerName} wins!";
            resultSpace.style.borderColor = "red";
            break;

        case "scissorsSpock":
            resultSpace.innerText = "Spock smashes scissors - ${playerName} wins!";
            resultSpace.style.borderColor = "green";
            break;

        // Lizard vs
        case "lizardRock":
            resultSpace.innerText = "Rock crushes lizard - ${playerName} wins!";
            resultSpace.style.borderColor = "green";
            break;

        case "lizardPaper":
            resultSpace.innerText = "Lizard eats paper - ${computerName} wins!";
            resultSpace.style.borderColor = "red";
            break;

        case "lizardScissors":
            resultSpace.innerText = "Scissors decapitates lizard - ${playerName} wins!";
            resultSpace.style.borderColor = "green";
            break;

        case "lizardSpock":
            resultSpace.innerText = "Lizard poisons spock - ${computerName} wins!";
            resultSpace.style.borderColor = "red";
            break;

        // Spock vs
        case "spockRock":
            resultSpace.innerText = "Spock vaporizes rock - ${computerName} wins!";
            resultSpace.style.borderColor = "red";
            break;

        case "spockPaper":
            resultSpace.innerText = "Paper disproves spock - ${playerName} wins!";
            resultSpace.style.borderColor = "green";
            break;

        case "spockScissors":
            resultSpace.innerText = "Spock smashes scissors - ${computerName} wins!";
            resultSpace.style.borderColor = "red";
            break;

        case "spockLizard":
            resultSpace.innerText = "Lizard poisons spock - ${playerName} wins!";
            resultSpace.style.borderColor = "green";
            break;
    }
}

// If score => 5, then game-over and winner shown but if score is < 5, then score counter updated
function playerScore() {
    let scorePlayer = document.getElementById("scorePlayer").innerText;

    if(scorePlayer <=4) {
        document.getElementById(scorePlayer).innerText = ++scorePlayer;
    } else {
        resultSpace.innerText = "${playerName} wins! Click Reset to play again.";
        resultSpace.style.backgroundColor = "green";
        resultSpace.style.color = "white";
        document.getElementById("reset").style.display = "";
        document.getElementById("quit").style.display = "none";
        document.getElementById("start").style.display = "none";
        start = 0;
    }
}

function computerScore() {
    let scoreComputer = document.getElementById("scoreComputer").innerText;

    if (scoreComputer <= 4) {
        document.getElementById("scoreComputer").innerText = ++scoreComputer;
    } else {
        resultSpace.innerText = "Unlucky! ${computerName} wins! Click Reset to play again.";
        resultSpace.style.backgroundColor = "red";
        resultSpace.style.color = "white";
        document.getElementById("reset").style.display = "";
        document.getElementById("quit").style.display = "none";
        document.getElementById("start").style.display = "none";
        start = 0;
    }
}