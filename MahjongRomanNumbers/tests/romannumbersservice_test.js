let assert = chai.assert;

import romanNumberService from "../src/public/scripts/RomanNumberService.js";
describe('Roman Numbers Service', function () {

    describe('', function () {
        it('should return a valid list of Roman Numbers', function () {
            let requiredTiles = 10;
            let results = romanNumberService.romanNumberService().generateRomanNumbers(requiredTiles, 1, 100);

            assert(results !== null);
            assert(requiredTiles === results.length);
        });

        it('should validate Roman numbers', function () {
            let results = romanNumberService.romanNumberService().concatenateRomanNumber(79);
            assert(results !== null);
            assert(79 === results.number);
            assert("Tens" === results.unittype);
            assert("LXXIX" === results.romanletter);
        });

    });

    const gameSettings = [
        ["Singles", {
            "startRange": 1,
            "endRange": 9,
            "requiredTiles": 9
        }],
        ["Tens", {
            "startRange": 10,
            "endRange": 20,
            "requiredTiles": 10
        }],
        ["Hundreds", {
            "startRange": 100,
            "endRange": 900,
            "requiredTiles": 10
        }],
        ["Thousands",   {
            "startRange": 500,
            "endRange": 4000,
            "requiredTiles": 10
        }]
    ];

    gameSettings.forEach(([args, settings]) => {
        describe(`When the Unit Type is ${args}`, function () {
            let results = romanNumberService.romanNumberService().generateRomanNumbers(settings.requiredTiles, settings.startRange, settings.endRange);

            it(`return a list of Roman Numbers`, function () {
                assert(results !== null);
                assert(settings.requiredTiles === results.length);
            });

            it(`should not have any out of range number`, function () {
                let unexpectedNumbers = results.find((element) => element.number < settings.startRange && element.number > settings.endRange);

                assert(unexpectedNumbers === undefined);
            });
        });
    });
});