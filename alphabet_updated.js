alphabet = {
    'a': [' ^ ', ' * ', '* *'],
    'b': ['* >', ' * ', '* >'],
    'c': [' **', '*  ', ' **'],
    'd': ['*  ', '* >', '*  '],
    'e': ['***', '** ', '***'],
    'f': ['***', '** ', '*  '],
    'g': ['***', '* >', '** '],
    'h': ['* *', '***', '* *'],
    'i': [' * ', ' * ', ' * '],
    'j': ['***', ' * ', '** '],
    'q': ['* *', '*< ', '* *'],
    'l': ['*  ', '*  ', '***'],
    'm': ['***', '***', '* *'],
    'n': ['< *', '***', '* <'],
    'o': ['***', '* *', '***'],
    'p': ['***', '***', '*  '],
    'q': ['***', '* *', '**<'],
    'r': ['**>', '***', '* *'],
    's': [' **', '<* ', '**>'],
    't': ['***', ' * ', ' * '],
    'u': ['* *', '* *', '***'],
    'v': ['* *', '* *', ' * '],
    'w': ['* *', '***', '***'],
    'x': ['*  *', ' >< ', '*  *'],
    'y': ['* *', ' * ', ' * '],
    'z': ['***', ' < ', '***'],
    ' ': [' . ', ' . ', ' . '],
    'em_spacer': ['  ', '  ', '  ']
};

function ConstructString(inputString) {
    alphabetArray = [];

    for (var i = 0; i < inputString.length; ++i) {
        currChar = inputString[i].toLowerCase();

        if (currChar in alphabet) {
            alphabetArray.push(alphabet[currChar]);
        } else {
            console.error("Unrecognized character '${currChar}'");

            return null;
        }
    }
    return alphabetArray;
}

function PrintString(inputString) {
    wordString = '';
    alphabetArray = ConstructString(inputString);

    for (var height = 0; height < 3; ++height) {
        for (var i = 0; i < alphabetArray.length; ++i) {
            wordString += alphabetArray[i][height] + alphabet['em_spacer'][height];
        }
        wordString += '\n';
    }
    console.log(wordString);
}

PrintString('I cannot believe it');