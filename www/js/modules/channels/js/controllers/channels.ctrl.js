(function(){
  "use strict";

  angular
    .module('vioSphere.channels')
    .controller('channelsCtrl', [
      '$scope',
      'channelsFactory',
      function($scope, channels){
        $scope.channelList = channels.getList();
      }
    ]);
})();
