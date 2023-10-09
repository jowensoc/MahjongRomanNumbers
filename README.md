# Mahjong Roman Numbers

A Javascript game where you need to match a Roman numeral to their integer counterpart. Game pieces appears as tiles.

Match Examples:

1 = I\
2 = II\
4 = IV\
5 = V\
6 = VI\
9 = IX\
10 = X

## npm install
A caveat. The project structure is not right when you install or run packages. Apologies. When you need to install packages like mocha, chai, and shelljs, run the npm command from inside the *second* MahjongRomanNumbers folder i.e. "(root dir)/MahjongRomanNumbers/MahjongRomanNumbers/".The Mocha unit tests can then be executed properly.

 "(root dir)/MahjongRomanNumbers/MahjongRomanNumbers/"\

> npm install

## Javascript Files
In the 'src' folder, you will find three javascript files. Each one have their own purpose.

RomanNumberService.js - This generates Roman numbers and returns a set of Roman numerals. It accepts a range of numbers, minimum and maximum, and how many numbers it's expected to return.\
Example: You can ask for 10 Roman numerals ranging from 100 to 500. This file is imported into MahjongRomanNumbersService.js

MahjongRomanNumbersService.js - This file imports the file RomanNumberService.js as a service, and is used to make requests for a set of Roman numerals. RomanNumberService acts as a service which handles game logic such as matching a Roman numeral to their integer counterpart.

MahjongRomanFrontEnd.js - This file calls MahjongRomanNumbersService.js to generate a number of tiles and displays them on the webpage. 



## NPM Commands

There is 1 npm command in the package.json file; batchcompress. Sidenote: The batch compress was originally written on a Windows machine, the FileSystem used in Node may not work well on Mac OSX.

### Batch Compress
This command reads all javascript files from the 'public/script' directory and minifies the file to a new file name. Files with *.min.js file extensions are ignored to prevent duplicates.
> npm run batchcompress

This process uses uglify-js and ShellJS packages. If you plan to modify those files, please ensure you have those package installed via npm.

## Unit Tests
There are unit tests set up with Mocha and Chai. To view the results from those unit tests, open up your IDE, go to the 'tests' directory, open up Test.html through your preferred browser.

I've used IntelliJ to unit test my javascript files, testing out the business logics. You may see something like this below.

> When the game mode is easy
> - List of game tiles should not be null
> - Should return expected number of game tiles
> - Should not return any unexpected out of range integers

## Thanks

Developing this wee game was fun and educational. Enjoy playing it!
