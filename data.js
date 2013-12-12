/**
 * Created with IntelliJ IDEA.
 * User: Nikhil
 * Date: 12/9/13
 * Time: 3:48 PM
 * To change this template use File | Settings | File Templates.
 */

var demoApp = angular.module('AngularJs',['ngRoute','ui.bootstrap']);

demoApp.controller('SimpleController',function($scope){
    $scope.customers=[
        {name:"Nikhil", rollno:"89" },
        {name:"Mani", rollno:"65"}
    ];
}
);

demoApp.controller('CarouselCtrl',function($scope){
    $scope.myInterval =3000 ;
    $scope.slides=[
        {image:'img/single_1.jpg', caption:'EVENT 1'},
        {image:'img/single_2.jpg', caption:'EVENT 2'},

       {image:'img/1.JPG', caption:'car 1'},
       {image:'img/2.JPG', caption:'car 2'},
       {image:'img/3.JPG', caption:'car 3'}

    ];
});

demoApp.controller('CarouselDemoCtrl', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/200',
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i<4; i++) {
        $scope.addSlide();
    }
})

demoApp.config(function($routeProvider){

    //$locationProvider.html5Mode(true);
    $routeProvider
        .when('/',
        {
            //controller:'SimpleController',
            templateUrl:'pages/view1.html'
        })
        .when('/view2',
        {
            templateUrl:'pages/view2.html'

        }).
        otherwise({redirectTo:'/'});

});
