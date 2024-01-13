class IndexController extends Controller {
    load() {
        this.data = {
            tabs: [
                {
                    "title": "Home",
                    "id": "home",
                    "url": "https://br.ninemanga.com/"
                },
                {
                    "title": "Latest Release",
                    "id": "last_release",
                    "url": "https://br.ninemanga.com/list/New-Update/"
                },
                {
                    "title": "Manga Directory",
                    "id": "manga_directory",
                    "url": "https://br.ninemanga.com/category/index_{1}.html"
                },
                {
                    "title": "Hot Manga",
                    "id": "hot_manga",
                    "url": "https://br.ninemanga.com/list/Hot-Book/"
                },
                {
                    "title": "New Manga",
                    "id": "new_manga",
                    "url": "https://br.ninemanga.com/list/New-Book/"
                }, 
            ]
        };
    }
}

module.exports = IndexController;
