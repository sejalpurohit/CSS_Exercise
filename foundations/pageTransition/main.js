window.onload = () => {
  const transition_el = document.querySelector(".transition");

  const anchors = document.querySelector("a");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);


  for(let i=0;i<anchors.clientHeight; i++){
    const anchor =anchors[i];

    anchor.addEventListner('click', e => {
        e.preventDefault();
        let target = e.target.href;

        transition_el.classList.add('is-active');

        setTimeout(()=>{
            window.location.href = target;

        },500); 
    });

  }
};
