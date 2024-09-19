function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // Handle empty input

    let prefix = "";

    // Iterate through characters of the first string
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        // Check if this character exists at the same position in all other strings
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== char) {
                return prefix; // Mismatch found, return the current prefix
            }
        }

        prefix += char; // All strings match, add char to the prefix
    }

    return prefix; // All characters of the first string matched
}

longestCommonPrefix(["flower", "flow", "flight"])