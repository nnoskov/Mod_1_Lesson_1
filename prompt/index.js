function checkNull(answer) {
  if (answer === null) alert("Видимо ты отказался отвечать...");
}

// qw #1
var answer = prompt("Сколько будет 2 + 2?");
checkNull(answer);
if (answer === "4") {
  alert("Ответ: если ты ответил 4, то ты прав. Похоже ты ответил 4!");
} else if (answer !== null) {
  alert("Ты не прав :(");
}

// qw #2
answer = prompt("Чему равен корень из 9?");
checkNull(answer);
if (answer === "3") {
  alert("Ответ: если ты ответил 3, то ты прав. Похоже ты ответил 3!");
} else if (answer !== null) {
  alert("Ты не прав :(");
}

// qw #3
answer = prompt("Сколько будет 2 в 5-й степени?");
checkNull(answer);
if (answer === "32") {
  alert("Ответ: если ты ответил 32, то ты прав. Похоже ты ответил 32!");
} else if (answer !== null) {
  alert("Ты не прав :(");
}
