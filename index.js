class IndexController extends Controller {
    load() {
        this.data = {
            tabs: [
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
