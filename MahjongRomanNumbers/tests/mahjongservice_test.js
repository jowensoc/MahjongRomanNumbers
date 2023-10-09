let assert = chai.assert;

import mahjongRomanNumbersService from "../src/public/scripts/MahjongRomanNumbersService.js";

describe('Mahjong Service', function () {

    // GAME MODE
    const gameMode = [
        ["easy", {
            "startRange": 1,
            "endRange": 10,
            "requiredTiles": 6
        }],
        ["normal", {
            "startRange": 1,
            "endRange": 25,
            "requiredTiles": 10
        }],
        ["hard", {
            "startRange": 100,
            "endRange": 900,
            "requiredTiles": 12
        }],
        ["impossible",   {
            "startRange": 500,
            "endRange": 4000,
            "requiredTiles": 16
        }]
    ];

    gameMode.forEach(([args, gameSettings]) => {
        describe(`When the game mode is ${args}`, function () {
            let results = mahjongRomanNumbersService.mahjongRomanNumbersService().createTiles(gameSettings);

            it(`List of game tiles should not be null`, function () {
                assert(results !== null);
                //assert(settings.requiredTiles === results.length);
            });

            it(`Should return expected number of game tiles`, function () {
                assert(results.length === (gameSettings.requiredTiles * 2));
            });

            it(`Should not return any unexpected out of range integers`, function () {
                let filteredIntegers = results.filter(item => item.type === "integer"
                    &&
                    (Math.round(item.number) < gameSettings.startRange || Math.round(item.number) > gameSettings.endRange));

                assert(filteredIntegers.length === 0);
            });
        });

    });


    // GAME TILES
    const expectations = [
        ["must match up", {
            "startRange": 1,
            "endRange": 10,
            "tileInteger": "9",
            "tileRomanNumber": "IX",
            "expectedResult": true,
            "requiredTiles": 10
        }],
        ["must not match up", {
            "startRange": 1,
            "endRange": 10,
            "tileInteger": "4",
            "tileRomanNumber": "CD",
            "expectedResult": false,
            "requiredTiles": 10
        }]
    ];

    describe(`Checking Game Logic`, function () {
        expectations.forEach(([expectation, settings]) => {
            let gameSettings = {
                "startRange": settings.startRange,
                "endRange": settings.endRange,
                "requiredTiles": settings.requiredTiles
            };

            it(`Tiles ${expectation}`, function () {
                const service = mahjongRomanNumbersService.mahjongRomanNumbersService();

                service.createTiles(gameSettings);

                let tile1 = {"number": settings.tileInteger, "type": "integer"}
                let tile2 = {"number": settings.tileRomanNumber, "type": "romanletter"}

                let matchResults = service.matchTiles(tile1, tile2);

                assert(matchResults === settings.expectedResult);
            });
        });
    });

});