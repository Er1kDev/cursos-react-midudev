import { WINNER_COMBINATIONS } from '../constants.js'


// Función que revisa si hay un ganador en el tablero
// boardToCheck es el tablero que queremos revisar
export const checkWinnerFrom = (boardToCheck) => {
    // revisamos todas las combinaciones posibles ganadoras
    // para ver si X o O ganaron
    for (const combo of WINNER_COMBINATIONS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    // si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    // Revisamos si hay un empate
    // si no hay mas espacios vacios
    // en el tablero
    return newBoard.every((square) => square !== null)
}