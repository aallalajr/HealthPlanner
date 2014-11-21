(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        
        $routeProvider
            .otherwise({ redirectTo: '/' });
    }
    
    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    title: 'mealplan',
                    templateUrl: 'app/mealplan/mealplan.html',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-lock"></i> Meal Plans'
                    }
                }
            }, {
                url: '/recipebox',
                config: {
                    templateUrl: 'app/recipes/recipebox.html',
                    title: 'recipebox',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Recipe Box'
                    }
                }
            },  {
                url: '/foodjournal',
                config: {
                    title: 'foodjournal',
                    templateUrl: 'app/food/foodjournal.html',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Food Journal'
                    }
                }
            }, {
                url: '/exercisejournal',
                config: {
                    title: 'exercisejournal',
                    templateUrl: 'app/exercise/exercisejournal.html',
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-lock"></i> Exercise Journal'
                    }
                }
            }, {
                url: '/groceries',
                config: {
                    title: 'groceries',
                    templateUrl: 'app/groceries/groceries.html',
                    settings: {
                        nav: 5,
                        content: '<i class="fa fa-lock"></i> Groceries'
                    }
                }
            }, {
                url: '/medicationdiary',
                config: {
                    title: 'medicationdiary',
                    templateUrl: 'app/medication/medicationdiary.html',
                    settings: {
                        nav: 6,
                        content: '<i class="fa fa-lock"></i> Medication Journal'
                    }
                }
            }, {
                url: '/supplementdiary',
                config: {
                    title: 'supplementdiary',
                    templateUrl: 'app/supplements/supplementdiary.html',
                    settings: {
                        nav: 6,
                        content: '<i class="fa fa-lock"></i> Supplements Journal'
                    }
                }
            }, {
                url: '/reports',
                config: {
                    title: 'reports',
                    templateUrl: 'app/reports/reports.html',
                    settings: {
                        nav: 6,
                        content: '<i class="fa fa-lock"></i> Reports'
                    }
                }
            }, {
                url: '/food',
                config: {
                    title: 'food',
                    templateUrl: 'app/food/food.html',
                    settings: {
                        nav: 7,
                        content: '<i class="fa fa-lock"></i> Food'
                    }
                }
            }, {
                url: '/recipe/:id',
                config: {
                    title: 'recipe',
                    templateUrl: 'app/recipes/recipe.html',
                    settings: { }
                }            
            }
        ]
    }
})();