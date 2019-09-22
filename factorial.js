function factorial() {
	const memo = {};
	return function innerFactorial(n) {
		if(memo[n]) {
			console.log('from memo');
			return memo[n];
		}
        console.log(memo);
        if (n <= 1) return n;
        return memo[n] = n * innerFactorial(n - 1, memo);	
	}
}
