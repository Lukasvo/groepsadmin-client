(function() {
  'use strict';

  angular
    .module('ga.ledenlijstcontroller', [])
    .controller('LedenlijstController', LedenlijstController);

  LedenlijstController.$inject = ['$scope', 'RestService'];

  function LedenlijstController($scope, RestService) {
      $scope.opgeslagenFilters = [
        {naam: "Export", label:"Persoonlijke filters"},
        {naam: "Wanbetalers", label: "Persoonlijke filters"},
        {naam: "Leden met geblokkeerd adres", label: "Standaard filters"}
      ];
      $scope.currentFilter = $scope.opgeslagenFilters[1];
      $scope.isFilterCollapsed = true;

      //$scope.leden = RestService.query();
      $scope.leden = [
        {id: "profiel", lidnummer: "1989080400123", voornaam: "Kawtar", achternaam: "Tel", postcode: "2547", gemeente: "Lint", straat: "Lambrechtstraat", nummer: "28"},
        {id: "profiel", lidnummer: "1994071000685", voornaam: "Georgino", achternaam: "Mijnen", postcode: "3530", gemeente: "Houthalen-Helchteren", straat: "Lambrechtstraat", nummer: "64"},
        {id: "profiel", lidnummer: "1991112000453", voornaam: "Juriën", achternaam: "Erkens", postcode: "2580", gemeente: "Putte", straat: "Oostjachtpark", nummer: "393"}
      ];
    }
})();