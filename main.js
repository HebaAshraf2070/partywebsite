

$(".setting").on("click", function () {
    $(".sidedisappear").animate({ width: "toggle" }, 1000);

});

$(".closebtn").on("click", function () {
    $(".sidedisappear").animate({ width: "toggle" }, 1000);
})

// 888888888888888888888888888888888888888888888888888888888888888888



$(".singer").on("click", function (e) {
    $(e.target).next().animate({ height: "toggle" }, 500);
    $(e.target).next().removeClass("d-none");

});

// 888888888888888888888888888888888888888888888888888888888888888888

$(".countdown").html(` <div class="row fs-3 text-white">
            <div class=" changecolor col col-12 col-md-3">
            <div></div>
        </div>
        <div class="changecolor col col-12 col-md-3">
            <div></div>
        </div>
        <div class="changecolor col col-12 col-md-3">
            <div></div>
        </div>
        <div class="changecolor col col-12 col-md-3">
            <div></div>
        </div>
    </div > `);

$(".countdown").css("cssText", `
                    display:flex;
                    flex-flow:row nowrap;
                    justify-content:center;
                    align-items:center;
                    background-image: url(pic/new-years-2123-x-1413-picture-q2udhplj6v1ikfvm.jpg);
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center center;
                    `)

$(".countdown").find(".col").css("cssText", `
                    width:10rem;
                    height:4rem;
                    background-color:orangered;
                    color:black;
                    padding:10px;
                    margin:10px;
                    display:flex;
                    flex-flow:row nowrap;
                    justify-content:center;
                    align-items:center;



`)

// $(".countdown .col").css({
//     width: "10rem",
//     height: "4rem",
//     backgroundColor: "orangered",
//     color: "black",
//     padding: "10px",
//     margin: "10px",
//     display: "flex",
//     flexFlow: "row nowrap",
//     justifyContent: "center",
//     alignItems: "center",

// });
// 88888888888888888888888888888888888888888
let rdays = 0;
let dayinterval = setInterval(function () {
    let daydate = new Date();
    // console.log(daydate);
    let cdate = daydate.getUTCDate();
    rdays = (365 - cdate);
    displayday();
})

function displayday() {
    let bag = "";
    bag += `- ${rdays} D`;
    document.querySelector(".col:first-child").innerHTML = bag;
}
// 888888888888888888888888888
let rhours = 0;

let hourinterval = setInterval(function () {
    let daydate = new Date();
    let chour = daydate.getHours();
    rhours = 24 - chour;
    // console.log(rhours);
    displayhour();
})

function displayhour() {
    let bag = "";
    bag += `${rhours} hr.`;
    document.querySelector(".col:nth-child(2)").innerHTML = bag;
};

// 888888888888888888888888888888888
let rmin = 0;
let mininterval = setInterval(function () {
    let daydate = new Date();
    let cmin = daydate.getMinutes();
    rmin = 60 - cmin;
    displaymin();
})

function displaymin() {
    let bag = "";
    bag += `${rmin} min.`;
    document.querySelector(".col:nth-child(3)").innerHTML = bag;
}

// 88888888888888888888888888888888888
let rsec = 0;

let secinterval = setInterval(function () {
    let daydate = new Date();
    let csec = daydate.getSeconds();
    rsec = 60 - csec;
    displaysec();
})

function displaysec() {
    let bag = "";
    bag += `${rsec} sec.`;
    document.querySelector(".col:nth-child(4)").innerHTML = bag;
}

// 8888888888888888888888888888888888888888888888888888888888888888888888888888
let characnum = document.querySelector(".characnum");
let errormessage = document.querySelector(".error");
let textmessage = document.querySelector(".textmessage");
let letterinterval = setInterval(function () {
    let messagevalue = textmessage.value;
    let xx = messagevalue.length;
    let result = (100 - xx);
    $(".characnum").html(` <p><span class="fs-3 itemcolor numcount">${result}</span> charachter remainig</p>`);
    if (result >= 0) {

        characnum.classList.remove("d-none");
        errormessage.classList.add("d-none");

    } else {
        clearInterval();
        characnum.classList.add("d-none");
        errormessage.classList.remove("d-none");
    }

})

// 888888888888888888888888888888888888888888888888888888
let sectionscroll = $("#details").offset().top;
console.log(sectionscroll);

$(window).on("scroll", function () {
    let windowscroll = $(window).scrollTop();
    if (windowscroll > sectionscroll - 70) {
        $(".head").css("backgroundColor", "black");
    } else {
        $(".head").css("backgroundColor", " rgba(0, 0, 0, 0.5)");
    }
});

// 888888888888888888888888888888888888888888888888888888888888888


$("li[href^='#']").on("click", function (e) {
    let clikcedsection = e.target.getAttribute("href");
    let scrollto = $(clikcedsection).offset().top;
    $("window, html").animate({ scrollTop: scrollto }, 1000);
});
// 888888888888888888888888888888888888888888888888888888888888888888

let boxcolor = $(".box");

boxcolor.eq(0).css("backgroundColor", "#fb1b44");
boxcolor.eq(1).css("backgroundColor", "#1af61e");
boxcolor.eq(2).css("backgroundColor", "#0059ffcf");
boxcolor.eq(3).css("backgroundColor", "orangered");



boxcolor.on("click", function (e) {
    let boxcolor = $(e.target).css("backgroundColor");
    $(".changecolor").css({ backgroundColor: boxcolor })
    $(".itemcolor").css({ color: boxcolor })

});

$(".seticon").on("click", function () {
    $(".insidesetting").animate({ width: "toggle" }, 1000);

});
// 888888888888888888888888888888888888888888888888888888888888888888



