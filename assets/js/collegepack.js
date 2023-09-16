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
  {
    id: 104,
    title: "Rock My Socks Off!",
    text: "You must lose your shoes and socks!",
    pack: ["college"]
  },
  {
    id: 105,
    title: "Deputy Dog",
    text: "Drawer must get on all 4's until their next turn. If you cannot hold the position, drink.",
    pack: ["college"]
  },
  {
    id: 107,
    title: "Walk the Plank",
    text: "You must challenge the person to your left or to your right to a planking contest. Whoever loses must drink.",
    pack: ["college"]
  },
  {
    id: 108,
    title: "Tinder Bender",
    text: "Drawer must tell all people at the table if they'd swipe right or left on them. Each player must respond with their choice for the drawer. For every match, you both need to drink.",
    pack: ["college"]
  },
  {
    id: 109,
    title: "I'm going skiing!",
    text: "Drink from the person to your left and person to your right drinks. You may use a separate cup.",
    pack: ["college"]
  },
  {
    id: 110,
    title: "Mug SHOT!",
    text: "Everyone must take a shot if they have ever been arrested. You filthy animals!",
    pack: ["college"]
  },
  {
    id: 113,
    title: "What's Good for the Goose...",
    text: "Each couple is given a drink. The couples decides how much each other drinks.",
    pack: ["college"]
  },
  {
    id: 114,
    title: "Pleasant Childhood",
    text: "You've had a great life. Drink if your parents are still together or never divorced.",
    pack: ["college"]
  },
  {
    id: 115,
    title: "Spongebob Squarepants",
    text: "Drawe must change pants with someone smaller them them. If drawer is the smallest at the table, drink because you need the calories.",
    pack: ["college"]
  },
  {
    id: 116,
    title: "Soft Swap",
    text: "Drawer's significant other must switch seats with the person to his/hers right or left.",
    pack: ["college"]
  },
  {
    id: 118,
    title: "The Safety Dance",
    text: "Drawer is immune from any rules until their next turn. Also.. they must dance until then..",
    pack: ["college"]
  },
  {
    id: 119,
    title: "Matching Underwear",
    text: "If any females in the group are wearing non-matching bra/underwear, they must drink.",
    pack: ["college"]
  },
  {
    id: 120,
    title: "Underwear Check",
    text: "If anyone in the group is wearing the same underwear color as yours, they must drink.",
    pack: ["college"]
  },
  {
    id: 125,
    title: "Superficial",
    text: "Everyone votes on the person who spent the most time to get ready for tonight, that person drinks.",
    pack: ["college"]
  },
  {
    id: 126,
    title: "Ex-istential Crisis",
    text: "Drink if you have ever slept with an ex.",
    pack: ["college"]
  },
  {
    id: 127,
    title: "Ex-terminator",
    text: "Give a drink for every person you have slept with who was currently an ex at the time.",
    pack: ["college"]
  },
  {
    id: 128,
    title: "Finger Quiz",
    text: "Tell the group the names of every finger on your left hand, drink for every finder you can't name",
    pack: ["college"]
  },
  {
    id: 129,
    title: "The Blitz",
    text: "Everyone votes on the person who is most likely to miss an event planned by the group. Drink for every person who votes you.",
    pack: ["college"]
  },
  {
    id: 130,
    title: "I'm Late!",
    text: "Everyone votes on the person who is most likely to be late, to anything... Drink for every person who votes on you.",
    pack: ["college"]
  },
  {
    id: 131,
    title: "Would You Rather?",
    text: "Would you rather drink beer or liquor. The entire group votes, the minority team drink.",
    pack: ["college"]
  },
  {
    id: 132,
    title: "Would You Rather?",
    text: "Would you rather funnel vodka or anal funnel a beer. The entire group votes, the minority team drink.",
    pack: ["college"]
  },
  {
    id: 133,
    title: "Would You Rather?",
    text: "Would you rather own a cat or a dog. The entire group votes, the minotiry team drink.",
    pack: ["college"]
  },
  {
    id: 135,
    title: "Woudl You Rather?",
    text: "Would you rather spit or swallow. The entire group votes, the minority team drink.",
    pack: ["college"]
  },
  {
    id: 136,
    title: "Would You Rather?",
    text: "Would you rather take a shot or chug a beer. The entire group votes, the minority team drink.",
    pack: ["college"]
  },
  {
    id: 137,
    title: "Would You Rather?",
    text: "Would you rather sprint a mile or jog a 5k. The entire group votes, the minority team drink.",
    pack: ["college"]
  },
  {
    id: 138,
    title: "Would You Rather?",
    text: "Would you rather be too hot or too cold. The entire group votes, the minority team drink.",
    pack: ["college"]
  },
  {
    id: 139,
    title: "Would You Rather?",
    text: "Would you rather sleep with person to your left or to your right? The loser must drink.",
    pack: ["college"]
  },
  {
    id: 140,
    title: "Would You Rather?",
    text: "Would you rather walk in on your parents doing it or have them walk in on you doing it. The entire group votes, the minority team drink.",
    pack: ["college"]
  },
  {
    id: 141,
    title: "Wildcard Would You Rather?",
    text: "Ask the group a 'would you rather' question. The entire group votes, the minority team drink.",
    pack: ["college"]
  },
  {
    id: 142,
    title: "Barney Stinson",
    text: "Everyone votes on the person who either is (or would be if they were single) the biggest 'player' in the group. Drink for every person who votes you.",
    pack: ["college"]
  },
  {
    id: 143,
    title: "Ted Mosby",
    text: "Everyone votes on the bigghes 'I love you whore' in the group. Drink for every person who votes on you.",
    pack: ["college"]
  },
  {
    id: 145,
    title: "Pers Master Pro",
    text: "Everyone votes on the person they think watches the most porn. Drink for every person who votes on you.",
    pack: ["college"]
  },
  {
    id: 146,
    title: "Jail Break",
    text: "Everyone votes on the person who is most likely to get arrested. Drink for every person who votes on you.",
    pack: ["college"]
  },
  {
    id: 147,
    title: "Mobile Madness",
    text: "Drink if your phone is currently not in your pocket (except for the game master)",
    pack: ["college"]
  },
  {
    id: 149,
    title: "Sex-arades",
    text: "Person to your left will whisper a sexual word to act out to you. If in 30 seconds no-one can guess the word correctly then everyone but the person to your lefvt must drink.",
    pack: ["college"]
  },
  {
    id: 150,
    title: "Age Quiz",
    text: "Name the age of every person in the circle. Drink for every person's age you get wrong.",
    pack: ["college"]
  },
  {
    id: 151,
    title: "Compliments Galore",
    text: "Give the person to your right a compliment.",
    pack: ["college"]
  },
  {
    id: 152,
    title: "Insult Galore",
    text: "Give the person to your left an insult.",
    pack: ["college"]
  },
  {
    id: 154,
    title: "Zodiac",
    text: "Drink if your zodiac is the same to someone else's",
    pack: ["college"]
  },
  {
    id: 158,
    title: "Bottoms Up",
    text: "The first person to finish their drink can make someone drink a shot.",
    pack: ["college"]
  },
  {
    id: 159,
    title: "Ladies Night",
    text: "Ladies, drink your bra size!",
    pack: ["college"]
  },
  {
    id: 160,
    title: "Ladies Revenge",
    text: "Ladies give elses to drink their bra sizes.",
    pack: ["college"]
  },
  {
    id: 167,
    title: "Michael Phelps",
    text: "Everyone votes on the gentleman with the least amount of body hair. Drink for every person who votes on you.",
    pack: ["college"]
  },
  {
    id: 168,
    title: "Eye Quiz",
    text: "Without looking, guess the second person to your left's eye color. If you are correct, they need to drink. Else, you drink.",
    pack: ["college"]
  },
  {
    id: 173,
    title: "Categories",
    text: "Go around the circle starting with you, listing pokemon. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 174,
    title: "Categories",
    text: "Go around the circle starting with you, listing game franchises. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 175,
    title: "Categories",
    text: "Go around the circle starting with you, listing 90's songs. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 176,
    title: "Categories",
    text: "Go around the circle starting with you, listing 80's songs. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 177,
    title: "Categories",
    text: "Go around the circle starting with you, listing romantic comedies. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 178,
    title: "Categories",
    text: "Go around the circle starting with you, listing horror movies. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 179,
    title: "Categories",
    text: "Go around the circle starting with you, listing action movies. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 180,
    title: "Categories",
    text: "Go around the circle starting with you, listing tv shows. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 181,
    title: "Categories",
    text: "Go around the circle starting with you, listing countries. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 182,
    title: "Categories",
    text: "Go around the circle starting with you, listing terms for vagina. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 183,
    title: "Categories",
    text: "Go around the circle starting with you, listing terms for penis. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 184,
    title: "Categories",
    text: "Go around the circle starting with you, listing sex positions. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 185,
    title: "Categories",
    text: "Go around the circle starting with you, listing condom brands. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 186,
    title: "Categories",
    text: "Go around the circle starting with you, listing sex toys. The person who hesitate or repeats one must drink.",
    pack: ["college"]
  },
  {
    id: 187,
    title: "Bad Driver",
    text: "Drink for every car accident you have been in that was your fault.",
    pack: ["college"]
  },
  {
    id: 189,
    title: "Bend Over",
    text: "Spin the bottle, the person it lands on gets to spank your ass as hard or soft as they like.",
    pack: ["college"]
  },
  {
    id: 190,
    title: "Barrel Roll!",
    text: "Do a forward roll or drink.",
    pack: ["college"]
  },
  {
    id: 191,
    title: "Barrel Roll!",
    text: "Do a backward roll or drink.",
    pack: ["college"]
  },
  {
    id: 202,
    title: "Feat of Strength",
    text: "Spin the bottle, arm wrestle the person it lands on. Loser drinks.",
    pack: ["college"]
  },
  {
    id: 204,
    title: "Free Use",
    text: "Spin the bottle, let the person it lands on squeeze your pec / boob.",
    pack: ["college"]
  },
  {
    id: 205,
    title: "PornHub",
    text: "Drink ofr every person playing you'd like to see naked.",
    pack: ["college"]
  },
  {
    id: 206,
    title: "Youuu Slut",
    text: "Drink for every person playing who has seen you naked.",
    pack: ["college"]
  },
  {
    id: 207,
    title: "Youuu dawwwg",
    text: "Give a drink to every person playing who you have seen naked.",
    pack: ["college"]
  },
  {
    id: 208,
    title: "Geometry",
    text: "Name 8 geometric shapes without significant hesitation or drink.",
    pack: ["college"]
  },
  {
    id: 210,
    title: "Android Bubble",
    text: "Everyone who uses Android drink.",
    pack: ["college"]
  },
  {
    id: 211,
    title: "IOS Bubble",
    text: "Everyone who used IOS drink.",
    pack: ["college"]
  },
  {
    id: 213,
    title: "Lap-Dog",
    text: "Spin the bottle, the person it lands on must sit on your lap until the turn gets back to you. They drink while you drink and vice-versa.",
    pack: ["college"]
  },
  {
    id: 214,
    title: "Santa Claus",
    text: "The second person to your right must sit on your lap until the turn gets back to you. They drink while you drink and vice-versa.",
    pack: ["college"]
  },
  {
    id: 215,
    title: "Road-Head",
    text: "If you've given or receiven road-head, drink.",
    pack: ["college"]
  },
  {
    id: 216,
    title: "Got Caught",
    text: "Drink if you've ever been walked in on while having sex.",
    pack: ["college"]
  },
  {
    id: 217,
    title: "Caught You",
    text: "Give a drink if you're ever walked in on someone else having sex.",
    pack: ["college"]
  },
  {
    id: 218,
    title: "Eskimo",
    text: "The person with the most clothes on must drink.",
    pack: ["college"]
  },
  {
    id: 219,
    title: "Emeralds",
    text: "Everyone with green eyes drink.",
    pack: ["college"]
  },
  {
    id: 220,
    title: "Frank Sinatra",
    text: "Everyone with blue eyes drink.",
    pack: ["college"]
  },
  {
    id: 221,
    title: "Brown-Eye Girl or Guy...",
    text: "Everyone with brown eyes drink.",
    pack: ["college"]
  },
  {
    id: 222,
    title: "Awkward Turtle",
    text: "If you've ever cried out the wrong name during sex drink.",
    pack: ["college"]
  },
  {
    id: 223,
    title: "Rim Job",
    text: "Drink if you've ever given or dereiven a rim job.",
    pack: ["college"]
  },
  {
    id: 225,
    title: "Hermits",
    text: "Drink if you've never visited more than 1 continent.",
    pack: ["college"]
  },
  {
    id: 226,
    title: "I've Been Everywhere Man!",
    text: "Drink for every contitent you have been to.",
    pack: ["college"]
  },
  {
    id: 228,
    title: "The Factory Line",
    text: "All men must stand in a line, the women get to vote who's the best butt. Loser drinks a shot.",
    pack: ["college"]
  },
  {
    id: 229,
    title: "Don't be a pussy!",
    text: "Use your phone to google images search 'pussy', find one you like and show the rest of the group or drink.",
    pack: ["college"]
  },
  {
    id: 230,
    title: "Don't be a dick!",
    text: "Use your phone to google images search 'dick', find one you like and show the rest of the group or drink.",
    pack: ["college"]
  },
  {
    id: 235,
    title: "Gerontophile",
    text: "The couple who has the biggest age difference in their relationship must drink for every year of difference.",
    pack: ["college"]
  },
  {
    id: 236,
    title: "Diplomacy",
    text: "If someone at the table doesn't have a bachelor's diploma then they must drink.",
    pack: ["college"]
  },
  {
    id: 239,
    title: "Sobriety Test",
    text: "Drawer must stand on one foot for 30 secs. If not they must drink.",
    pack: ["college"]
  },
  {
    id: 243,
    title: "Get Up to Get Down",
    text: "Drawer must have a dance competition with the person to his right. All other players are the judges. Loser must drink!",
    pack: ["college"]
  },
  {
    id: 244,
    title: "Spare Me!",
    text: "Drawer is immune to the next card they draw.",
    pack: ["college"]
  },
  {
    id: 245,
    title: "Spare Me!",
    text: "Drawer is immune to the next card they draw.",
    pack: ["college"]
  },
  {
    id: 246,
    title: "Spare Me!",
    text: "Drawer is immune to the next card they draw.",
    pack: ["college"]
  },
  {
    id: 247,
    title: "Spare Me!",
    text: "Drawer is immune to the next card they draw.",
    pack: ["college"]
  },
  {
    id: 248,
    title: "Spare Me!",
    text: "Drawer is immune to the next card they draw.",
    pack: ["college"]
  },
  {
    id: 252,
    title: "Smoke 'em if you got 'em!",
    text: "Everyone must hit their vipe, pipe or a cig if they are in possession. Whoever does not must drink for taking care of your lungs!",
    pack: ["college"]
  },
  {
    id: 256,
    title: "Whisper",
    text: "Drawer can only whisper for the next 5 rounds of the game. Drink for every infraction.",
    pack: ["college"]
  },
  {
    id: 258,
    title: "Nicknames",
    text: "Drawer can only refer to people by nicknames for the next 5 rounds of the game. Drink for every infraction.",
    pack: ["college"]
  },
  {
    id: 259,
    title: "Nick Name Game",
    text: "Go around the circle, earch person must come up with a nickname for the person to their left. Everyone must refer to people by their new nicknames for the next 5 rounds of the game. Drink for every infraction.",
    pack: ["college"]
  },
  {
    id: 260,
    title: "Medusa",
    text: "If drawer cathes you looking at them for the next 5 rounds of the game, you must drink.",
    pack: ["college"]
  },
  {
    id: 261,
    title: "Drink Ban",
    text: "The word Drink is now banned Drink for every infraction.",
    pack: ["college"]
  },
  {
    id: 262,
    title: "You're a wizard Harry!",
    text: "Say the name of a spell from Harry Potter, if you cannot drink.",
    pack: ["college"]
  },
  {
    id: 265,
    title: "Staring Contest",
    text: "Have a staring contest with the person to your left. Loser must drink.",
    pack: ["college"]
  },
  {
    id: 266,
    title: "Staring Contest",
    text: "Have a staring contest with the person to your right. Loser must drink.",
    pack: ["college"]
  },
  {
    id: 268,
    title: "The Real Slim Shady",
    text: "Drawer must spend the next 5 rounds of the game standing up.",
    pack: ["college"]
  },
  {
    id: 270,
    title: "Truth Or Dare",
    text: "Spin the bottle, play 1 round of truth or dare with the vicim (Each player takes a turn asking the other).",
    pack: ["college"]
  },
  {
    id: 271,
    title: "Truth Or Dare",
    text: "Spin the bottle, play 1 round of truth or dare with the vicim (Each player takes a turn asking the other).",
    pack: ["college"]
  },
  {
    id: 272,
    title: "Truth Or Dare",
    text: "Spin the bottle, play 1 round of truth or dare with the vicim (Each player takes a turn asking the other).",
    pack: ["college"]
  },
  {
    id: 273,
    title: "Reverse",
    text: "The player order is now reversed.",
    pack: ["college"]
  },
  {
    id: 274,
    title: "Reverse",
    text: "The player order is now reversed.",
    pack: ["college"]
  },
  {
    id: 278,
    title: "Halloween",
    text: "Drink if you've ever dressed up as a doctor or nurse for halloween.",
    pack: ["college"]
  },
  {
    id: 279,
    title: "Halloween",
    text: "Drink if you've ever dressed up as an angler or devil for halloween.",
    pack: ["college"]
  },
  {
    id: 275,
    title: "Halloween",
    text: "Drink if you've ever dressed up in a sexy suit for halloween",
    pack: ["college"]
  },
  {
    id: 280,
    title: "Sleepy Drunk",
    text: "Drink if you've ever passed out a party in some place other than a bed.",
    pack: ["college"]
  },
  {
    id: 281,
    title: "Lively Drunk",
    text: "Drink if you've ever jumped a fence while dunk",
    pack: ["college"]
  },
  {
    id: 282,
    title: "Dumb Drunk",
    text: "Drink if you've ever been hurt significantly while drunk.",
    pack: ["college"]
  },
  {
    id: 283,
    title: "X-rated Drunk",
    text: "Drink if you've ever gotten naked in front of others while drunkl.",
    pack: ["college"]
  },
  {
    id: 297,
    title: "Dinosaurs",
    text: "Go around the circle naming dinosaurs, the first person to hesitate or repeat one must drink.",
    pack: ["college"]
  },
  {
    id: 298,
    title: "Plantes",
    text: "Name the planets, drink for every one yoiu can't name. If you name them all give a drink.",
    pack: ["college"]
  },
  {
    id: 299,
    title: "Sex Week",
    text: "Drink if you've gotten laid this week.",
    pack: ["college"]
  },
  {
    id: 300,
    title: "Sex Day",
    text: "Drink if you've gotten laid today.",
    pack: ["college"]
  },
  {
    id: 301,
    title: "Sex Week",
    text: "Give a drink if you've gotten laid this week.",
    pack: ["college"]
  },
  {
    id: 302,
    title: "Sex Day",
    text: "Give a drink if you've gotten laid today.",
    pack: ["college"]
  },
  {
    id: 308,
    title: "Hangty",
    text: "Drink if you're currently on any form of diet.",
    pack: ["college"]
  },
  {
    id: 309,
    title: "Mardi Gras",
    text: "Remove an article of clothing and throw it to another player like beads off a float. If a player catches the article of clothing without dropping it they may give someone a drink.",
    pack: ["college"]
  },
  {
    id: 310,
    title: "Scolded by the Scale",
    text: "Drink if you are the lighest or heaviest at the party.",
    pack: ["college"]
  },
  {
    id: 311,
    title: "You Know What They Say",
    text: "Whoever has the largest shoe size must drink.",
    pack: ["college"]
  },
  {
    id: 312,
    title: "Love Hurts",
    text: "Drink if you've ever been injured during sex.",
    pack: ["college"]
  },
  {
    id: 313,
    title: "Tis Better To Give Than To Receive",
    text: "Choose a couple in the room and call out the partner you think goes down less frequently. If you are correct, give a drink, else drink.",
    pack: ["college"]
  },
  {
    id: 316,
    title: "You Know What They Say",
    text: "The biggest hands in the groups must give a drink. The smallest hands must drink.",
    pack: ["college"]
  },
  {
    id: 317,
    title: "Big Spender",
    text: "Whoever has the most cash on hand give a drink.",
    pack: ["college"]
  },
  {
    id: 318,
    title: "Cheap Date",
    text: "Whoever has the least cash on hand drink.",
    pack: ["college"]
  },
  {
    id: 319,
    title: "Who's Sentence Is It Anyway?",
    text: "Start with a word, any word. Going clock-wise around the circle each person adds a new word until someone stumbles or the story falls apart. Whoever fucks it up drink.",
    pack: ["college"]
  },
  {
    id: 320,
    title: "Do you even lift?",
    text: "Drink for every day you have not workout in the past 7 days.",
    pack: ["college"]
  },
  {
    id: 326,
    title: "It's a classic",
    text: "Whoever has the oldest car drink.",
    pack: ["college"]
  },
  {
    id: 332,
    title: "Indecent Exposure",
    text: "If you have ever peed in public, drink.",
    pack: ["college"]
  },
  {
    id: 335,
    title: "Repunzel",
    text: "Female with the longest hair drink.",
    pack: ["college"]
  },
  {
    id: 339,
    title: "Work Horse",
    text: "Whomever works the highest number of hours pere week, drink.",
    pack: ["college"]
  },
  {
    id: 340,
    title: "Hazard Pay",
    text: "Whomever has the most dangerous job, drink.",
    pack: ["college"]
  },
  {
    id: 342,
    title: "One Night Stand",
    text: "If you've ever hit it and quit it drink.",
    pack: ["college"]
  },
  {
    id: 345,
    title: "Penance",
    text: "Confess your most recent sin or drink.",
    pack: ["college"]
  },
  {
    id: 346,
    title: "Sweet Dreams",
    text: "Name the person (or people) in your most recent sex dream or drink.",
    pack: ["college"]
  },
  {
    id: 347,
    title: "Wet Dreams",
    text: "Describe your last sex dream or drink.",
    pack: ["college"]
  },
  {
    id: 348,
    title: "The Dream Confessional",
    text: "If you've had a sex dream about someout other than your partner since you've been toghether drink. If you're willing to say who they were, give a drink.",
    pack: ["college"]
  },
  {
    id: 349,
    title: "Linguist",
    text: "Player to you right must come up with a word. If you cannot define it, drink.",
    pack: ["college"]
  },
  {
    id: 351,
    title: "Pervert",
    text: "You must now end every sentence with 'daddy'. Drink per infraction.",
    pack: ["college"]
  },
  {
    id: 352,
    title: "Fresh Ink",
    text: "Pick someone in the group to give you a sharpie tattoo. The location, content and size are your choice but they only have 30 seconds to finish from the time the drawing starts.",
    pack: ["college"]
  },
  {
    id: 360,
    title: "Show and tell",
    text: "If you have a tattoo currently covered by a piece of clothing, prove it then give a drink. If not, everyone else drink because you didn't have the balls to do it",
    pack: ["college"]
  },
  {
    id: 363,
    title: "Body Double",
    text: "For the next 3 rounds the person across from you know has to drink every time you do.",
    pack: ["college"]
  },
  {
    id: 365,
    title: "I've been shot!",
    text: "Give a SHOT!",
    pack: ["college"]
  },
  {
    id: 368,
    title: "50/50",
    text: "Flip a coin. Take a body shot off the person to your left if heads, your right if tails.",
    pack: ["college"]
  },
  {
    id: 371,
    title: "Would You Rather?",
    text: "Would you rather watch your partner have sex with a stranger or have your partner watch you? Everyone votes, the team with the least amount of votes must drink.",
    pack: ["college"]
  },
  {
    id: 372,
    title: "Porn Pop Quiz",
    text: "Name your favorite category of porn.",
    pack: ["college"]
  },
  {
    id: 373,
    title: "Porn Pop Quiz",
    text: "Go around the circle and name a category of porn that you think the drawer watches.",
    pack: ["college"]
  },
  {
    id: 374,
    title: "Dirty Categories",
    text: "Go around the circle clockwise. Each person must name a category of porn. The first person to repeat one or hesitate for too long must drink.",
    pack: ["college"]
  },
  {
    id: 377,
    title: "Threesome",
    text: "If you've ever had a threesome drink.",
    pack: ["college"]
  },
  {
    id: 379,
    title: "Strip Club",
    text: "If you've never been to a strip club, drink.",
    pack: ["college"]
  },
  {
    id: 381,
    title: "Voyeur or exhibitionist?",
    text: "Would you rather have sex in front of others or watch others have sex? The whole group votes, the losing team has to drink.",
    pack: ["college"]
  },
  {
    id: 383,
    title: "Sexposition",
    text: "What is your favorite sex position?",
    pack: ["college"]
  },
  {
    id: 384,
    title: "Truth",
    text: "What type of underwear do you like to wear? What type of underwear are you wearing right now?",
    pack: ["college"]
  },
  {
    id: 389,
    title: "Truth",
    text: "Tell the group how many times you've had sex this week or drink. Bonus, tell the group how many times a week you'd like to have sex.",
    pack: ["college"]
  },
  {
    id: 392,
    title: "Truth or Dare",
    text: "Play a round of Truth or Dare with the person to your right.",
    pack: ["college"]
  },
  {
    id: 393,
    title: "Truth or Dare",
    text: "Play a round of Truth or Dare with the person to your left.",
    pack: ["college"]
  },
  {
    id: 394,
    title: "Dare",
    text: "Remove an article of clothing.",
    pack: ["college"]
  },
  {
    id: 395,
    title: "Kiss someone's collar bone.",
    text: "",
    pack: ["college"]
  },
  {
    id: 398,
    title: "Spicy Dare",
    text: "Go into another room, take a dirty photo and flash it to the group.",
    pack: ["college"]
  },
  {
    id: 400,
    title: "Spicy Truth",
    text: "Name 3 things that turn you on.",
    pack: ["college"]
  },
  {
    id: 401,
    title: "Spicy Truth",
    text: "Name something weird that turns you on.",
    pack: ["college"]
  },
  {
    id: 402,
    title: "Dare",
    text: "Spin the bottle, give the victom a massage until your next turn. They may choose where you massage. If it's not consensual you may spin again.",
    pack: ["college"]
  },
  {
    id: 403,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["college"]
  },
  {
    id: 404,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["college"]
  },
  {
    id: 405,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["college"]
  },
  {
    id: 406,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["college"]
  },
  {
    id: 407,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["college"]
  },
  {
    id: 408,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["college"]
  },
  {
    id: 409,
    title: "Truth",
    text: "Do you like to be spanked?",
    pack: ["college"]
  },
  {
    id: 410,
    title: "Truth",
    text: "Do you like to be chocked?",
    pack: ["college"]
  },
  {
    id: 412,
    title: "Truth",
    text: "Do you like talking dirty?",
    pack: ["college"]
  },
  {
    id: 413,
    title: "Truth",
    text: "Have you had a sex dream recently about someone other than your partner?",
    pack: ["college"]
  },
  {
    id: 416,
    title: "Dare",
    text: "Spin the bottle, sit in the victim's lap until next turn.",
    pack: ["college"]
  },
  {
    id: 417,
    title: "Truth",
    text: "Have you ever secretly rubbed one out while someone else was in the room?",
    pack: ["college"]
  },
];


function generateCard() {
  if (cards.length === 0) {
    return null;
  }

  console.log(cards.length);
  console.log(cards[246])

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
