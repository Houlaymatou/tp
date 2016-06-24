<!DOCTYPE html>
<html >

<head>
    <meta charset="utf-8">
    <title>AngularJS</title>
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.css">
    </style>
</head>

<body ng-app="MyApp">

    
	<ng-view></ng-view>
	
    <script src="bower_components/angular/angular.min.js"></script>
    <script src="bower_components/angular-route/angular-route.min.js"></script>
    <script type="text/javascript" src="bower_components/angular-messages/angular-messages.min.js"></script>
    <script type="text/javascript" src="app/config/app.js"></script>
    <script type="text/javascript" src="app/src/controllers/controller.js"></script>

</body>

</html>