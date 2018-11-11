'use strict';

let harsh = angular.module('harsh' , ['ui.router']);

harsh.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl: 'templates/home.html',
            controller: 'PortfolioHome'
    }).state('about',{
            url:'/about',
            templateUrl: 'templates/aboutMe.html',
            controller: 'AboutMe'
    }).state('portfolio',{
            url:'/portfolio',
            templateUrl: 'templates/portfolio.html',
            controller: 'Portfolio'
    }).state('contact',{
            url:'/contact',
            templateUrl: 'templates/contact.html',
            controller: 'Contact'
    })
    
}]);