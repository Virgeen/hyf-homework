function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.classList.add(`gradient-${getRandomInt(1,4)}`);

//I tried it is not working
var modal = document.querySelector(".accept");
var trigger = document.querySelector(".reject");
var myUl = document.querySelector(".list");

function animateLiOut(animate) {
    return new Promise((resolve, reject) => {
        if (animate.target.className==="accept") {
            resolve(myUl.childreen[n].style.transform="translateX(1000px) scale(2)");
        }
        else if(animate.target.className==="reject") {
            resolve(myUl.childreen[n].style.transform="translateX(-1000px) scale(2)");
        }else{
            reject('it is not wanted');
        }
    });

   
    
}
animateLiOut()
.then((animate) => {
    myUl.children[n+1].style.transform="scale(1)";
    ulContainer.children[n+1].style.opacity="1";  
    n++;
    console.log(animate);
})