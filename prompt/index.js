function checkNull(ansfer) {
  if (ansfer === null) alert("Видимо ты отказался отвечать...");
}

// qw #1
var ansfer = prompt("Сколько будет 2 + 2?");
checkNull(ansfer);
if (ansfer === "4") {
  alert("Ответ: если ты ответил 4, то ты прав. Похоже ты ответил 4!");
} else if (ansfer !== null) {
  alert("Ты не прав :(");
}

// qw #2
var ansfer = prompt("Чему равен корень из 9?");
checkNull(ansfer);
if (ansfer === "3") {
  alert("Ответ: если ты ответил 3, то ты прав. Похоже ты ответил 3!");
} else if (ansfer !== null) {
  alert("Ты не прав :(");
}

// qw #3
var ansfer = prompt("Сколько будет 2 в 5-й степени?");
checkNull(ansfer);
if (ansfer === "32") {
  alert("Ответ: если ты ответил 32, то ты прав. Похоже ты ответил 32!");
} else if (ansfer !== null) {
  alert("Ты не прав :(");
}