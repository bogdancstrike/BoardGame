// import { Swal } from './cdn/sweetalert2.all.min.js';
// import '../css/sweetalert2.min.css';

const cards = [
  {
    id: 2,
    title: "5 Questions",
    text: "Choose someone to ask 5 questions. If they can answer all 5 right without hesitating, drink. If they answer even 1 incorrectly they must drink (no repeat answers).",
    pack: ["swingers"],
  },
  {
    id: 5,
    title: "Anal",
    text: "If you have done it (given or receiven), give 2 drinks to someone. Elve, receive 2 drinks.",
    pack: ["swingers"],
  },
  {
    id: 13,
    title: "Can I use your phone?",
    text: "Show the group the list of tabs open on your phones browser, if it's too embarrassing, drink.",
    pack: ["swingers"],
  },
  {
    id: 16,
    title: "Categories",
    text: "Pick a category, take turns naming something which fits into that category. Hesitate and drink.",
    pack: ["swingers"],
  },
  {
    id: 17,
    title: "Celebrity List",
    text: "Name a celebrity on your 'celebrity list' (the list of top celebrities you would be allowed to have sex with if you were given the opportunity). If that person also exists on someone else's celebrity list then you may each drink",
    pack: ["swingers"],
  },
  {
    id: 18,
    title: "Cheers!",
    text: "Every one cheers to the person to the left and drink!",
    pack: ["swingers"],
  },
  {
    id: 19,
    title: "Chicks Not Dicks",
    text: "Girls drink",
    pack: ["swingers"],
  },
  {
    id: 22,
    title: "Cross-Fit",
    text: "Give drinks for every 5 pushups you can do without stopping.",
    pack: ["swingers"],
  },
  {
    id: 24,
    title: "Dance Party",
    text: "Make a move and pass it on. Whoever forgets the routine, drink.",
    pack: ["swingers"],
  },
  {
    id: 25,
    title: "Dare Devil",
    text: "One round of truth or dare, or should I say Dare-or-dare!",
    pack: ["swingers"],
  },
  {
    id: 26,
    title: "Dicks Not Chicks",
    text: "Guys drink",
    pack: ["swingers"],
  },
  {
    id: 27,
    title: "Dobbie is a Free Elf",
    text: "Give an article of clothing to another player. That person is allowed to use that article of clothing whenever they want to re-assign any card (or rule) to someone else.",
    pack: ["swingers"],
  },
  {
    id: 30,
    title: "It's called dwarfism!",
    text: "The shortest person at the table must drink, then challenge someone to drink.",
    pack: ["swingers"],
  },
  {
    id: 33,
    title: "Heaven",
    text: "Throw your hands up, the last person must drink.",
    pack: ["swingers"],
  },
  {
    id: 34,
    title: "Big Boned",
    text: "Give drinks to every player who weighs less than you. You must drink for every player who weighs more than you.",
    pack: ["swingers"],
  },
  {
    id: 37,
    title: "Kill Marry Fuck",
    text: "Play Kill Marry Fuck with 3 persons to your left.",
    pack: ["swingers"],
  },
  {
    id: 371,
    title: "Kill Marry Fuck",
    text: "Play Kill Marry Fuck with 3 persons to your left.",
    pack: ["swingers"],
  },
  {
    id: 38,
    title: "Kissing Booth",
    text: "If you get someone to kiss you on the lips, then give a drink to someone else. If no one will kiss you, then you're hideous and deserve to drink by yourself... you monster!",
    pack: ["swingers"],
  },
  {
    id: 381,
    title: "Kissing Booth",
    text: "If you get someone to kiss you on the lips, then give a drink to someone else. If no one will kiss you, then you're hideous and deserve to drink by yourself... you monster!",
    pack: ["swingers"],
  },
  {
    id: 39,
    title: "Knocked Up",
    text: "Drink if you have ever used, or been implicit in another person using a pregnancy test",
    pack: ["swingers"],
  },
  {
    id: 41,
    title: "Lurch",
    text: "The tallest person at the table must drink then give a drink to someone.",
    pack: ["swingers"],
  },
  {
    id: 42,
    title: "Make a Rule",
    text: "Create your own rule to be followed for the rest of the round. Each infraction to the rule means a drink.",
    pack: ["swingers"],
  },
  {
    id: 44,
    title: "Moving Violation",
    text: "If you've ever had sex in a motor vehicle, give a drink. If it was moving, give 2 drinks. If you haven't, drink.",
    pack: ["swingers"],
  },
  {
    id: 45,
    title: "Mutually Assured Destruction",
    text: "Pick someone to be your partner. You drink when they do and vice versa.",
    pack: ["swingers"],
  },
  {
    id: 46,
    title: "Naked Molerat",
    text: "Give a drink if you have shaved your pubes in the last week and prove it. Otherwise, drink.",
    pack: ["swingers"],
  },
  {
    id: 50,
    title: "Nursing Home",
    text: "Drink for every player younger than you.",
    pack: ["swingers"],
  },
  {
    id: 53,
    title: "Paper Scissors Rock",
    text: "Choose someone to play with best 2 out of 3. Loser must drink.",
    pack: ["swingers"],
  },
  {
    id: 56,
    title: "Peer Pressure",
    text: "Drink for each person playing the game.",
    pack: ["swingers"],
  },
  {
    id: 63,
    title: "Picker's Choice",
    text: "Select one person to exchange an article of their clothing with, or drink.",
    pack: ["swingers"],
  },
  {
    id: 64,
    title: "Question",
    text: "Who is the ______ in the group? (create your own question for the group). The person who is voted the winner (or loser depending on your question) must drink.",
    pack: ["swingers"],
  },
  {
    id: 66,
    title: "Rainbow Warrior",
    text: "Pick a color. Giva a drink to everyone whi is wearing it.",
    pack: ["swingers"],
  },
  {
    id: 67,
    title: "Reverse",
    text: "The player order is now reversed.",
    pack: ["swingers"],
  },
  {
    id: 69,
    title: "Scar Story",
    text: "Show a scar, tell the story that led to it or drink. If someone in the group has some responsabgility for the scar they must drink.",
    pack: ["swingers"],
  },
  {
    id: 70,
    title: "Sex Toys",
    text: "Drink for each sex toy currently in your house. If the number is above 10 you may choose to remove an article of clothing instead.",
    pack: ["swingers"],
  },
  {
    id: 71,
    title: "Shame!",
    text: "Tell your most embarrassing sex story or drink while being rediculed for being a prude.",
    pack: ["swingers"],
  },
  {
    id: 74,
    title: "Skin2Skin",
    text: "Keep skin to skin contact with the person to your right for 5 rounds. Drink for every infraction.",
    pack: ["swingers"],
  },
  {
    id: 75,
    title: "Skinny Dipper",
    text: "Everyone who's ever been skinny dipping, drink.",
    pack: ["swingers"],
  },
  {
    id: 77,
    title: "Social",
    text: "Take a group photo. If you post it on social media, everyone should drink.",
    pack: ["swingers"],
  },
  {
    id: 78,
    title: "Special Me Time",
    text: "Everyone who has masturbated within the last week drink.",
    pack: ["swingers"],
  },
  {
    id: 80,
    title: "Stickler for the Rules",
    text: "If you can finish your drink in 30 seconds, make a rule. Everyone who breaks the rule must drink per infraction.",
    pack: ["swingers"],
  },
  {
    id: 81,
    title: "Strip Party",
    text: "Drawer removes one article of clothing and chooses 1 person to remove an article of clothing (you can choose to finish your drink instead of removing an article of clothing).",
    pack: ["swingers"],
  },
  {
    id: 812,
    title: "Strip Party",
    text: "Drawer removes one article of clothing and chooses 1 person to remove an article of clothing (you can choose to finish your drink instead of removing an article of clothing).",
    pack: ["swingers"],
  },
  {
    id: 812,
    title: "Strip Party",
    text: "Drawer removes one article of clothing and chooses 1 person to remove an article of clothing (you can choose to finish your drink instead of removing an article of clothing).",
    pack: ["swingers"],
  },
  {
    id: 812,
    title: "Strip Party",
    text: "Drawer removes one article of clothing and chooses 1 person to remove an article of clothing (you can choose to finish your drink instead of removing an article of clothing).",
    pack: ["swingers"],
  },
  {
    id: 82,
    title: "Strip",
    text: "Drawer must remove one article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 821,
    title: "Strip",
    text: "Drawer must remove one article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 821,
    title: "Strip",
    text: "Drawer must remove one article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 821,
    title: "Strip",
    text: "Drawer must remove one article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 821,
    title: "Strip",
    text: "Drawer must remove one article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 83,
    title: "Strip Lottery",
    text: "Spin the bottle. The victom must remove an article of clothing and take the next turn.",
    pack: ["swingers"],
  },
  {
    id: 831,
    title: "Strip Lottery",
    text: "Spin the bottle. The victom must remove an article of clothing and take the next turn.",
    pack: ["swingers"],
  },
  {
    id: 832,
    title: "Strip Lottery",
    text: "Spin the bottle. The victom must remove an article of clothing and take the next turn.",
    pack: ["swingers"],
  },
  {
    id: 84,
    title: "Strip Right",
    text: "Person to your right must remove an article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 842,
    title: "Strip Right",
    text: "Person to your right must remove an article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 843,
    title: "Strip Right",
    text: "Person to your right must remove an article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 844,
    title: "Strip Left",
    text: "Person to your left must remove an article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 845,
    title: "Strip Left",
    text: "Person to your left must remove an article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 846,
    title: "Strip Left",
    text: "Person to your left must remove an article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 85,
    title: "Submissive",
    text: "You like it rough.. literally, drink for every person who has to drink for any reason for the next 5 rounds.",
    pack: ["swingers"],
  },
  {
    id: 86,
    title: "T-Rex",
    text: "You are T-Rex! Drink with your elbows tucked in to your sides.",
    pack: ["swingers"],
  },
  {
    id: 92,
    title: "Two truths, one lie",
    text: "Tell two truths and one lie, person to your left must pick the lie. Loser drinks.",
    pack: ["swingers"],
  },
  {
    id: 94,
    title: "Voyeur",
    text: "Give a drink for everyone you've seen naked, drink for everyone who's seen you naked.",
    pack: ["swingers"],
  },
  {
    id: 96,
    title: "What are you wearing?",
    text: "Show the group your underwear or finish your drink.",
    pack: ["swingers"],
  },
  {
    id: 97,
    title: "Wild Card!",
    text: "Wild Card! You've picked the ultimate card! Make a rule and then choose 1 person to either shot or finish the drink.",
    pack: ["swingers"],
  },
  {
    id: 98,
    title: "You Appreciation Day",
    text: "Everyone else must drink because you're a filthy narcisist!",
    pack: ["swingers"],
  },
  {
    id: 99,
    title: "You Classy, Huh?!",
    text: "Drink for every piece of jewelry on your body. This includes watched, necklaces, charms, navel rings, toe rings, etc.",
    pack: ["swingers"],
  },
  {
    id: 100,
    title: "You're Fucked!",
    text: "Remove 1 article of clothing or take a shot!",
    pack: ["swingers"],
  },
  {
    id: 103,
    title: "Rock My Socks Off!",
    text: "You must lose your shoes and socks!",
    pack: ["swingers"],
  },
  {
    id: 104,
    title: "Rock My Socks Off!",
    text: "You must lose your shoes and socks!",
    pack: ["swingers"],
  },
  {
    id: 105,
    title: "Deputy Dog",
    text: "Drawer must get on all 4's until their next turn. If you cannot hold the position, drink.",
    pack: ["swingers"],
  },
  {
    id: 107,
    title: "Walk the Plank",
    text: "You must challenge the person to your left or to your right to a planking contest. Whoever loses must drink.",
    pack: ["swingers"],
  },
  {
    id: 108,
    title: "Tinder Bender",
    text: "Drawer must tell all people at the table if they'd swipe right or left on them. Each player must respond with their choice for the drawer. For every match, you both need to drink.",
    pack: ["swingers"],
  },
  {
    id: 109,
    title: "I'm going skiing!",
    text: "Drink from the person to your left and person to your right drinks. You may use a separate cup.",
    pack: ["swingers"],
  },
  {
    id: 113,
    title: "What's Good for the Goose...",
    text: "Each couple is given a drink. The couples decides how much each other drinks.",
    pack: ["swingers"],
  },
  {
    id: 114,
    title: "Pleasant Childhood",
    text: "You've had a great life. Drink if your parents are still together or never divorced.",
    pack: ["swingers"],
  },
  {
    id: 115,
    title: "Spongebob Squarepants",
    text: "Drawer must change pants with someone smaller them them. If drawer is the smallest at the table, drink because you need the calories.",
    pack: ["swingers"],
  },
  {
    id: 116,
    title: "Soft Swap",
    text: "Drawer's significant other must switch seats with the person to his/hers right or left.",
    pack: ["swingers"],
  },
  {
    id: 118,
    title: "The Safety Dance",
    text: "Drawer is immune from any rules until their next turn. Also.. they must dance until then..",
    pack: ["swingers"],
  },
  {
    id: 119,
    title: "Matching Underwear",
    text: "If any females in the group are wearing non-matching bra/underwear, they must drink.",
    pack: ["swingers"],
  },
  {
    id: 120,
    title: "Underwear Check",
    text: "If anyone in the group is wearing the same underwear color as yours, they must drink.",
    pack: ["swingers"],
  },
  {
    id: 121,
    title: "Underwear Check",
    text: "If anyone in the group is wearing the same underwear color as yours, they must drink.",
    pack: ["swingers"],
  },
  {
    id: 122,
    title: "Underwear Check",
    text: "If anyone in the group is wearing the same underwear color as yours, they must drink.",
    pack: ["swingers"],
  },
  {
    id: 123,
    title: "Underwear Check",
    text: "If anyone in the group is wearing the same underwear color as yours, they must drink.",
    pack: ["swingers"],
  },
  {
    id: 124,
    title: "Underwear Check",
    text: "If anyone in the group is wearing the same underwear color as yours, they must drink.",
    pack: ["swingers"],
  },
  {
    id: 125,
    title: "Superficial",
    text: "Everyone votes on the person who spent the most time to get ready for tonight, that person drinks.",
    pack: ["swingers"],
  },
  {
    id: 126,
    title: "Ex-istential Crisis",
    text: "Drink if you have ever slept with an ex.",
    pack: ["swingers"],
  },
  {
    id: 127,
    title: "Ex-terminator",
    text: "Give a drink for every person you have slept with who was currently an ex at the time.",
    pack: ["swingers"],
  },
  {
    id: 129,
    title: "The Blitz",
    text: "Everyone votes on the person who is most likely to miss an event planned by the group. Drink for every person who votes you.",
    pack: ["swingers"],
  },
  {
    id: 130,
    title: "I'm Late!",
    text: "Everyone votes on the person who is most likely to be late, to anything... Drink for every person who votes on you.",
    pack: ["swingers"],
  },
  {
    id: 131,
    title: "Would You Rather?",
    text: "Would you rather find out the last person you slept with was a mudrered or a long lost brother/sister. The entire group votes, the minority team drink.",
    pack: ["swingers"],
  },
  {
    id: 132,
    title: "Would You Rather?",
    text: "Would you rather funnel vodka or anal funnel a beer. The entire group votes, the minority team drink.",
    pack: ["swingers"],
  },
  {
    id: 135,
    title: "Woudl You Rather?",
    text: "Would you rather spit or swallow. The entire group votes, the minority team drink.",
    pack: ["swingers"],
  },
  {
    id: 136,
    title: "Would You Rather?",
    text: "Would you rather take a shot or chug a beer. The entire group votes, the minority team drink.",
    pack: ["swingers"],
  },
  {
    id: 139,
    title: "Would You Rather?",
    text: "Would you rather sleep with person to your left or to your right? The loser must drink.",
    pack: ["swingers"],
  },
  {
    id: 140,
    title: "Would You Rather?",
    text: "Would you rather walk in on your parents doing it or have them walk in on you doing it. The entire group votes, the minority team drink.",
    pack: ["swingers"],
  },
  {
    id: 141,
    title: "Wildcard Would You Rather?",
    text: "Ask the group a 'would you rather' question. The entire group votes, the minority team drink.",
    pack: ["swingers"],
  },
  {
    id: 142,
    title: "Barney Stinson",
    text: "Everyone votes on the person who either is (or would be if they were single) the biggest 'player' in the group. Drink for every person who votes you.",
    pack: ["swingers"],
  },
  {
    id: 143,
    title: "Ted Mosby",
    text: "Everyone votes on the bigghes 'I love you whore' in the group. Drink for every person who votes on you.",
    pack: ["swingers"],
  },
  {
    id: 145,
    title: "Pers Master Pro",
    text: "Everyone votes on the person they think watches the most porn. Drink for every person who votes on you.",
    pack: ["swingers"],
  },
  {
    id: 146,
    title: "Jail Break",
    text: "Everyone votes on the person who is most likely to get arrested. Drink for every person who votes on you.",
    pack: ["swingers"],
  },
  {
    id: 147,
    title: "Mobile Madness",
    text: "Drink if your phone is currently not in your pocket (except for the game master)",
    pack: ["swingers"],
  },
  {
    id: 149,
    title: "Sex-arades",
    text: "Person to your left will whisper a sexual word to act out to you. If in 30 seconds no-one can guess the word correctly then everyone but the person to your lefvt must drink.",
    pack: ["swingers"],
  },
  {
    id: 151,
    title: "Compliments Galore",
    text: "Give the person to your right a compliment.",
    pack: ["swingers"],
  },
  {
    id: 152,
    title: "Insult Galore",
    text: "Give the person to your left an insult.",
    pack: ["swingers"],
  },
  {
    id: 158,
    title: "Bottoms Up",
    text: "The first person to finish their drink can make someone drink a shot.",
    pack: ["swingers"],
  },
  {
    id: 159,
    title: "Ladies Night",
    text: "Ladies, drink your bra size!",
    pack: ["swingers"],
  },
  {
    id: 160,
    title: "Ladies Revenge",
    text: "Ladies give elses to drink their bra sizes.",
    pack: ["swingers"],
  },
  {
    id: 167,
    title: "Michael Phelps",
    text: "Everyone votes on the gentleman with the least amount of body hair. Drink for every person who votes on you.",
    pack: ["swingers"],
  },
  {
    id: 182,
    title: "Categories",
    text: "Go around the circle starting with you, listing terms for vagina. The person who hesitate or repeats one must drink.",
    pack: ["swingers"],
  },
  {
    id: 183,
    title: "Categories",
    text: "Go around the circle starting with you, listing terms for penis. The person who hesitate or repeats one must drink.",
    pack: ["swingers"],
  },
  {
    id: 184,
    title: "Categories",
    text: "Go around the circle starting with you, listing sex positions. The person who hesitate or repeats one must drink.",
    pack: ["swingers"],
  },
  {
    id: 185,
    title: "Categories",
    text: "Go around the circle starting with you, listing condom brands. The person who hesitate or repeats one must drink.",
    pack: ["swingers"],
  },
  {
    id: 186,
    title: "Categories",
    text: "Go around the circle starting with you, listing sex toys. The person who hesitate or repeats one must drink.",
    pack: ["swingers"],
  },
  {
    id: 189,
    title: "Bend Over",
    text: "Spin the bottle, the person it lands on gets to spank your ass as hard or soft as they like.",
    pack: ["swingers"],
  },
  {
    id: 192,
    title: "Spank Bank!",
    text: "Drawer must show 1 nude photo from their phone.",
    pack: ["swingers"],
  },
  {
    id: 193,
    title: "Spank Bank!",
    text: "Drawer must show 1 nude photo from their phone.",
    pack: ["swingers"],
  },
  {
    id: 194,
    title: "Zoom Meting!",
    text: "Everyone but the drawer must lose their pants.",
    pack: ["swingers"],
  },
  {
    id: 195,
    title: "Working from home!",
    text: "Drawer must lose their pants.",
    pack: ["swingers"],
  },
  {
    id: 196,
    title: "I'm Too Sexy!",
    text: "Drawer must lose their shirt.",
    pack: ["swingers"],
  },
  {
    id: 202,
    title: "Feat of Strength",
    text: "Spin the bottle, arm wrestle the person it lands on. Loser drinks.",
    pack: ["swingers"],
  },
  {
    id: 204,
    title: "Free Use",
    text: "Spin the bottle, let the person it lands on squeeze your pec / boob.",
    pack: ["swingers"],
  },
  {
    id: 205,
    title: "PornHub",
    text: "Drink ofr every person playing you'd like to see naked.",
    pack: ["swingers"],
  },
  {
    id: 206,
    title: "Youuu Slut",
    text: "Drink for every person playing who has seen you naked.",
    pack: ["swingers"],
  },
  {
    id: 207,
    title: "Youuu dawwwg",
    text: "Give a drink to every person playing who you have seen naked.",
    pack: ["swingers"],
  },
  {
    id: 213,
    title: "Lap-Dog",
    text: "Spin the bottle, the person it lands on must sit on your lap until the turn gets back to you. They drink while you drink and vice-versa.",
    pack: ["swingers"],
  },
  {
    id: 214,
    title: "Santa Claus",
    text: "The second person to your right must sit on your lap until the turn gets back to you. They drink while you drink and vice-versa.",
    pack: ["swingers"],
  },
  {
    id: 215,
    title: "Road-Head",
    text: "If you've given or receiven road-head, drink.",
    pack: ["swingers"],
  },
  {
    id: 216,
    title: "Got Caught",
    text: "Drink if you've ever been walked in on while having sex.",
    pack: ["swingers"],
  },
  {
    id: 217,
    title: "Caught You",
    text: "Give a drink if you're ever walked in on someone else having sex.",
    pack: ["swingers"],
  },
  {
    id: 218,
    title: "Eskimo",
    text: "The person with the most clothes on must drink.",
    pack: ["swingers"],
  },
  {
    id: 219,
    title: "Emeralds",
    text: "Everyone with green eyes drink.",
    pack: ["swingers"],
  },
  {
    id: 220,
    title: "Frank Sinatra",
    text: "Everyone with blue eyes drink.",
    pack: ["swingers"],
  },
  {
    id: 221,
    title: "Brown-Eye Girl or Guy...",
    text: "Everyone with brown eyes drink.",
    pack: ["swingers"],
  },
  {
    id: 222,
    title: "Awkward Turtle",
    text: "If you've ever cried out the wrong name during sex drink.",
    pack: ["swingers"],
  },
  {
    id: 223,
    title: "Rim Job",
    text: "Drink if you've ever given or dereiven a rim job.",
    pack: ["swingers"],
  },
  {
    id: 228,
    title: "The Factory Line",
    text: "All men must stand in a line, the women get to vote who's the best butt. Loser drinks a shot.",
    pack: ["swingers"],
  },
  {
    id: 2282,
    title: "The Factory Line",
    text: "All wemen must stand in a line, the men get to vote who's the best butt. Loser drinks a shot.",
    pack: ["swingers"],
  },
  {
    id: 229,
    title: "Don't be a pussy!",
    text: "Use your phone to google images search 'pussy', find one you like and show the rest of the group or drink.",
    pack: ["swingers"],
  },
  {
    id: 230,
    title: "Don't be a dick!",
    text: "Use your phone to google images search 'dick', find one you like and show the rest of the group or drink.",
    pack: ["swingers"],
  },
  {
    id: 235,
    title: "Gerontophile",
    text: "The couple who has the biggest age difference in their relationship must drink for every year of difference.",
    pack: ["swingers"],
  },
  {
    id: 243,
    title: "Get Up to Get Down",
    text: "Drawer must have a dance competition with the person to his right. All other players are the judges. Loser must drink!",
    pack: ["swingers"],
  },
  {
    id: 244,
    title: "Spare Me!",
    text: "Drawer is immune to the next card they draw.",
    pack: ["swingers"],
  },
  {
    id: 245,
    title: "Spare Me!",
    text: "Drawer is immune to the next card they draw.",
    pack: ["swingers"],
  },
  {
    id: 246,
    title: "Spare Me!",
    text: "Drawer is immune to the next card they draw.",
    pack: ["swingers"],
  },
  {
    id: 247,
    title: "Spare Me!",
    text: "Drawer is immune to the next card they draw.",
    pack: ["swingers"],
  },
  {
    id: 248,
    title: "Spare Me!",
    text: "Drawer is immune to the next card they draw.",
    pack: ["swingers"],
  },
  {
    id: 256,
    title: "Whisper",
    text: "Drawer can only whisper for the next 5 rounds of the game. Drink for every infraction.",
    pack: ["swingers"],
  },
  {
    id: 259,
    title: "Nick Name Game",
    text: "Go around the circle, earch person must come up with a nickname for the person to their left. Everyone must refer to people by their new nicknames for the next 5 rounds of the game. Drink for every infraction.",
    pack: ["swingers"],
  },
  {
    id: 261,
    title: "Drink Ban",
    text: "The word Drink is now banned Drink for every infraction.",
    pack: ["swingers"],
  },
  {
    id: 265,
    title: "Staring Contest",
    text: "Have a staring contest with the person to your left. Loser must drink.",
    pack: ["swingers"],
  },
  {
    id: 266,
    title: "Staring Contest",
    text: "Have a staring contest with the person to your right. Loser must drink.",
    pack: ["swingers"],
  },
  {
    id: 268,
    title: "The Real Slim Shady",
    text: "Drawer must spend the next 5 rounds of the game standing up.",
    pack: ["swingers"],
  },
  {
    id: 270,
    title: "Truth Or Dare",
    text: "Spin the bottle, play 1 round of truth or dare with the vicim (Each player takes a turn asking the other).",
    pack: ["swingers"],
  },
  {
    id: 271,
    title: "Truth Or Dare",
    text: "Spin the bottle, play 1 round of truth or dare with the vicim (Each player takes a turn asking the other).",
    pack: ["swingers"],
  },
  {
    id: 272,
    title: "Truth Or Dare",
    text: "Spin the bottle, play 1 round of truth or dare with the vicim (Each player takes a turn asking the other).",
    pack: ["swingers"],
  },
  {
    id: 273,
    title: "Reverse",
    text: "The player order is now reversed.",
    pack: ["swingers"],
  },
  {
    id: 274,
    title: "Reverse",
    text: "The player order is now reversed.",
    pack: ["swingers"],
  },
  {
    id: 275,
    title: "Halloween",
    text: "Drink if you've ever dressed up in a sexy suit for halloween",
    pack: ["swingers"],
  },
  {
    id: 280,
    title: "Sleepy Drunk",
    text: "Drink if you've ever passed out a party in some place other than a bed.",
    pack: ["swingers"],
  },
  {
    id: 282,
    title: "Dumb Drunk",
    text: "Drink if you've ever been hurt significantly while drunk.",
    pack: ["swingers"],
  },
  {
    id: 283,
    title: "X-rated Drunk",
    text: "Drink if you've ever gotten naked in front of others while drunk.",
    pack: ["swingers"],
  },
  {
    id: 299,
    title: "Sex Week",
    text: "Drink if you've gotten laid this week.",
    pack: ["swingers"],
  },
  {
    id: 300,
    title: "Sex Day",
    text: "Drink if you've gotten laid today.",
    pack: ["swingers"],
  },
  {
    id: 301,
    title: "Sex Week",
    text: "Give a drink if you've gotten laid this week.",
    pack: ["swingers"],
  },
  {
    id: 302,
    title: "Sex Day",
    text: "Give a drink if you've gotten laid today.",
    pack: ["swingers"],
  },
  {
    id: 309,
    title: "Mardi Gras",
    text: "Remove an article of clothing and throw it to another player like beads off a float. If a player catches the article of clothing without dropping it they may give someone a drink.",
    pack: ["swingers"],
  },
  {
    id: 310,
    title: "Scolded by the Scale",
    text: "Drink if you are the lightest or heaviest at the party.",
    pack: ["swingers"],
  },
  {
    id: 311,
    title: "You Know What They Say",
    text: "Whoever has the largest shoe size must drink.",
    pack: ["swingers"],
  },
  {
    id: 312,
    title: "Love Hurts",
    text: "Drink if you've ever been injured during sex.",
    pack: ["swingers"],
  },
  {
    id: 313,
    title: "Tis Better To Give Than To Receive",
    text: "Choose a couple in the room and call out the partner you think goes down less frequently. If you are correct, give a drink, else drink.",
    pack: ["swingers"],
  },
  {
    id: 316,
    title: "You Know What They Say",
    text: "The biggest hands in the groups must give a drink. The smallest hands must drink.",
    pack: ["swingers"],
  },
  {
    id: 319,
    title: "Who's Sentence Is It Anyway?",
    text: "Start with a word, any word. Going clock-wise around the circle each person adds a new word until someone stumbles or the story falls apart. Whoever fucks it up drink.",
    pack: ["swingers"],
  },
  {
    id: 320,
    title: "Do you even lift?",
    text: "Drink for every day you have not workout in the past 7 days.",
    pack: ["swingers"],
  },
  {
    id: 342,
    title: "One Night Stand",
    text: "If you've ever hit it and quit it drink.",
    pack: ["swingers"],
  },
  {
    id: 345,
    title: "Penance",
    text: "Confess your most recent sin or drink.",
    pack: ["swingers"],
  },
  {
    id: 346,
    title: "Sweet Dreams",
    text: "Name the person (or people) in your most recent sex dream or drink.",
    pack: ["swingers"],
  },
  {
    id: 347,
    title: "Wet Dreams",
    text: "Describe your last sex dream or drink.",
    pack: ["swingers"],
  },
  {
    id: 348,
    title: "The Dream Confessional",
    text: "If you've had a sex dream about someout other than your partner since you've been toghether drink. If you're willing to say who they were, give a drink.",
    pack: ["swingers"],
  },
  {
    id: 351,
    title: "Pervert",
    text: "You must now end every sentence with 'daddy'. Drink per infraction.",
    pack: ["swingers"],
  },
  {
    id: 352,
    title: "Fresh Ink",
    text: "Pick someone in the group to give you a sharpie tattoo. The location, content and size are your choice but they only have 30 seconds to finish from the time the drawing starts.",
    pack: ["swingers"],
  },
  {
    id: 360,
    title: "Show and tell",
    text: "If you have a tattoo currently covered by a piece of clothing, prove it then give a drink. If not, everyone else drink because you didn't have the balls to do it",
    pack: ["swingers"],
  },
  {
    id: 363,
    title: "Body Double",
    text: "For the next 3 rounds the person across from you know has to drink every time you do.",
    pack: ["swingers"],
  },
  {
    id: 365,
    title: "I've been shot!",
    text: "Give a SHOT!",
    pack: ["swingers"],
  },
  {
    id: 368,
    title: "50/50",
    text: "Flip a coin. Take a body shot off the person to your left if heads, your right if tails.",
    pack: ["swingers"],
  },
  {
    id: 369,
    title: "50/50",
    text: "Flip a coin. Take a body shot off the person to your left if heads, your right if tails.",
    pack: ["swingers"],
  },
  {
    id: 370,
    title: "50/50",
    text: "Flip a coin. Take a body shot off the person to your left if heads, your right if tails.",
    pack: ["swingers"],
  },
  {
    id: 371,
    title: "Would You Rather?",
    text: "Would you rather watch your partner have sex with a stranger or have your partner watch you? Everyone votes, the team with the least amount of votes must drink.",
    pack: ["swingers"],
  },
  {
    id: 372,
    title: "Porn Pop Quiz",
    text: "Name your favorite category of porn.",
    pack: ["swingers"],
  },
  {
    id: 373,
    title: "Porn Pop Quiz",
    text: "Go around the circle and name a category of porn that you think the drawer watches.",
    pack: ["swingers"],
  },
  {
    id: 374,
    title: "Dirty Categories",
    text: "Go around the circle clockwise. Each person must name a category of porn. The first person to repeat one or hesitate for too long must drink.",
    pack: ["swingers"],
  },
  {
    id: 377,
    title: "Threesome",
    text: "If you've ever had a threesome drink.",
    pack: ["swingers"],
  },
  {
    id: 378,
    title: "Foursome",
    text: "If you've ever had a foursome drink.",
    pack: ["swingers"],
  },
  {
    id: 380,
    title: "Orgy",
    text: "If you've ever been part of an orgy drink.",
    pack: ["swingers"],
  },
  {
    id: 379,
    title: "Strip Club",
    text: "If you've never been to a strip club, drink.",
    pack: ["swingers"],
  },
  {
    id: 381,
    title: "Voyeur or exhibitionist?",
    text: "Would you rather have sex in front of others or watch others have sex? The whole group votes, the losing team has to drink.",
    pack: ["swingers"],
  },
  {
    id: 383,
    title: "Sexposition",
    text: "What is your favorite sex position?",
    pack: ["swingers"],
  },
  {
    id: 384,
    title: "Truth",
    text: "What type of underwear do you like to wear? What type of underwear are you wearing right now?",
    pack: ["swingers"],
  },
  {
    id: 389,
    title: "Truth",
    text: "Tell the group how many times you've had sex this week or drink. Bonus, tell the group how many times a week you'd like to have sex.",
    pack: ["swingers"],
  },
  {
    id: 392,
    title: "Truth or Dare",
    text: "Play a round of Truth or Dare with the person to your right.",
    pack: ["swingers"],
  },
  {
    id: 393,
    title: "Truth or Dare",
    text: "Play a round of Truth or Dare with the person to your left.",
    pack: ["swingers"],
  },
  {
    id: 394,
    title: "Dare",
    text: "Remove an article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 395,
    title: "Kiss someone's collar bone.",
    text: "",
    pack: ["swingers"],
  },
  {
    id: 398,
    title: "Spicy Dare",
    text: "Go into another room, take a dirty photo and flash it to the group.",
    pack: ["swingers"],
  },
  {
    id: 400,
    title: "Spicy Truth",
    text: "Name 3 things that turn you on.",
    pack: ["swingers"],
  },
  {
    id: 401,
    title: "Spicy Truth",
    text: "Name something weird that turns you on.",
    pack: ["swingers"],
  },
  {
    id: 402,
    title: "Dare",
    text: "Spin the bottle, give the victom a massage until your next turn. They may choose where you massage. If it's not consensual you may spin again.",
    pack: ["swingers"],
  },
  {
    id: 403,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["swingers"],
  },
  {
    id: 404,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["swingers"],
  },
  {
    id: 405,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["swingers"],
  },
  {
    id: 406,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["swingers"],
  },
  {
    id: 407,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["swingers"],
  },
  {
    id: 408,
    title: "Protection Card",
    text: "At any point for the rest of the game you may yell 'PROTECTION!' and skip a card/rule that involves you. This card can only be used once.",
    pack: ["swingers"],
  },
  {
    id: 409,
    title: "Truth",
    text: "Do you like to be spanked?",
    pack: ["swingers"],
  },
  {
    id: 410,
    title: "Truth",
    text: "Do you like to be chocked?",
    pack: ["swingers"],
  },
  {
    id: 412,
    title: "Truth",
    text: "Do you like talking dirty?",
    pack: ["swingers"],
  },
  {
    id: 413,
    title: "Truth",
    text: "Have you had a sex dream recently about someone other than your partner?",
    pack: ["swingers"],
  },
  {
    id: 416,
    title: "Dare",
    text: "Spin the bottle, sit in the victim's lap until next turn.",
    pack: ["swingers"],
  },
  {
    id: 417,
    title: "Truth",
    text: "Have you ever secretly rubbed one out while someone else was in the room?",
    pack: ["swingers"],
  },
  {
    id: 418,
    title: "Blow-Tease",
    text: "Give a blowjob to a bottle or drink.",
    pack: ["swingers"],
  },
  {
    id: 419,
    title: "3-Way",
    text: "Drawer and 2 other persons from the group they chooses must participate in a 3-way kiss or each of them drink.",
    pack: ["swingers"],
  },
  {
    id: 420,
    title: "Tongue Tied",
    text: "Drawer and someone who's not their partner must kiss with tongue or drink.",
    pack: ["swingers"],
  },
  {
    id: 421,
    title: "Tongue Tied",
    text: "Drawer and someone who's not their partner must kiss with tongue or drink.",
    pack: ["swingers"],
  },
  {
    id: 422,
    title: "Tongue Tied",
    text: "Drawer and someone who's not their partner must kiss with tongue or drink.",
    pack: ["swingers"],
  },
  {
    id: 423,
    title: "Only Fans",
    text: "Ask the group to raise hands if they want to see you naked. Drink for every person who raises their hands.",
    pack: ["swingers"],
  },
  {
    id: 424,
    title: "Pin the Tail on the Donkey",
    text: "You are the donkey, your nipple is the target. Spin the bottle, the person it lands on gets one chance to gently poke your nipple.",
    pack: ["swingers"],
  },
  {
    id: 425,
    title: "Privates Quiz",
    text: "Spin the bottle, the person it lands on must try to guess your penis / breast size. If they are correct they can give a drink, else they drink.",
    pack: ["swingers"],
  },
  {
    id: 426,
    title: "Would You Rather?",
    text: "Would you rather watch your partner have a threesome with another couple or have your partnet watched you?",
    pack: ["swingers"],
  },
  {
    id: 427,
    title: "Would You Rather?",
    text: "Would you rather watch your partner have sex with a stranger or have your partnet watch you?",
    pack: ["swingers"],
  },
  {
    id: 427,
    title: "Would You Rather?",
    text: "Would you rather watch your partner have sex with a stranger or have your partnet watch you? Everyone votes, the team with the least amount of votes must drink.",
    pack: ["swingers"],
  },
  {
    id: 428,
    title: "Would You Rather?",
    text: "Would you rather have foursome to the same couple or try new couples every time?",
    pack: ["swingers"],
  },
  {
    id: 429,
    title: "Would You Rather?",
    text: "Would you rather prefere to have foursome to the the couple or also try new couples?",
    pack: ["swingers"],
  },
  {
    id: 429,
    title: "Don't Kink Shame",
    text: "Name a king that you are into. For every one you're willing to name give a drink.",
    pack: ["swingers"],
  },
  {
    id: 430,
    title: "Sensitivity Training",
    text: "Name a part of your body (other than your private parts) that is sensitive to the touch and might just turn you on.",
    pack: ["swingers"],
  },
  {
    id: 431,
    title: "Dare",
    text: "Kiss someone in the group.",
    pack: ["swingers"],
  },
  {
    id: 432,
    title: "Dare",
    text: "Kiss someone in the group.",
    pack: ["swingers"],
  },
  {
    id: 433,
    title: "Dare",
    text: "Kiss someone in the group.",
    pack: ["swingers"],
  },
  {
    id: 444,
    title: "Dare",
    text: "Kiss someone in the group.",
    pack: ["swingers"],
  },
  {
    id: 435,
    title: "Dare",
    text: "Spin the bottle, let the person it lands on touch any part of you body whith your eyes closed.",
    pack: ["swingers"],
  },
  {
    id: 436,
    title: "Dare",
    text: "Nibble someone's ear.",
    pack: ["swingers"],
  },
  {
    id: 437,
    title: "Captain Cupid",
    text: "Pick 2 people othen than yourself and have them kiss each other. They decide how passionate the kiss is.",
    pack: ["swingers"],
  },
  {
    id: 438,
    title: "Dare",
    text: "Pick someone else to remove an aritlce of clothing.",
    pack: ["swingers"],
  },
  {
    id: 439,
    title: "Dare",
    text: "Go with someone who is not your partner in another room and take a sexy picture. Show it to the group.",
    pack: ["swingers"],
  },
  {
    id: 440,
    title: "Dare",
    text: "Go with someone who is not your partner in another room and take a sexy picture. Show it to the group.",
    pack: ["swingers"],
  },
  {
    id: 441,
    title: "Dare",
    text: "Go with someone who is not your partner in another room and take a sexy picture. Show it to the group.",
    pack: ["swingers"],
  },
  {
    id: 442,
    title: "Chicks Not Dicks",
    text: "All female players remove an article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 443,
    title: "Dicks Not Chicks",
    text: "All male players remove an article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 444,
    title: "Spicy Dare",
    text: "Makeout with someone for 20 seconds in front of the others or both drink.",
    pack: ["swingers"],
  },
  {
    id: 445,
    title: "Spicy Dare",
    text: "Makeout with someone for 20 seconds in front of the others or both drink.",
    pack: ["swingers"],
  },
  {
    id: 446,
    title: "Spicy Dare",
    text: "If you're male flash your butt to the crows, if you're female flash your breasts.",
    pack: ["swingers"],
  },
  {
    id: 447,
    title: "Spicy Dare",
    text: "Lick a boob in 30 seconds or remove an article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 448,
    title: "Spicy Dare",
    text: "Lick a boob in 30 seconds or remove an article or clothing.",
    pack: ["swingers"],
  },
  {
    id: 449,
    title: "Spicy Dare",
    text: "Either lick a boob or grab a dick (consensually ofcourse) within 30 seconds or remove an article of clothing.",
    pack: ["swingers"],
  },
  {
    id: 450,
    title: "Spicy Dare",
    text: "Kiss someone other than your significant other, anywhere of your choice.",
    pack: ["swingers"],
  },
  {
    id: 451,
    title: "Spicy Dare",
    text: "Spin the wheel, you must kiss the victim's inner thigh. If the victim is not the gender of your preference, you may spin again.",
    pack: ["swingers"],
  },
  {
    id: 452,
    title: "Spicy Dare",
    text: "Spin the wheel, you must let the victim grab a boob or a groin.",
    pack: ["swingers"],
  },
  {
    id: 453,
    title: "Spicy Dare",
    text: "Let your partner decide which article of clothing to remove. If your partner is not with you let the person to your left to decide.",
    pack: ["swingers"],
  },
  {
    id: 454,
    title: "Dare",
    text: "Spin the wheel, give the victim a massage until your next turn. They may choose where you massage. It it's not consensual you may spin again.",
    pack: ["swingers"],
  },
  {
    id: 455,
    title: "Dare",
    text: "Spin the wheel, give the victim a massage until your next turn. They may choose where you massage. It it's not consensual you may spin again.",
    pack: ["swingers"],
  },
  {
    id: 456,
    title: "Truth",
    text: "Do you like using condoms?",
    pack: ["swingers"],
  },
  {
    id: 457,
    title: "Truth",
    text: "Would you have a threesome without using condoms?",
    pack: ["swingers"],
  },
  {
    id: 458,
    title: "Truth",
    text: "Would you have a foursome without using condoms?",
    pack: ["swingers"],
  },
  {
    id: 459,
    title: "Dare",
    text: "Pedeapsa: Daca ai facut cumparaturi impulsive in ultima luna trebuie sa saruti un jucator. Jucatorul care castiga la piatra-hartie-foarfeca va fi partenerul/a",
    pack: ["swingers"],
  },
  {
    id: 460,
    title: "Dare",
    text: "Pentru fiecare pahar baut trebuie sa saruti cate un jucator. Ceilalti aleg pe cine si de cate ori",
    pack: ["swingers"],
  },
  {
    id: 461,
    title: "Dare",
    text: " Cn are cea mai putina bautura in pahar trb sa trimita snaps sexy toata saptamana",
    pack: ["swingers"],
  },
  {
    id: 462,
    title: "Dare",
    text: "I’ll pick a song and you have to give me a lap dance. Blindfolded.",
    pack: ["swingers"],
  },
  {
    id: 463,
    title: "Dare",
    text: "Blindfold me and write something sexy on my body",
    pack: ["swingers"],
  },
  {
    id: 464,
    title: "Dare",
    text: "Spin the bottle; you must ask the person it lands on to take their shirt off, only using your teeth",
    pack: ["swingers"],
  },
  {
    id: 465,
    title: "Dare",
    text: "Ask two people to kiss in front of the group for the duration of the whole next round",
    pack: ["swingers"],
  },
  {
    id: 466,
    title: "Dare",
    text: "Ask to exchange nudes with someone in the room",
    pack: ["swingers"],
  },
  {
    id: 467,
    title: "Dare",
    text: "Ask to exchange clothes with someone in the room",
    pack: ["swingers"],
  },
  {
    id: 468,
    title: "Dare",
    text: "Imitati pozitia sexuala preferata cu partenerul/a dvs",
    pack: ["swingers"],
  },
  {
    id: 469,
    title: "Truth",
    text: "How often do you think couples should have sex to keep the relationship strong?",
    pack: ["swingers"],
  },
  {
    id: 470,
    title: "Truth",
    text: "Do you think most people are monogamous? Why?",
    pack: ["swingers"],
  },
  {
    id: 471,
    title: "Dare",
    text: "Play the next 3 rounds blindfolded",
    pack: ["swingers"],
  },
  {
    id: 472,
    title: "Truth",
    text: "How and where do you prefer finishing off?",
    pack: ["swingers"],
  },
  {
    id: 473,
    title: "Dare",
    text: "Take a funny/naughty group pic",
    pack: ["swingers"],
  },
  {
    id: 474,
    title: "Truth",
    text: "Between you and your boyfriend/girlfriend, who do you think might be cheating on the other?",
    pack: ["swingers"],
  },
  {
    id: 475,
    title: "Dare",
    text: "Drink for every player you would sleep with",
    pack: ["swingers"],
  },
  {
    id: 476,
    title: "Dare",
    text: "Dati cu zarul toti, cel mai mare zar ii da o provocare celui mai mic",
    pack: ["swingers"],
  },
  {
    id: 477,
    title: "Dare",
    text: "Spune un nr de la 2 la 12. Jucatorul/ii cu zarul cel mai apropiat trebuie sa bea",
    pack: ["swingers"],
  },
  {
    id: 478,
    title: "Truth",
    text: "Daca te-ai sarutat vreodata cu cineva cu diferenta de varsta mai mare de 1 an bei",
    pack: ["swingers"],
  },
  {
    id: 479,
    title: "Truth",
    text: "Bea daca ai face o sedinta foto sexy 👀",
    pack: ["swingers"],
  },
  {
    id: 480,
    title: "Dare",
    text: "Trimite-i altui jucator un mesaj foarte pervers",
    pack: ["swingers"],
  },
  {
    id: 481,
    title: "Dare",
    text: "Let the player in front of you tie you up and blindfold you",
    pack: ["swingers"],
  },
  {
    id: 482,
    title: "Dare",
    text: "Fa i un masaj erotic jucatorului din fata ta",
    pack: ["swingers"],
  },
  {
    id: 483,
    title: "Dare",
    text: "If there’s a pool or a hot tub, go skinny-dipping 👀",
    pack: ["swingers"],
  },
  {
    id: 484,
    title: "Dare",
    text: "Mergi in alta camera cu altcineva decat partenerul tau si trimite o poza sexy celorlalti jucatori 👀",
    pack: ["swingers"],
  },
  {
    id: 485,
    title: "Dare",
    text: "Do a twerk contest. Loser may drink winner's glass of drink",
    pack: ["swingers"],
  },
  {
    id: 486,
    title: "Dare",
    text: "Jucati o tura de 'pose like a zara model'",
    pack: ["swingers"],
  },
  {
    id: 487,
    title: "Truth",
    text: "Daca ai mai trimis poze steamy cuiva inainte de relatia actuala bei",
    pack: ["swingers"],
  },
  {
    id: 488,
    title: "Truth",
    text: "If you ever sent a sexy picture to the wrong person, drink",
    pack: ["swingers"],
  },
  {
    id: 489,
    title: "Truth",
    text: "If you ever had a sexy dream with one of your friends, drink, you horny bastard!",
    pack: ["swingers"],
  },
  {
    id: 490,
    title: "Dare",
    text: "Close your eyes. The others choose a person whose feet you need to touch. If you can guess the person, the others drink",
    pack: ["swingers"],
  },
  {
    id: 491,
    title: "Truth",
    text: "Have you ever slept with a co-worker?",
    pack: ["swingers"],
  }
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
