(function(){
  "use strict";

  angular
    .module('vioSphere.channels')
    .controller('channelsCtrl', [
      '$scope',
      'channelsFactory',
      function($scope, channels){
        channels.getEpgList().then(function(list){
          $scope.channelList = list;
          console.log(list);
        });
      }
    ]);
})();
