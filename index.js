// s = "abcabcbb"
// 1. brute force: [a, b, c] -> 3 
// [b, c, a] -> 3 
// 2. or sliding window method: 
// [a] 
// then expand the window [a, b]
// and so on [a, b, c]
// [a, b, c, a] no longer a substring with repeating characteres 
// remove the most left element [b, c, a] 
// [b, c, a, b] -> [c, a, b] 
// [c, a, b, c] -> [a, b, c] 
// split it [a, b, c, b] -> [c, b]
// remove two elements to make the array with no repeating characters 
// [c, b, b] -> [b]

var lengthOfLongestSubstring = function(s) {
    let count = 0; 

    for (let i=0; i < s.length; i++) {
        let char = s.charAt(i);
        let set = new Set([char]); 

        for (let j=0; j < s.length; j++) {
            let char = s.charAt(j);
            if (set.has(char)) {
                break;
            } else {
                set.add(char);
            }
            count = Math.max(count,set.size); 
        }
    }
    return count
};

// var lengthOfLongestSubstring = function(s) {
//     let count = 0; 

//     let i = 0;
//     let j = 0;
//     let n = s.length;
//     let set = new Set();

//     while (i < n && j < n) {
//         let char = s.charAt(j);
//         if (!set.has(char)) {
//             set.add(char);
//             j++;
//             count = Math.max (count, j - i) 
//         } else {
//             set.delete(s.charAt(i)); 
//             i++; 
//         }
//     }
//     return count
// };

let result = lengthOfLongestSubstring
console.log(result)

// Another solution:
// const string = "au"

// const lengthOfLongestSubstring = function(s) {
//     if(s.length <= 1) return s.length;
    
//     const seen = {};
//     let left = 0, longest = 0;
    
//     for(let right = 0; right < s.length; right++) {
//         const currentChar = s[right];
//         const previouslySeenChar = seen[currentChar];
        
//         if(previouslySeenChar >= left) {
//           left = previouslySeenChar + 1;
//         }
        
//         seen[currentChar] = right;
        
//         longest = Math.max(longest, right - left + 1);
//     }
    
//     return longest;
// };

// console.log(lengthOfLongestSubstring(string));