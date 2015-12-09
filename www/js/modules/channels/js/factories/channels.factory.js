(function(){
	"use strict";

	angular
		.module('vioSphere.channels')
		.factory('channelsFactory', [
			'$q',
			'$http',
			function($q, $http){
        var locationConfigs = {
          origin:'http://peletest.vidnt.com',
          epg:{
            method:'GET',
            pathname: '/nav/to/playingnow/',
            search: "?sid=82126"
          }
        };

        function getEpgList(){
          var deferred = $q.defer();
          $http({
            method: locationConfigs.epg.method,
            url: locationConfigs.origin + locationConfigs.epg.pathname + locationConfigs.epg.search
          }).then(function(response) {
            deferred.resolve(response.data.items);
          }, deferred.reject);

          return deferred.promise;
        }

				return {
          getEpgList: getEpgList
				};
			}
		])
})();
