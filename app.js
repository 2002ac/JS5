let cssDiv=document.querySelector('.css');
let artirButton=document.querySelector('#artir');
let azaltButton=document.querySelector('#azalt');
let artir1Button=document.querySelector('#artir1');
let azalt1Button=document.querySelector('#azalt1');
let artir2Button=document.querySelector('#artir2');
let azalt2Button=document.querySelector('#azalt2');
let artir3Button=document.querySelector('#artir3');
let azalt3Button=document.querySelector('#azalt3');

artirButton.addEventListener('click',()=>{
    let naturalWidth=parseInt(getComputedStyle(cssDiv).width);
    cssDiv.style.width=naturalWidth + 5 + "px"
})
artir1Button.addEventListener('click',()=>{
    let naturalHeight=parseInt(getComputedStyle(cssDiv).height);
    cssDiv.style.height=naturalHeight + 5 + "px"
})
azalt1Button.addEventListener('click',()=>{
    let naturalHeight=parseInt(getComputedStyle(cssDiv).height);
    cssDiv.style.height=naturalHeight - 5 + "px"
})
artir2Button.addEventListener('click',()=>{
    let naturalFontSize=parseInt(getComputedStyle(cssDiv).fontSize);
    cssDiv.style.fontSize=naturalFontSize + 5 + "px"
})
azalt2Button.addEventListener('click',()=>{
    let naturalFontSize=parseInt(getComputedStyle(cssDiv).fontSize);
    cssDiv.style.fontSize=naturalFontSize - 5 + "px"
})
artir3Button.addEventListener('click',()=>{
    let naturalBorderRadius=parseInt(getComputedStyle(cssDiv).borderRadius);
    cssDiv.style.borderRadius=naturalBorderRadius + 5 + "px"
})
azalt3Button.addEventListener('click',()=>{
    let naturalBorderRadius=parseInt(getComputedStyle(cssDiv).borderRadius);
    cssDiv.style.borderRadius=naturalBorderRadius - 2 + "px"
})
document.getElementById("color1").addEventListener("input", function() {
    document.getElementById("css").style.color = this.value;
  });
  document.getElementById("color2").addEventListener("input", function() {
    document.getElementById("css").style.backgroundColor = this.value;
  });

  console.log(css)