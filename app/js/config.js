'use strict';
const app = angular.module('sadApp', ['ngAnimate', 'ngAria', 'ngSanitize', 'ngMaterial', 'ui.router', 'lfNgMdFileInput']);

app.constant('baseUrl', 'http://localhost:8080');

app.config(function ($stateProvider, $locationProvider, $urlRouterProvider, $mdThemingProvider) {

    // Setando Temas
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('orange');

    // Temas para toast
    $mdThemingProvider.theme("orange-toast");
    $mdThemingProvider.theme("blue-toast");
    $mdThemingProvider.theme("grey-toast");

    $stateProvider
        .state("sad-aluno", {
            abstract: true,
            views: {
                main: {
                    templateUrl: "view/main-content.html",
                    controller: "MainController as mainCtrl"
                }
            }
        })

        .state("sad-admin", {
            abstract: true,
            url: '/admin',
            views: {
                main: {
                    templateUrl: "view/admin-content.html",
                    controller: "AdminController as adminCtrl"
                }
            }
        })

        .state("sad-admin.cadastra-turmas", {
            url: "/cadastrar-turmas",
            views: {
                content: {
                    templateUrl: 'view/cadastra-turmas.html',
                    controller: 'CadastraTurmasController as cadastraTurmasCtrl'
                }
            }
        })

        .state("sad-admin.criar-questionario", {
            url: "/criar-questionario",
            views: {
                content: {
                    templateUrl: 'view/criar-questionario.html',
                    controller: 'CriarQuestionarioController as criarQuestionarioCtrl'
                }
            }
        })

        .state("sad-admin.aplicar-questionario", {
            url: "/aplicar-questionario",
            views: {
                content: {
                    templateUrl: 'view/aplicar-questionario.html',
                    controller: 'AplicarQuestionarioController as aplicarQuestionarioCtrl'
                }
            }
        })

        .state("sad-admin.home", {
            url: "/home",
            views: {
                content: {
                    templateUrl: 'view/dashboard-admin.html'
                }
            }
        })

        .state("sad-aluno.home", {
            url: "/home",
            views: {
                content: {
                    templateUrl: 'view/home.html'
                }
            }
        })
        .state("sad-aluno.form", {
            url: "/form/:id/:curso/:token",
            views: {
                content: {
                    templateUrl: 'view/form.html',
                    controller: 'FormController as formCtrl'
                }
            },
            resolve: {
                quiz: function (AnswerService) {
                    return AnswerService.getQuiz();
                }
            }
        });

    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');

    app.run(['$rootScope', '$state', function ($rootScope, $state) {

        $state.defaultErrorHandler(function (error) {
            console.log(error);
        })
    }]);

});
