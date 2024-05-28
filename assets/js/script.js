const celebritiesByProfession = {
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
