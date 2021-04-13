//variables
let villaProgress = 0;

function initVilla() {

    let len = document.getElementById('villa').length;
    if(len === 0)
    {
        return;
    }

    let villaSection = document.querySelector('section.villa');
    let villaArea = document.querySelector('section.villa .area');
    let villaBlock = document.querySelectorAll('section.villa .block');
    let villaPicture = document.querySelector('section.villa article picture');

    let viewportHeight = window.innerHeight;
    let header = document.querySelector('header');
    let headerHeight = header.offsetHeight;
    let villaTop = Math.floor(villaSection.offsetTop);
    console.log('Villa Top:' + villaTop);
    let villaHeight = villaSection.offsetHeight;
    let villaBottom = villaTop + villaHeight;

    let villaActive = villaBlock[0].getAttribute('id');

    window.onscroll = function(){

        scrollButton = document.getElementById("scrollBtn");

        function scrollFunction() {
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                scrollButton.style.display = "block";
            }
            else {
                scrollButton.style.display = "none";
            }
        }
    
        window.onscroll = function(){
            scrollFunction()
          };

        let scrollTop = window.scrollY;
        villaTop = Math.floor(villaSection.offsetTop);
        villaHeight = villaSection.offsetHeight;
        villaBottom = villaTop + villaHeight;

        if(scrollTop >= villaBottom - viewportHeight){
            //user scrolled passed bottom
            console.log('if');
            //add bottom class
            villaSection.classList.add('bottom');
            villaSection.classList.remove('top', 'active');

            //set active block to last child
            villaActive = villaBlock[3].getAttribute('id');
            villaProgress = 1;
        }
        else if(scrollTop + headerHeight >= villaTop){
            villaSection.classList.add('active');
            villaSection.classList.remove('top', 'bottom');

            for(let i = 0; i < villaBlock.length; i++){
                let func = function() {
                    let top = villaBlock[i].offsetTop;

                    if((scrollTop + viewportHeight) / 2 >= top){
                        villaActive = villaBlock[i].getAttribute('id');
                    }
                };
                func();
            }
        }
        else{
            //user is above horizontal scroll section
            villaSection.classList.add('top');
            villaSection.classList.remove('bottom', 'active');
            villaActive = villaBlock[0].getAttribute('id');
            villaProgress = 0;
        }

        villaProgress = (scrollTop + headerHeight - villaTop) / (villaBottom - villaTop - viewportHeight + headerHeight);
        villaPicture.style.setProperty('--villaProgress', villaProgress);
        villaArea.classList.remove('kitchen', 'room', 'bath', 'outside');
        villaArea.classList.add(villaActive);
        console.log(villaActive);
    
    };
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//window.addEventListener('scroll', () => {
//    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
 // }, false);

initVilla();