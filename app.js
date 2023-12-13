let firstDiv=document.querySelector('.first');
let plusButton=document.querySelector('#plus');
let negativButton=document.querySelector('#negativ');
let plus1Button=document.querySelector('#plus1');
let negativ1Button=document.querySelector('#negativ1');
let plus2Button=document.querySelector('#plus2');
let negativ2Button=document.querySelector('#negativ2');
let plus3Button=document.querySelector('#plus3');
let negativ3Button=document.querySelector('#negativ3');

plusButton.addEventListener('click',()=>{
    let naturalWidth=parseInt(getComputedStyle(firstDiv).width);
    firstDiv.style.width=naturalWidth + 5 + "px"
})
negativButton.addEventListener('click',()=>{
    let naturalWidth=parseInt(getComputedStyle(firstDiv).width);
    firstDiv.style.width=naturalWidth - 5 + "px"
})
plus1Button.addEventListener('click',()=>{
    let naturalHeight=parseInt(getComputedStyle(firstDiv).height);
    firstDiv.style.height=naturalHeight + 5 + "px"
})
negativ1Button.addEventListener('click',()=>{
    let naturalHeight=parseInt(getComputedStyle(firstDiv).height);
    firstDiv.style.height=naturalHeight - 5 + "px"
})
plus2Button.addEventListener('click',()=>{
    let naturalFontSize=parseInt(getComputedStyle(firstDiv).fontSize);
    firstDiv.style.fontSize=naturalFontSize + 5 + "px"
})
negativ2Button.addEventListener('click',()=>{
    let naturalFontSize=parseInt(getComputedStyle(firstDiv).fontSize);
    firstDiv.style.fontSize=naturalFontSize - 5 + "px"
})
plus3Button.addEventListener('click',()=>{
    let naturalBorderRadius=parseInt(getComputedStyle(firstDiv).borderRadius);
    firstDiv.style.borderRadius=naturalBorderRadius + 5 + "px"
})
negativ3Button.addEventListener('click',()=>{
    let naturalBorderRadius=parseInt(getComputedStyle(firstDiv).borderRadius);
    firstDiv.style.borderRadius=naturalBorderRadius - 2 + "px"
})
document.getElementById("color1").addEventListener("input", function() {
    document.getElementById("first").style.color = this.value;
  });
  document.getElementById("color2").addEventListener("input", function() {
    document.getElementById("first").style.backgroundColor = this.value;
  });