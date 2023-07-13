
var qut=[
    ["“So many books, so little time.”","--Frank Zappa"],
    ["“You only live once, but if you do it right, once is enough.”","--Mae West"],
    ["“Be the change that you wish to see in the world.”","--Mahatma Gandhi"],
    ["“Always forgive your enemies; nothing annoys them so much.”","--Oscar Wilde"],
    ["“A room without books is like a body without a soul.”","--Marcus Tullius Cicero"]]
var temp = -1;
var myCard =document.getElementById('result');
function printResult(){
    var num=Math.floor(Math.random()*qut.length)
    while (temp == num) {
        var num=Math.floor(Math.random()*qut.length)
    }
    myCard.innerHTML = `
    <div class="row g-0 overflow-hidden">
        <div class="col-md-4 col-12">
        <img src="imgs/q(${num}).jpg" class="img-fluid w-100 h-100" alt="${qut[num][1]}">
        </div>
        <div class="col-md-8 col-12 min-height">
        <div class="card-body d-flex flex-column justify-content-between h-100">
            <p class="card-text">${qut[num][0]}</p>
            <h6 class="card-title text-end">${qut[num][1]}</h6>
            </div>
        </div>
    </div>
    `;
    temp=num;
}
