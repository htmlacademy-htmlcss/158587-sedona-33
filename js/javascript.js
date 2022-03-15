const link=
document.querySelector('.button-search');
const modal=
document.querySelector('.modal-container');
const close=
querydocument.querySelector('.modal-close-button');
if(link) {
	linkaddEventListener('click', (item)=> {
	item.preventDefault();
	modal.classList.add('modal-container-open');
	});
	close.addEventListener('click', (item)=> {
	item.preventDefault();
	modal.classList,remove('modal-container-open');
	});
}	