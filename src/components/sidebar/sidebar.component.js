app.component("fSidebar", {
    controller: function mySidebarController(){
        var ctrl = this;
        ctrl.menuItems = [
            {
                title: 'Dashboard',
                icon: 'fa-dashboard',
                location: '/dashboard',
                uiSref: 'dashboard'
            },
            {
                title: 'My activities',
                icon: 'fa-circle',
                location: '/myActivities',
                uiSref: 'myActivities'
            },
            {
                title: 'All activities',
                icon: 'fa-folder-open',
                location: '/allActivities',
                uiSref: 'allActivities'
            }
        ];
    },
    templateUrl: 'src/components/sidebar/sidebar.html'
});