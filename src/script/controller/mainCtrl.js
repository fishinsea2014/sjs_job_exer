// 'use strict';
// angular.module('app').controller('mainCtrl',['$scope',function ($scope) {
//
// }])

'use strict';
angular.module('app').controller('mainCtrl', ['$http', '$scope', function($http, $scope){
  $http.get('/data/db.json').success(function(resp){
    $scope.list = resp;
  });
}]);
