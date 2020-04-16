const size = 8;

for(let i = 0; i < size; i++) {
    let part = "";
    for(let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            part += "#";
        } else {
            part += " ";
        }
    }
    console.log(part);
}