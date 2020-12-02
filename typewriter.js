const sentence = "hello there from lighthouse labs";
let index = 0;
function recur (index) {
  if (index >= sentence.length) {
    return process.stdout.write('\n')
  }
  setTimeout(() => {
    process.stdout.write(sentence[index]);
    recur(index = index + 1);
  }, 50);
} 
recur(index);
