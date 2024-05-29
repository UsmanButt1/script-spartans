document.addEventListener("DOMContentLoaded", function () {
  let computerPlay;
  let start = 0;
  let roundsPlayed = 0;
  const maxRounds = 5;
  const playerImage = document.getElementById("player-image");
  const computerImage = document.getElementById("computer-image");
  const resultSpace = document.getElementById("resultSpace");
  const professionSelect = document.getElementById("profession-select");
  const celebritySelect = document.getElementById("celebrity-select");
  const playerName = document.getElementById("player-name");
  const computerName = document.getElementById("computer-name");
  const playerMoveName = document.getElementById("playerMoveName");
  const computerMoveName = document.getElementById("computerMoveName");

  document.getElementById("quit").style.display = "none";
  document.getElementById("reset").style.display = "none";
  document.getElementById("start").disabled = true;

  const celebritiesByProfession = {
    "CodeInstitute Spartans": [
      "Mohammad Usman Butt",
      "Chibueze Igwe",
      "Nidhal Zarrad",
      "Yazan El Masri",
      "Diana Labode",
      "Andy Ancans",
      "Ikenna Egwim",
      "Ernest Dapaah",
      "Charlie Lambino-Worthington",
      "Kalyani Kommula",
      "Mohamed Mohamed",
      "Amir Ahmed",
      "Safi Hasan",
      "Rebecca Allford",
      "Noora Ibrahim",
      "Abbaas Ibn-Zubair",
      "Henry Egedegbe",
      "Kashif Hussain",
      "Stuart Preston",
      "Oluwatomi Akin-Oluwadare",
    ],
    Politics: [
      "Barack Obama (USA)",
      "Angela Merkel (Germany)",
      "Narendra Modi (India)",
      "Vladimir Putin (Russia)",
      "Jacinda Ardern (New Zealand)",
      "Emmanuel Macron (France)",
      "Justin Trudeau (Canada)", //continue
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
      "Manuel Neuer (Germany)", //continue
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
      "Penélope Cruz (Spain)", //continue
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

  // Event listener to update celebrity options based on profession
  professionSelect.addEventListener("change", function () {
    const profession = professionSelect.value;
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
      playerMoveName.textContent = selectedCelebrity;
      const playerImageFormatted = formatCelebrityName(selectedCelebrity);
      playerImage.src = `./assets/images/${playerImageFormatted}.jpg`;
      playerImage.alt = selectedCelebrity;

      const randomCelebrity = getRandomCelebrity();
      computerName.textContent = randomCelebrity;
      computerMoveName.textContent = randomCelebrity;
      const computerImageFormatted = formatCelebrityName(randomCelebrity);
      computerImage.src = `./assets/images/${computerImageFormatted}.jpg`;
      computerImage.alt = randomCelebrity;

      document.getElementById("start").disabled = false; // Enable start button
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

  const playerMoveImage = document.getElementById("player-move-image");
  const computerMoveImage = document.getElementById("computer-move-image");

  const startButton = document.getElementById("start");
  const resetButton = document.getElementById("reset");
  const quitButton = document.getElementById("quit");

  startButton.addEventListener("click", function () {
    start = 1;
    roundsPlayed = 0;
    resultSpace.innerHTML = "Select Rock, Paper, Scissors, Lizard, or Spock";
    this.style.display = "none";
    quitButton.style.display = "inline-block";
    resetButton.style.display = "inline-block";
  });

  resetButton.addEventListener("click", function () {
    start = 0;
    roundsPlayed = 0;
    playerMoveImage.src = "";
    computerMoveImage.src = "";
    resultSpace.innerHTML = "<strong>Click the start button to begin!</strong>";
    startButton.style.display = "inline-block";
    quitButton.style.display = "none";
    resetButton.style.display = "none";
    document.getElementById("scorePlayer").innerText = 0;
    document.getElementById("scoreComputer").innerText = 0;
  });

  quitButton.addEventListener("click", function () {
    start = 0;
    roundsPlayed = 0;
    resultSpace.innerHTML = "You quit the game. Click start to play again.";
    startButton.style.display = "inline-block";
    this.style.display = "none";
    resetButton.style.display = "none";
  });

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", function () {
      if (start === 1) {
        const playerMove = this.id;
        const computerMove = getComputerMove();
        const winner = getWinner(playerMove, computerMove);
        updateMoveImages(playerMove, computerMove);
        updateScores(winner);
        roundsPlayed++;
        if (roundsPlayed >= maxRounds) {
          start = 0;
          resultSpace.innerHTML += " Game over. Click reset to play again.";
          quitButton.style.display = "none";
        }
      }
    });
  });

  function getComputerMove() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function updateMoveImages(playerMove, computerMove) {
    playerMoveImage.src = `./assets/images/${playerMove}.png`;
    console.log(playerMove);
    console.log(playerMoveImage);
    computerMoveImage.src = `./assets/images/${computerMove}.png`;
  }

  function updateScores(winner) {
    const scorePlayer = document.getElementById("scorePlayer");
    const scoreComputer = document.getElementById("scoreComputer");
    if (winner === "player") {
      scorePlayer.innerText = parseInt(scorePlayer.innerText) + 1;
      resultSpace.innerText = `${playerName.textContent} wins this round!`;
    } else if (winner === "computer") {
      scoreComputer.innerText = parseInt(scoreComputer.innerText) + 1;
      resultSpace.innerText = `${computerName.textContent} wins this round!`;
    } else {
      resultSpace.innerText = "It's a tie!";
    }
  }

  function getWinner(playerMove, computerMove) {
    const winsAgainst = {
      rock: ["scissors", "lizard"],
      paper: ["rock", "spock"],
      scissors: ["paper", "lizard"],
      lizard: ["spock", "paper"],
      spock: ["scissors", "rock"],
    };
    if (playerMove === computerMove) {
      return "tie";
    }
    if (winsAgainst[playerMove].includes(computerMove)) {
      return "player";
    }
    return "computer";
  }
});
/**
 * SUBLIMENTARY SCRIPTS FOR SPECIAL TASKS
 */
//Fade in and out of title elements
document.addEventListener("DOMContentLoaded", function () {
  const words = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
  const wordDisplay = document.getElementById("titleElements");
  let currentIndex = 0;

  function updateWord() {
    wordDisplay.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
  }
  updateWord();
  setInterval(updateWord, 3000);
});
