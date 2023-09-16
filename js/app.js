const boxesL = document.querySelectorAll('.boxL');
const boxesR = document.querySelectorAll('.boxR');



window.addEventListener('scroll', checkbox);

function checkbox(){
    const triggerBottom = window.innerHeight / 5 * 4;

    function boxesShow(event){
        event.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
    
            if(boxTop < triggerBottom){
                box.classList.add('show');
            }else{
                box.classList.remove('show');
            }
        });
    }

    boxesShow(boxesL);
    boxesShow(boxesR);
}