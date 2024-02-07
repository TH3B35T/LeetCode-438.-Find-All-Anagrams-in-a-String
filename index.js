// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {number[]}
//  */
// var findAnagrams = function(s, p) {
//     const Counter = (str) => {
//         const counter = {};
//         for(let char of str){
//             counter[char] = (counter[char] || 0) + 1
//         }
//         return counter;
//     }

//     const Is_equal = (obj1,obj2) => {
//         for(let key of Object.keys(obj1)){
//             if(obj2[key]){
//                 if(obj1[key] != obj2[key]){
//                     return false;
//                 } 
//             } else {
//                 return false;
//             }
//         }
//         return true;
//     }

//     const p_counter = Counter(p);

//     let i = 0;
//     const indices = [];

//     while(i<=s.length){
//         let s_counter = Counter(s.slice(i,p.length+i))
//         if(Is_equal(p_counter, s_counter)){
//             indices.push(i);
//         }
//         i++;
//     }
//     return indices;
// };

var findAnagrams = function(s, p) {
    const Counter = (str) => {
        const counter = {};
        for (let char of str) {
            counter[char] = (counter[char] || 0) + 1;
        }
        return counter;
    };

    const Is_equal = (obj1, obj2) => {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
        for (let key in obj1) {
            if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    };

    const p_counter = Counter(p);
    const s_counter = Counter(s.substring(0, p.length));
    const indices = [];
    let i = 0;

    if (Is_equal(p_counter, s_counter)) indices.push(i);

    while (i + p.length < s.length) {
        s_counter[s[i]] -= 1;
        if (s_counter[s[i]] === 0) delete s_counter[s[i]]; // Remove char count if it's zero
        i++;
        const newChar = s[i + p.length - 1];
        s_counter[newChar] = (s_counter[newChar] || 0) + 1;

        if (Is_equal(p_counter, s_counter)) indices.push(i);
    }

    return indices;
};
