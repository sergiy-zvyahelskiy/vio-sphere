(function(){
	"use strict";

	angular
		.module('vioSphere.channels')
		.factory('channelsFactory', [
			'$q',
			'$http',
			function($q, $http){

        function getList(){
          return [{},{},{},{}]
        }

				return {
          getList: getList
				};
			}
		])
})();
