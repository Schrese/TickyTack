export function calculateWinner(squares) {
    // lines is a "lookup array". It contains all of the winning combinations
    // So... [0, 1, 2] is just all of the top line (1, 2, 3)
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        // someone added another const in here

        // hopefully all of this will break
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a] // a, b, and c will either be an x or an o, so that's what we're returning
        }
    }
    return null
}

// this is just a test array
const squares = [
    null, null, null,
    'X', 'X', '0', 
    null, null, null
]

console.log(calculateWinner(squares));