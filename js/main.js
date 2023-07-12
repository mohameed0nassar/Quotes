//frank zappa
//mae west
//Mahatma Gandhi
//Oscar Wilde
//Marcus Tullius Cicero
var qut=[
    ["“So many books, so little time.”","--Frank Zappa"],
    ["“You only live once, but if you do it right, once is enough.”","--Mae West"],
    ["“Be the change that you wish to see in the world.”","--Mahatma Gandhi"],
    ["“Always forgive your enemies; nothing annoys them so much.”","--Oscar Wilde"],
    ["“A room without books is like a body without a soul.”","--Marcus Tullius Cicero"]]
var temp = -1;
function printResult(){
    var num=Math.floor(Math.random()*qut.length)
    while (temp == num) {
        var num=Math.floor(Math.random()*qut.length)
    }
    document.getElementById('result').innerHTML = `
    <img src="./imgs/q(${num}).jpg" class="w-100" alt="">
    <div class="card-body">
        <p>${qut[num][0]}</p>
        <span >${qut[num][1]}</span>
    </div>`;
    temp=num;
}