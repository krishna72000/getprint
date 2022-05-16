export default function rid() {
    // 65 to 90. ASCII value of lowercase alphabets – 97 to 122. ASCII value of UPPERCASE alphabets
    let cnt = 0, cnt2 = 0;
    let rndlst = [];
    for (let i = 5; i > 0; i--) {
        let rand = [];
        for (let j = 2; j > 0; j--) {
            rand[cnt] = String.fromCharCode(Math.floor(Math.random() * 25) + 65);
            cnt++;
            rand[cnt] = Math.floor(Math.random() * 9);
            cnt++;
            rand[cnt] = String.fromCharCode(Math.floor(Math.random() * 25) + 97);
        }
        rndlst[cnt2] = rand.join("");
        cnt2++;
    }
    return rndlst.join("-");
}