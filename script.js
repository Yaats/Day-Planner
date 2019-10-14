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
    $('.todo1').append(`${JSON.parse(localStorage.getItem('data'))}`) && $('.todo1').attr('id', 'green') && $('.todo1').siblings(":last").append(`<b style="font-size: 20px">Click when done</b>`);
    //
    // doesn't keep the value appended after refresh but when " console.log(JSON.parse(localStorage.getItem('data')))" " 
    // the value is still stored. WHYYY???
    //
})

$('.todo1').siblings(":last").click(function() {
    $('.todo1').attr('id', 'red');
})

createCard(day2);
$('.todo2').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo2').append(`${entry}`) && $('.todo2').attr('id', 'green') && $('.todo2').siblings(":last").append(`<b style="font-size: 20px">Click when done</b>`);
})

createCard(day3);
$('.todo3').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo3').append(`${entry}`) && $('.todo3').attr('id', 'green') && $('.todo3').siblings(":last").append(`<b style="font-size: 20px">Click when done</b>`);
})
createCard(day4);
$('.todo4').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo4').append(`${entry}`) && $('.todo4').attr('id', 'green') && $('.todo4').siblings(":last").append(`<b style="font-size: 20px">Click when done</b>`);
})
createCard(day5);
$('.todo5').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo5').append(`${entry}`) && $('.todo5').attr('id', 'green') && $('.todo5').siblings(":last").append(`<b style="font-size: 20px">Click when done</b>`);
})
createCard(day6);
$('.todo6').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo6').append(`${entry}`) && $('.todo6').attr('id', 'green') && $('.todo6').siblings(":last").append(`<b style="font-size: 20px">Click when done</b>`);
})
createCard(day7);
$('.todo7').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo7').append(`${entry}`) && $('.todo7').attr('id', 'green') && $('.todo7').siblings(":last").append(`<b style="font-size: 20px">Click when done</b>`);
})

// $(`.todo${todo}`).click(function() {
//     let entry = prompt("What do you have to do?");
//     $(`.todo${todo}`).append(`${entry}`);
// })