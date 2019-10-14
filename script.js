let today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$('.lead').html(`${today}`);

let day1 = moment(new Date()).add('days').format("dddd, MMMM Do YYYY");
let day2 = moment(new Date()).add(1, 'days').format("dddd, MMMM Do YYYY");
let day3 = moment(new Date()).add(2, 'days').format("dddd, MMMM Do YYYY");
let day4 = moment(new Date()).add(3, 'days').format("dddd, MMMM Do YYYY");
let day5 = moment(new Date()).add(4, 'days').format("dddd, MMMM Do YYYY");
let day6 = moment(new Date()).add(5, 'days').format("dddd, MMMM Do YYYY");
let day7 = moment(new Date()).add(6, 'days').format("dddd, MMMM Do YYYY");

let todo = 0;

function createCard (day) {
    todo++;
    $('.calendar').append(`
    <div class="row">
    <div class="col-2 card" id="blue">${day}</div>
    <div class="col-8 card todo-card todo${todo}"></div>
    <div class="col-2 card"></div>
    </div>
`)
;}

createCard(day1);
$('.todo1').click(function() {
    let entry = prompt("What do you have to do?");
    localStorage.setItem("data", JSON.stringify(entry));
    // JSON.parse(localStorage.getItem('data'));
    $('.todo1').append(`${JSON.parse(localStorage.getItem('data'))}`);
})
createCard(day2);
$('.todo2').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo2').append(`${entry}`);
})
createCard(day3);
$('.todo3').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo3').append(`${entry}`);
})
createCard(day4);
$('.todo4').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo4').append(`${entry}`);
})
createCard(day5);
$('.todo5').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo5').append(`${entry}`);
})
createCard(day6);
$('.todo6').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo6').append(`${entry}`);
})
createCard(day7);
$('.todo7').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo7').append(`${entry}`);
})

// $(`.todo${todo}`).click(function() {
//     let entry = prompt("What do you have to do?");
//     $(`.todo${todo}`).append(`${entry}`);
// })