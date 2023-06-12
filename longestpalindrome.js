var longestPalindrome = function (string) {
    let longestPal = '';

    var getLongestPalindrome = function (left, right) {
    
        while (
            left >= 0 &&
            right < string.length &&
            string[left] === string[right]
        ) {
    
            left--;
            right++;
        }

        if (right - left > longestPal.length) {
            longestPal = string.slice(left + 1, right);
        }
    };

    for (let i = 0; i < string.length; i++) {
        getLongestPalindrome(i, i + 1);

        getLongestPalindrome(i, i);

        if ((string.length - i) * 2 < longestPal.length) {
            break;
        }
    }

    return longestPal;
};