module.exports = {
    climbWays: function (n, x) {
        if (n === 0) return 1;
        if (n < 0) return 0;
        let ways = 0;
        for (let i = 0; i < x.length; i += 1) {
            const m = n - x[i];
            ways += this.climbWays(n - x[i], x);
        }
        return ways;
    }
}