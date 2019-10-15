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
    $('.todo1').append(`${JSON.parse(localStorage.getItem('data'))}`) && $('.todo1').attr('id', 'green') && $('.todo1').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
    //
    // doesn't keep the value appended after refresh but when " console.log(JSON.parse(localStorage.getItem('data')))" " 
    // the value is still stored. WHYYY???
    //
})

$('.todo1').siblings(":last").click(function() {
    if ($('img').attr('src') == "./assets/check.png") {
    $('.todo1').attr('id', 'red') && $('.todo1').siblings(":last").html(`<img src="./assets/close.png" style="width: 40px; margin-left: 40%">`);
    } else {
        $('.todo1').attr('id', 'green') && $('.todo1').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
    }
})




createCard(day2);
$('.todo2').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo2').append(`${entry}`) && $('.todo2').attr('id', 'green') && $('.todo2').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
})

$('.todo2').siblings(":last").click(function () {
    if ($('.todo2').siblings(":last").find("img").attr('src') == "./assets/check.png") {
        console.log("lourd");
        $('.todo2').attr('id', 'red') && $('.todo2').siblings(":last").html(`<img src="./assets/close.png" style="width: 40px; margin-left: 40%">`);
    } else {
        console.log("lourdeeeee");
        $('.todo2').attr('id', 'green') && $('.todo2').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
    }
})




createCard(day3);
$('.todo3').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo3').append(`${entry}`) && $('.todo3').attr('id', 'green') && $('.todo3').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
})

$('.todo3').siblings(":last").click(function () {
    if ($('.todo3').siblings(":last").find("img").attr('src') == "./assets/check.png") {
        $('.todo3').attr('id', 'red') && $('.todo3').siblings(":last").html(`<img src="./assets/close.png" style="width: 40px; margin-left: 40%">`);
    } else {
        $('.todo3').attr('id', 'green') && $('.todo3').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
    }
})




createCard(day4);
$('.todo4').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo4').append(`${entry}`) && $('.todo4').attr('id', 'green') && $('.todo4').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
})

$('.todo4').siblings(":last").click(function () {
    if ($('.todo4').siblings(":last").find("img").attr('src') == "./assets/check.png") {
        $('.todo4').attr('id', 'red') && $('.todo4').siblings(":last").html(`<img src="./assets/close.png" style="width: 40px; margin-left: 40%">`);
    } else {
        $('.todo4').attr('id', 'green') && $('.todo4').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
    }
})




createCard(day5);
$('.todo5').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo5').append(`${entry}`) && $('.todo5').attr('id', 'green') && $('.todo5').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
})

$('.todo5').siblings(":last").click(function () {
    if ($('.todo5').siblings(":last").find("img").attr('src') == "./assets/check.png") {
        $('.todo5').attr('id', 'red') && $('.todo5').siblings(":last").html(`<img src="./assets/close.png" style="width: 40px; margin-left: 40%">`);
    } else {
        $('.todo5').attr('id', 'green') && $('.todo5').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
    }
})




createCard(day6);
$('.todo6').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo6').append(`${entry}`) && $('.todo6').attr('id', 'green') && $('.todo6').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
})

$('.todo6').siblings(":last").click(function () {
    if ($('.todo6').siblings(":last").find("img").attr('src') == "./assets/check.png") {
        $('.todo6').attr('id', 'red') && $('.todo6').siblings(":last").html(`<img src="./assets/close.png" style="width: 40px; margin-left: 40%">`);
    } else {
        $('.todo6').attr('id', 'green') && $('.todo6').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
    }
})




createCard(day7);
$('.todo7').click(function () {
    let entry = prompt("What do you have to do?");
    $('.todo7').append(`${entry}`) && $('.todo7').attr('id', 'green') && $('.todo7').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
})

$('.todo7').siblings(":last").click(function () {
    if ($('.todo7').siblings(":last").find("img").attr('src') == "./assets/check.png") {
        $('.todo7').attr('id', 'red') && $('.todo7').siblings(":last").html(`<img src="./assets/close.png" style="width: 40px; margin-left: 40%">`);
    } else {
        $('.todo7').attr('id', 'green') && $('.todo7').siblings(":last").html(`<img src="./assets/check.png" style="width: 40px; margin-left: 40%">`);
    }
})



// $(`.todo${todo}`).click(function() {
//     let entry = prompt("What do you have to do?");
//     $(`.todo${todo}`).append(`${entry}`);
// })