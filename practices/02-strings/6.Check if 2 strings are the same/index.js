const solution = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    const str1Map = {};
    for(const char of str1) {
        if(char in str1Map) {
            str1Map[char] +=1;
        } else {
            str1Map[char] = 1;
        }
    }

    for(const char of str2) {
        if(!str1Map[char] || str1Map[char] < 1) {
            return false;
        } else {
            str1Map[char] -= 1;
        }
    }
    
    return true;
}


