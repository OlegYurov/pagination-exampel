export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        
    const options = {
        headers: {
            Authorization: 'b18ae68107ef4b759ec335d1e1ae11bf',
        },
    };
    const url =
        `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
    
    return fetch(url, options)
        .then(response => response.json())
        .then(({articles}) => {
            this.page += 1;
            return articles
        });

    }
    
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }; 

    set query(newQuery) {
        this.searchQuery = newQuery;
    };

}