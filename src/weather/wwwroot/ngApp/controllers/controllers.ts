namespace weather.Controllers {

    const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=";
    const apiKey = "&appid=57ace6926428cf6c2373c1de010ca4d0";

    export class HomeController {

        public search;
        public forecast;

        fetch() {
            if (this.search) {
                console.log('searching.......');
                this.$http.get(apiURL + this.search + apiKey)
                    .then((results) => {
                        this.forecast = results.data;
                    });
            }
        }
        constructor(private $http: ng.IHttpService) { }
    }



    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
