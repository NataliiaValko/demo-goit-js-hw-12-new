import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api';
import icon from './img/icon.svg';

import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  createGallery,
  hideLoader,
  scrollWindow,
  showLoader,
  toggleLoadMoreBtn,
  updateGallery,
} from './js/render-functions';

const formEl = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;

async function handleSubmit(event) {
  event.preventDefault();

  query = event.target.elements.message.value.trim();
  event.target.reset();

  if (query === '') {
    return;
  }

  showLoader();
  toggleLoadMoreBtn({});
  clearGallery();
  page = 1;

  try {
    const { hits, totalHits } = await getImagesByQuery({ query, page });

    if (hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        maxWidth: '432px',
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
        iconColor: '#FAFAFB',
        iconUrl: icon,
        titleSize: '16px',
        titleLineHeight: '24px',
        progressBarColor: '#B51B1B',
      });
      return;
    }

    createGallery(hits);
    toggleLoadMoreBtn({ totalHits, page });
    if (totalHits <= page * 15) {
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
        maxWidth: '432px',
        titleSize: '16px',
        titleLineHeight: '24px',
      });
    }
  } catch (err) {
    iziToast.error({
      position: 'topRight',
      message: 'Error!!!',
      maxWidth: '432px',
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      iconColor: '#FAFAFB',
      iconUrl: icon,
      titleSize: '16px',
      titleLineHeight: '24px',
      progressBarColor: '#B51B1B',
    });
  } finally {
    hideLoader();
  }
}

async function handleLoadMore() {
  page += 1;
  showLoader();
  toggleLoadMoreBtn({});
  try {
    const { hits, totalHits } = await getImagesByQuery({ query, page });

    if (hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        message: "Sorry, there are no images matching your search query. Please, try again!",
        maxWidth: '432px',
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
        iconColor: '#FAFAFB',
        iconUrl: icon,
        titleSize: '16px',
        titleLineHeight: '24px',
        progressBarColor: '#B51B1B',
      });
      toggleLoadMoreBtn({ totalHits, page });
      return;
    }

    updateGallery(hits);
    scrollWindow();
    toggleLoadMoreBtn({ totalHits, page });
    if (totalHits <= page * 15) {
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
        maxWidth: '432px',
        titleSize: '16px',
        titleLineHeight: '24px',
      });
    }
  } catch (err) {
    iziToast.error({
      position: 'topRight',
      message: err.message,
      maxWidth: '432px',
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      iconColor: '#FAFAFB',
      iconUrl: icon,
      titleSize: '16px',
      titleLineHeight: '24px',
      progressBarColor: '#B51B1B',
    });
  } finally {
    hideLoader();
  }
}

formEl.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);
