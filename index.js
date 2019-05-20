function lazyRange(next, startingPoint) {
    return {
        take(num) {
            let res = [startingPoint];
            for (let i = 0; i < num - 1; i++) {
                res.push(next(res));
            }
            return res;
        },
        get(num) {
            let res = startingPoint;
            for (let i = 0; i < num; i++) {
                res = next([res]);
            }
            return res;
        }
    }
}

function range(...args) {
    if (args.length === 1) {
        if (typeof args[0] === "object" && args.toString() === "[object Object]") {
            let i = args[0].start;
            let res = []
            while (i < args[0].stop) {
                res.push(i);
                if (typeof args[0].step === "number") {
                    i += args[0].step;
                } else if (typeof args[0].step === "function") {
                    i = args[0].step(i);
                } else {
                    i += 1;
                }
            }
            return res;
        } else if (typeof args[0] === "number") {
            return range({
                start: 0,
                stop: args[0],
                step: 1
            })
        }
    } else {
        const subDiffs = args.slice(1).map((a, index) => a - args[index]);
        const divDiffs = args.slice(1).map((a, index) => a / args[index]);
        const startingPoint = args[0];
        if (subDiffs.every(x => x === subDiffs[0])) {
            return lazyRange(arr => arr[arr.length - 1] + subDiffs[0], startingPoint);
        } else if (divDiffs.every(x => x === divDiffs[0])) {
            return lazyRange(arr => arr[arr.length - 1] * divDiffs[0], startingPoint);
        }
    }
}

module.exports = range;