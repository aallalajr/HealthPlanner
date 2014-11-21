(function () {
    'use strict';

    var controllerId = 'groceries';

    // TODO: replace app with your module name
    angular.module('app').controller(controllerId, ['common', 'datacontext', groceries]);

    function groceries(common, datacontext) {
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        vm.activate = activate;
        vm.groceries = [];
        vm.title = 'Grocery List';
        activate();

        function activate() {
            common.activateController([getGroceries()], controllerId).then(function () {
                log('Activated Groceries View');
            });
        }

        function getGroceries() {
            return datacontext.getGroceries().then(function (data) {
                return vm.groceries = data;
            });
        }
    }
})();