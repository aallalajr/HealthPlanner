//(function () {
//    'use strict';

//    var serviceId = 'entityExtension';
//    angular.module('app').factory(serviceId [entityExtension]);

//    function entityExtension() {

//        var store = cloneModuleMetadataStore(); // clones the MetadataStore

//        var service = {
//            store : store,
//        };

//        return service;


//        var foodCtor = function () {
//            this.Rating = ""; 
//        };

//        // register the custom constructor
//        store.registerEntityTypeCtor("Food", foodCtor);

//        var fullProp = store.getEntityType('Food').getProperty('Rating');
                
//        ok(fullProp && fullProp.isUnmapped,
//            "'Rating' should be an unmapped property after registration");

//        function store() {}
//            var em = newEm(store); // helper creates a manager using this MetadataStore
//    }

//        var query = EntityQuery.from('Food').using(em);

//        stop(); // going async
//        query.execute().then(success).fail(handleFail).fin(start);

//        function success(data) {
//            var first = data.results[0];
//            var full = first.Rating();

//            // passing test confirms that the Rating property has a value
//            ok(full, "queried 'Food' should have a rating; it is " + full);
//        }
//    }
//})();