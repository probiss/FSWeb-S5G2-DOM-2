import './less/index.less'

//Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});

// Kodlar buraya gelecek!
//mouseover-mouseout
const baslik = document.querySelector("h1");

baslik.addEventListener("mouseover", changeText);
function changeText(e) {
    baslik.textContent = "E hadi geç kalıyoruz"
}

baslik.addEventListener('mouseout', oldText);
function oldText(e) {
    baslik.textContent = "Eğlence Otobüsü";
}
//click-dblClick
const images = document.querySelectorAll("img");

images.forEach( (img) => {
    img.addEventListener('click', (event)=> {
        img.style.filter = "grayscale(100%)";
    })
})

images.forEach( (img) => {
    img.addEventListener('dblclick', (event)=> {
        img.style.filter = "unset";
    })
})
//wheel
const welcome = document.querySelector("header h2");

welcome.addEventListener('wheel', (event)=> {
    welcome.style.fontSize = "4rem";
    welcome.style.margin = "auto";
})
//scroll
document.addEventListener('scroll', function () {
    populate();
});

function populate( {
	aga = document.scrollingElement,
	minDistanceToBottom = 50,
}  = {}
) {
    let leftToBottom = getDistanceToBottom(aga);

    while (leftToBottom < minDistanceToBottom) {
	let kacma = document.createElement('div');

	kacma.innerHTML = "BİR YERE KAÇAMAZSIN,OTOBÜSE GERİ DÖN !!!";
	aga.append(kacma);

	leftToBottom = getDistanceToBottom(aga);
    }
}
function getDistanceToBottom(aga) {
    return aga.scrollHeight - aga.clientHeight - aga.scrollTop 
    ;}

//load
window.addEventListener('load', () => {
alert("HARRY POTTER DOBBY'İ ÖZGÜRLÜĞÜNE KAVUŞTURDU...")
})

//keydown
const body = document.querySelector("body") ;

body.addEventListener("keydown", (e) => {
    if(e.keyCode == 40 ) {
        const colors = ["yellow","red","yellow","red"];
        function cimbom(number) {
            return Math.round(Math.random() * number);
        }
        body.style.backgroundColor = colors[cimbom(colors.length)];
    }
})
//resize
window.addEventListener("resize", myResize);

function myResize(e) {
    alert("Eminimki beni unutmayacaksın :))");
}
//cut
window.addEventListener("cut", myCut);
function myCut(e){
    alert("Arkadaşlarınla paylaşmalısın tabiki :D");}

//copy
window.addEventListener("copy", myCopy);
function myCopy(e){
    alert("Taklitler asıllarını yaşatır bunu bi kenara yaz koçum B-)");}


const button = document.querySelectorAll(".btn");

button[0].addEventListener("click", (e) => {
    alert("Sen... (devamı yan butonda)");
});
button[1].addEventListener("click", (e) => {
    alert("gelme (devamı yan butonda)");
});
button[2].addEventListener("click", (e) => {
    alert("Ulan Ayı! (sorry bro :D)");
});
