Jacob Hayes
jahayes5@my.waketech.edu
This is my school account
This repository will hold all my assignments
# About Me
## My Interest are reading and history which happily coincide together by reading old documents an interesting fact is that I got to read a copy of Thomas Jefferson's dairy at my girlfriend's college and it was the most interesting thing to read and see how he felt about certain events in our country's founding and subsequent important events after.
## Websites I recommend
[Radio Garden](https://radio.garden)- This is used to discover what radio stations are playing around the world!
[National Archives](https://www.archives.gov)- Used to look up historical documents along with service members records which I will be using for my family tree.

flowchart TD
  Start([Start]) -->|Generate Random Number| GenerateNum
  GenerateNum --> |Prompt User for Input| GetInput
  GetInput -->|Validate Input| CheckInput
  CheckInput -->|Invalid (Non-Numeric)| ErrorMsg
  ErrorMsg -->|Prompt User Again| GetInput
  CheckInput -->|Valid Input| CompareNum
  CompareNum -->|Guess Too Low| TooLow
  TooLow -->|Prompt User Again| GetInput
  CompareNum -->|Guess Too High| TooHigh
  TooHigh -->|Prompt User Again| GetInput
  CompareNum -->|Correct Guess| CorrectMsg
  CorrectMsg --> End([End])
```

## Description
1. **Start** - The game begins.
2. **Generate Random Number** - The system generates a random number within a defined range.
3. **Prompt User for Input** - The user is asked to enter a guess.
4. **Validate Input** - The system checks whether the input is a valid number.
   - If invalid (non-numeric input), an error message is displayed, and the user is prompted again.
5. **Compare Number** - The system compares the user's guess with the generated number.
   - If the guess is too low, the user is prompted again.
   - If the guess is too high, the user is prompted again.
   - If the guess is correct, a success message is displayed, and the game ends.
