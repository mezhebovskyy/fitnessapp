app.config(function($stateProvider) {
    var dashboard = {
        name: 'dashboard',
        url: '/',
        templateUrl: 'src/pages/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
    };

    var myActivities = {
        name: 'myActivities',
        url: '/myactivities',
        templateUrl: 'src/pages/myActivities/myActivities.html',
        controller: 'MyActivitiesCtrl'
    };

    var allActivities = {
        name: 'allActivities',
        url: '/allActivities',
        templateUrl: 'src/pages/allActivities/allActivities.html',
        controller: 'AllActivitiesCtrl'
    };

    $stateProvider.state(dashboard);
    $stateProvider.state(myActivities);
    $stateProvider.state(allActivities);
});