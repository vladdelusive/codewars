// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

function tickets(peopleInLine) {
    const cost = [0, 0, 0]
    for (bill of peopleInLine) {
        if (bill === 25) {
            cost[0]++
        } else if (bill === 50) {
            cost[1]++
            cost[0]--
        } else if (bill === 100) {
            cost[1] ? cost[1]-- : cost[0] -= 2
            cost[0]--
        }
        if (cost.some((e) => e < 0)) {
            return "NO"
        }
    }
    return "YES"
}

function tickets(peopleInLine) {
    const cost = [0, 0, 0]
    for (bill of peopleInLine) {
        if (bill === 25) {
            cost[0]++
        } else if (bill === 50) {
            cost[1]++
            cost[0]--
        } else if (bill === 100) {
            cost[1] ? cost[1]-- : cost[0] -= 2
            cost[0]--
        }
        if (cost.some((e) => e < 0)) {
            break
        }
    }
    return cost.some((e) => e < 0) ? "NO" : "YES"
}