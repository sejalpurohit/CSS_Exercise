window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for(let i=0; i< tab_switchers.length; i++){
            const tab_switcher = tab_switchers[i];
            const page_id = tab_switcher.dataset.tab;

            tab_switcher.addEventListener('click', ()=>{
                document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
                tab_switcher.parentNode.classList.add('is-active');

                console.log(page_id);

                switchPage(page_id)
            });

    }
}



function switchPage(page_id){
    const current_page = document.querySelector('.pages .page.is-active');

    if(current_page !==null)
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"] `);
        next_page.classList.add('is-active');
        

}