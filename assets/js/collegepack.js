// import { Swal } from './cdn/sweetalert2.all.min.js';
// import '../css/sweetalert2.min.css';

const cards = [
  {
    id: 1,
    title: "4 Eyes",
    text: "All glasses/contact wearers must drink",
    pack: ["college"]
  },
  {
    id: 2,
    title: "5 Questions",
    text: "Choose someone to ask 5 questions. If they can answer all 5 right without hesitating, drink. If they answer even 1 incorrectly they must drink (no repeat answers).",
    pack: ["college"]
  },
  {
    id: 4,
    title: "Accent",
    text: "Talk with an accent for the next 4 rounds. Drink if you forget",
    pack: ["college"]
  },
  {
    id: 5,
    title: "Anal",
    text: "If you have done it (given or receiven), give 2 drinks to someone. Elve, receive 2 drinks.",
    pack: ["college"]
  },
  {
    id: 7,
    title: "Anti-Social",
    text: "Anyone caught looking at their phone must drink per infraction until the end of game.",
    pack: ["college"]
  },
  {
    id: 10,
    title: "Bi-Polar",
    text: "Insult left, compliment right.",
    pack: ["college"]
  },
  {
    id: 11,
    title: "Bob Dole",
    text: "You must refer to yourself in the third person for the rest of the game, drink one for every time you fail to do so.",
    pack: ["college"]
  },
  {
    id: 13,
    title: "Can I use your phone?",
    text: "Show the group the list of tabs open on your phones browser, if it's too embarrassing, drink.",
    pack: ["college"]
  },
  {
    id: 15,
    title: "Cat Lady",
    text: "All cat owners drink for each cat they have.",
    pack: ["college"]
  },
  {
    id: 16,
    title: "Categories",
    text: "Pick a category, take turns naming something which fits into that category. Hesitate and drink.",
    pack: ["college"]
  },
  {
    id: 17,
    title: "Celebrity List",
    text: "Name a celebrity on your 'celebrity list' (the list of top celebrities you would be allowed to have sex with if you were given the opportunity). If that person also exists on someone else's celebrity list then you may each drink",
    pack: ["college"]
  },
  {
    id: 18,
    title: "Cheers!",
    text: "Every one cheers to the person to the left and drink!",
    pack: ["college"]
  },
  {
    id: 19,
    title: "Chicks Not Dicks",
    text: "Girls drink",
    pack: ["college"]
  },
  {
    id: 22,
    title: "Cross-Fit",
    text: "Give drinks for every 5 pushups you can do without stopping.",
    pack: ["college"]
  },
  {
    id: 24,
    title: "Dance Party",
    text: "Make a move and pass it on. Whoever forgets the routine, drink.",
    pack: ["college"]
  },
  {
    id: 25,
    title: "Dare Devil",
    text: "One round of truth or dare, or should I say Dare-or-dare!",
    pack: ["college"]
  },
  {
    id: 26,
    title: "Dicks Not Chicks",
    text: "Guys drink",
    pack: ["college"]
  },
  {
    id: 27,
    title: "Dobbie is a Free Elf",
    text: "Give an article of clothing to another player. That person is allowed to use that article of clothing whenever they want to re-assign any card (or rule) to someone else.",
    pack: ["college"]
  },
  {
    id: 29,
    title: "Fur Babies",
    text: "Everyone drink for each furry animal they own",
    pack: ["college"]
  },
  {
    id: 30,
    title: "It's called dwarfism!",
    text: "The shortest person at the table must drink, then challenge someone to drink.",
    pack: ["college"]
  },
  {
    id: 33,
    title: "Heaven",
    text: "Throw your hands up, the last person must drink.",
    pack: ["college"]
  },
  {
    id: 34,
    title: "Big Boned",
    text: "Give drinks to every player who weighs less than you. You must drink for every player who weighs more than you.",
    pack: ["college"]
  },
  {
    id: 37,
    title: "Kill Marry Fuck",
    text: "Play Kill Marry Fuck with 3 persons to your left.",
    pack: ["college"]
  },
  {
    id: 38,
    title: "Kissing Booth",
    text: "If you get someone to kiss you on the lips, then give a drink to someone else. If no one will kiss you, then you're hideous and deserve to drink by yourself... you monster!",
    pack: ["college"]
  },
  {
    id: 39,
    title: "Knocked Up",
    text: "Drink if you have ever used, or been implicit in another person using a pregnancy test",
    pack: ["college"]
  },
  {
    id: 41,
    title: "Lurch",
    text: "The tallest person at the table must drink then give a drink to someone.",
    pack: ["college"]
  },
  {
    id: 42,
    title: "Make a Rule",
    text: "Create your own rule to be followed for the rest of the round. Each infraction to the rule means a drink.",
    pack: ["college"]
  },
  {
    id: 43,
    title: "Middle Names",
    text: "Drink for every person in the group whose middle name you don't know. Give a drink for every one that you do.",
    pack: ["college"]
  },
  {
    id: 44,
    title: "Moving Violation",
    text: "If you've ever had sex in a motor vehicle, give a drink. If it was moving, give 2 drinks. If you haven't, drink.",
    pack: ["college"]
  },
  {
    id: 45,
    title: "Mutually Assured Destruction",
    text: "Pick someone to be your partner. You drink when they do and vice versa.",
    pack: ["college"]
  },
  {
    id: 46,
    title: "Naked Molerat",
    text: "Give a drink if you have shaved your pubes in the last week and prove it. Otherwise, drink.",
    pack: ["college"]
  },
  {
    id: 47,
    title: "Name Game",
    text: "You must name a celebrity. The next person in the order must name another whose first name begins with the first letter of the previous celebrity's last name. Double letters reverse the order (Ex: Silverster Stalone). Loser drink.",
    pack: ["college"]
  },
  {
    id: 48,
    title: "Never Have I Ever",
    text: "Play never have i ever with 3 fingers, loser needs to drink",
    pack: ["college"]
  },
  {
    id: 49,
    title: "Not It",
    text: "Do not read this aloud: The last player to touch their finger to their nose must drink.",
    pack: ["college"]
  },
  {
    id: 50,
    title: "Nursing Home",
    text: "Drink for every player younger than you.",
    pack: ["college"]
  },
  {
    id: 53,
    title: "Paper Scissors Rock",
    text: "Choose someone to play with best 2 out of 3. Loser must drink.",
    pack: ["college"]
  },
  {
    id: 54,
    title: "Party Trick",
    text: "Do a party trick, drink if people aren't impressed.",
    pack: ["college"]
  },
  {
    id: 56,
    title: "Peer Pressure",
    text: "Drink for each person playing the game.",
    pack: ["college"]
  },
  {
    id: 63,
    title: "Picker's Choice",
    text: "Select one person to exchange an article of their clothing with, or drink.",
    pack: ["college"]
  },
  {
    id: 64,
    title: "Question",
    text: "Who is the ______ in the group? (create your own question for the group). The person who is voted the winner (or loser depending on your question) must drink.",
    pack: ["college"]
  },
  {
    id: 65,
    title: "Quiet, Please",
    text: "From now on, you may no longer speak for 3 rounds. Only communicating via hand gestured is allowed. Drink per inraction.",
    pack: ["college"]
  },
  {
    id: 66,
    title: "Rainbow Warrior",
    text: "Pick a color. Giva a drink to everyone whi is wearing it.",
    pack: ["college"]
  },
  {
    id: 67,
    title: "Reverse",
    text: "The player order is now reversed.",
    pack: ["college"]
  },
  {
    id: 69,
    title: "Scar Story",
    text: "Show a scar, tell the story that led to it or drink. If someone in the group has some responsabgility for the scar they must drink.",
    pack: ["college"]
  },
  {
    id: 70,
    title: "Sex Toys",
    text: "Drink for each sex toy currently in your house. If the number is above 10 you may choose to remove an article of clothing instead.",
    pack: ["college"]
  },
  {
    id: 71,
    title: "Shame!",
    text: "Tell your most embarrassing sex story or drink while being rediculed for being a prude.",
    pack: ["college"]
  },
  {
    id: 74,
    title: "Skin2Skin",
    text: "Keep skin to skin contact with the person to your right for 5 rounds. Drink for every infraction.",
    pack: ["college"]
  },
  {
    id: 75,
    title: "Skinny Dipper",
    text: "Everyone who's ever been skinny dipping, drink.",
    pack: ["college"]
  },
  {
    id: 77,
    title: "Social",
    text: "Take a group photo. If you post it on social media, everyone should drink.",
    pack: ["college"]
  },
  {
    id: 78,
    title: "Special Me Time",
    text: "Everyone who has masturbated within the last week drink.",
    pack: ["college"]
  },
  {
    id: 80,
    title: "Stickler for the Rules",
    text: "If you can finish your drink in 30 seconds, make a rule. Everyone who breaks the rule must drink per infraction.",
    pack: ["college"]
  },
  {
    id: 81,
    title: "Strip Party",
    text: "Drawer removes one article of clothing and chooses 1 person to remove an article of clothing (you can choose to finish your drink instead of removing an article of clothing).",
    pack: ["college"]
  },
  {
    id: 82,
    title: "Strip",
    text: "Drawer must remove one article of clothing.",
    pack: ["college"]
  },
  {
    id: 83,
    title: "Strip Lottery",
    text: "Spin the bottle. The victom must remove an article of clothing and take the next turn.",
    pack: ["college"]
  },
  {
    id: 84,
    title: "Strip Right",
    text: "Person to your right must remove an article of clothing.",
    pack: ["college"]
  },
  {
    id: 85,
    title: "Submissive",
    text: "You like it rough.. literally, drink for every person who has to drink for any reason for the next 5 rounds.",
    pack: ["college"]
  },
  {
    id: 86,
    title: "T-Rex",
    text: "You are T-Rex! Drink with your elbows tucked in to your sides.",
    pack: ["college"]
  },
  {
    id: 89,
    title: "The Burn Unit",
    text: "Go around the circle insulting the person to your left. If you hesitate, drink.",
    pack: ["college"]
  },
  {
    id: 90,
    title: "The slap",
    text: "Pick one person to weak-hand slap you in the face or finish your drink.",
    pack: ["college"]
  },
  {
    id: 91,
    title: "Titanic!",
    text: "The ship is sinking! You have 30 seconds to finish your drink.",
    pack: ["college"]
  },
  {
    id: 92,
    title: "Two truths, one lie",
    text: "Tell two truths and one lie, person to your left must pick the lie. Loser drinks.",
    pack: ["college"]
  },
  {
    id: 94,
    title: "Voyeur",
    text: "Give a drink for everyone you've seen naked, drink for everyone who's seen you naked.",
    pack: ["college"]
  },
  {
    id: 96,
    title: "What are you wearing?",
    text: "Show the group your underwear or finish your drink.",
    pack: ["college"]
  },
  {
    id: 97,
    title: "Wild Card!",
    text: "Wild Card! You've picked the ultimate card! Make a rule and then choose 1 person to either shot or finish the drink.",
    pack: ["college"]
  },
  {
    id: 98,
    title: "You Appreciation Day",
    text: "Everyone else must drink because you're a filthy narcisist!",
    pack: ["college"]
  },
  {
    id: 99,
    title: "You Classy, Huh?!",
    text: "Drink for every piece of jewelry on your body. This includes watched, necklaces, charms, navel rings, toe rings, etc.",
    pack: ["college"]
  },
  {
    id: 100,
    title: "You're Fucked!",
    text: "Remove 1 article of clothing or take a shot!",
    pack: ["college"]
  },
];

function generateCard() {
  if (cards.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * cards.length);
  const generatedCard = cards[randomIndex];
  cards.splice(randomIndex, 1); // Remove the generated card from the array
  return generatedCard;
}

document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const cardContainer = document.getElementById("cardContainer");
  let currentCardElement = null;

  generateButton.addEventListener("click", function () {
    const generatedCard = generateCard();

    if (generatedCard === null) {
      // Swal.fire(
      //     'Good job!',
      //     'You clicked the button!',
      //     'success'
      //   );

      var gameEnded = window.confirm("Game has ended! 🥂🥂");
      if (gameEnded) {
        location.reload();
      } else {
        location.reload();
      }
    }

    // Create card elements with Bootstrap classes and custom styles
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "mt-4", "p-3");
    cardElement.style.backgroundColor = "#f8f9fa"; // Set the desired background color


    const typeElement = document.createElement("h3");
    typeElement.classList.add(
      "card-text",
      "fw-bold",
      "display-6",
      "text-primary"
    );
    typeElement.textContent = generatedCard.type;

    const titleElement = document.createElement("h3");
    titleElement.classList.add("card-text", "text-muted", "font-weight-bold");
    titleElement.textContent = generatedCard.title;

    const textElement = document.createElement("p");
    textElement.classList.add("card-text", "text-muted");
    textElement.textContent = generatedCard.text;

    const cardId = document.createElement("p");
    cardId.classList.add("card-text", "text-muted");
    cardId.textContent = `id: ${generatedCard.id}`;

    // Append card elements to the container
    cardElement.appendChild(titleElement);
    cardElement.appendChild(typeElement);
    cardElement.appendChild(textElement);
    cardElement.appendChild(cardId);

    // Remove the previously generated card
    if (currentCardElement) {
      cardContainer.removeChild(currentCardElement);
    }

    // Append the new card to the container
    cardContainer.appendChild(cardElement);

    // Set the current card element
    currentCardElement = cardElement;
  });
});
