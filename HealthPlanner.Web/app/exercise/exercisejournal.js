(function () {
    'use strict';

    var controllerId = 'exercisejournal';

    // TODO: replace app with your module name
    angular.module('app').controller(controllerId, ['common', 'datacontext', exercisejournal]);

    function exercisejournal(common, datacontext) {
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        vm.activate = activate;
        vm.exercise = [];
        vm.title = 'Exercise Journal';
        activate();

        function activate() {
            common.activateController([getExercise()], controllerId).then(function () {
                log('Activated Exercise Journal View');
            });
        }

        function getExercise() {
            return datacontext.getExercise().then(function (data) {
                return vm.exercise = data;
            });
        }
    }
})();