// 'use strict';
// angular.module('app').directive('appHead',[function () {
//   return {
//     //Reutrn a atribute when call a dircetive.
//     restrict:'A',
//     replace:true,
//     templateUrl:'view/template/head.html'
//   }
// }])
'use strict';
angular.module('app').directive('app-head', [ function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'view/template/head.html'
  };
}]);