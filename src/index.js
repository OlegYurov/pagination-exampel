import './style.css'
import NewsApiService from './js/components/news-servise'
import  articlesTpl from './templates/articles.hbs'

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};

const newApiService = new NewsApiService();



refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore)



function onSearch(e) {
    e.preventDefault();

    
newApiService.query = e.currentTarget.elements.query.value;
newApiService.resetPage()
    newApiService.fetchArticles().then(articles => {
        clearArticlesContainer();
        appendArticlesMurkup(articles)
    });
    
}


function onLoadMore() {
           newApiService.fetchArticles().then(appendArticlesMurkup)
}

function appendArticlesMurkup(articles) {
    refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl
        (articles));
}

function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = '';
}