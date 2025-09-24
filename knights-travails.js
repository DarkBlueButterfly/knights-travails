function knightMoves(start, end) {
    const knightMovements = [
        [1, 2], [1, -2], [-1, 2], [-1, -2],
        [2, 1], [2, -1], [-2, 1], [-2, -1]
    ]

    const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

    const queue = [[start, [start]]]; // [position, path so far]
    const visited = new Set(); 

    while (queue.length > 0) {
        const [[x, y], path] = queue.shift();
        const key = `${x},${y}`;

        if (x === end[0] && y === end[1]) {
            return path;
        }

        if (visited.has(key)) continue;
        visited.add(key);

        for (let [dx, dy] of knightMovements) {
            const pointX = x + dx;
            const pointY = y + dy;

            if (isValid(pointX, pointY)) {
                queue.push([[pointX, pointY], [...path, [pointX, pointY]]]);
            }
        }
    }
    return "Invalid Path"; // No path found
}

// Test
const start = [0, 0];
const end = [7, 7];
const path = knightMoves(start, end);

console.log(`Shortest path from [${start}] to [${end}]:`, path);
