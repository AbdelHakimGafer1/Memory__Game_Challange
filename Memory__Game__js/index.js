const emojes=["🐍","🐍","🐢","🐢"
,"🐲","🐲","☀️","☀️","🔥","🔥","☄️","☄️","🌺"
,"🌺","🌬️","🌬️","❤","❤","💖","💖"];
let score=0,mistakes=0;
let Emojes__IN=emojes.sort(()=>(Math.random()>0.5)?2:-1);
console.log(Emojes__IN);

for(let i=0;i<emojes.length;i++){
    let boxEmojes=document.createElement('div');
    boxEmojes.className='box';
    boxEmojes.innerHTML=Emojes__IN[i];

    boxEmojes.onclick=function(){
        this.classList.add('openedBbo');
setTimeout(
    function(){
        if (document.querySelectorAll('.openedBbo').length>1) {
            if (document.querySelectorAll('.openedBbo')[0].innerHTML==document.querySelectorAll('.openedBbo')[1].innerHTML) {

                document.querySelectorAll('.openedBbo')[0].classList.add('boxmatched');
                document.querySelectorAll('.openedBbo')[1].classList.add('boxmatched');
                
                document.querySelectorAll('.openedBbo')[1].classList.remove('openedBbo');
                document.querySelectorAll('.openedBbo')[0].classList.remove('openedBbo');
                document.querySelector('#SpanScore span .one').innerHTML= ++score;

                if ( document.querySelectorAll('.boxmatched').length==emojes.length) {
                    // alert('You Win')
                    document.querySelector('.game').innerHTML=`<img src="Uymz.gif" alt="">`
                    // window.location.reload();
                }          
            }
            else{
                document.querySelectorAll('.openedBbo')[1].classList.remove('openedBbo');
                document.querySelectorAll('.openedBbo')[0].classList.remove('openedBbo');
                document.querySelector('#SpanScore .two').innerHTML= ++mistakes;
                if (mistakes==30) {
                  
          setTimeout(() => {
            document.querySelector('.game').innerHTML=` <img class='giphy' src="giphy.gif" alt="">`
          }, 1000);
                    confirm(' Are you Nope ?? ');
                }
            }
            }
            } 
    ,500)
    }
    
        document.querySelector('.game').appendChild(boxEmojes);
}

