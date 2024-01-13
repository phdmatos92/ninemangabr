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
                    "title": "Últimas Atualizações",
                    "id": "last_release",
                    "url": "https://br.ninemanga.com/list/New-Update/"
                },
            ]
        };
    }
}

module.exports = IndexController;
