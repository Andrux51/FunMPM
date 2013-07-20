function MediaListCtrl($scope) {
	$scope.media = [
		{
			"index":0,
			"filename":"kalimba.mp3",
			"title":"Kalimba",
			"artist":"Microsoft",
			"album":"Windows 7 Sample Music",
			"active":true
		},
		{
			"index":1,
			"filename":"sleepaway.mp3",
			"title":"Sleep Away",
			"artist":"Microsoft",
			"album":"Windows 7 Sample Music",
			"active":false
		},
		{
			"index":2,
			"filename":"maid_with_the_flaxen_hair.mp3",
			"title":"Maid With the Flaxen Hair",
			"artist":"Microsoft",
			"album":"Windows 7 Sample Music",
			"active":false
		}
	];
	$scope.add = function(f,t,ar,al) {
		var ind = $scope.media.length;
		$scope.media.push({"index":ind,"filename":f,"title":t,"artist":ar,"album":al,"active":false});
	}
	$scope.next = function() {
		var current = findElement($scope.media,"active",true);
		current.active = false;
		var next = $scope.media[(current.index < $scope.media.length-1) ? current.index+1 : 0];
		next.active = true;
	}
	$scope.prev = function() {
		var current = findElement($scope.media,"active",true);
		current.active = false;
		var next = $scope.media[(current.index > 0) ? current.index-1 : $scope.media.length-1];
		next.active = true;
	}
	$scope.jump = function(ind) {
		var current = findElement($scope.media,"active",true);
		current.active = false;
		var next = $scope.media[ind];
		next.active = true;
	}
}

function findElement(arr, propName, propValue) {
	for (var i=0; i < arr.length; i++)
	{
		if (arr[i][propName] == propValue)
		{
			return arr[i];
		}
	}
}