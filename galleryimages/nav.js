var imageArray=
["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
var i=0;
function header()
{
    if(i>=7)
    {
        i=0;
    }
    document.getElementById("header").style.backgroundImage=`url(./${imageArray[i]})`
    i++;
    var t=setTimeout(header,2000);
}
function right()
{
    i++;
    if(i>imageArray.length-1)
    {
        i=0
    document.getElementById("header").style.backgroundImage=`url(./${imageArray[i]})`
    }
    else{
    document.getElementById("header").style.backgroundImage=`url(./${imageArray[i]})`   
    }
}
function left()
{
    i--;
    if(i<0)
    {
        i=image.length-1
    document.getElementById("header").style.backgroundImage=`url(../assets/images/${imagesArray[i]})`
}
    else{
     document.getElementById("header").style.backgroundImage=`url(../assets/images/${imagesArray[i]}`  
    }
}
var img=document.getElementsByClassName("header")
console.log(img)
for(i=0;i<img.length;i++)
{
    img[i].src=./${image{i}.jpg
    function close()
    {
       document.getElementById("").setAttribute("style","dispay:none")
}
 }
 function open(img)
    console.log(img)
    document.getElementById("").setAttribute("src",`./${Image[i].jpg}`)
    document.getElementById("").removeAttribute("style")
}
 
