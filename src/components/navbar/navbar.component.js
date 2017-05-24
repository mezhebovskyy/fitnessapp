app.component("fNavbar", {
    controller: function myNavbarController(){
        var ctrl = this;
        ctrl.votvam = {title: 'Fitness App', location: 'dashboard'};
    },
    templateUrl: 'src/components/navbar/navbar.html'
});