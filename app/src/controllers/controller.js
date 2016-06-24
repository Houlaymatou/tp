app.controller("auteursController", 
	function($scope, $http) {
	$http.get('app/resources/serveur.php', 
	{
		params: {method: 'getAuteurs'}
	}).then(function(result) {
		console.log(result.data);
		$scope.auteurs = result.data;
	})
});

app.controller("auteurController", 
	function($scope, $routeParams, $http) {
	console.log("auteurController", $routeParams.id_auteur);
	$http.get('app/resources/serveur.php', 
	{
		params: {method: 'getAuteurById', id_auteur:$routeParams.id_auteur}
	}).then(function(result) {
		console.log(result.data);
		$scope.auteur = result.data[0];
	})
	
});

app.controller("formController", function($scope, $routeParams, $http, $location) {
	$http.get('app/resources/serveur.php', 
	{
		params: {method: 'getAuteurById', id_auteur:$routeParams.id_auteur}
	}).then(function(result) {
		console.log(result.data);
		$scope.auteur = result.data[0];
		$scope.newNom = result.data[0].nom;
		$scope.newPrenom = result.data[0].prenom;
		$scope.newFonction = result.data[0].fonction;
	})
	$scope.modifAuteur  = function(id_auteur) {
		console.log($scope.newNom,$scope.newPrenom, $scope.newFonction, id_auteur );
		$location.path('/auteurs/'.id_auteur);
	}
})
