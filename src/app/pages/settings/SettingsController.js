app.controller('SettingsController', function ($scope, ComputerService, ValuesDefaultServices, $location, RequestService) {

    $scope.ramModel = {}
    $scope.ramSelectedModel = ValuesDefaultServices.valueRamDefault
    $scope.hddModel = {}
    $scope.hddSelectedModel = ValuesDefaultServices.valueHddDefault
    $scope.processorModel = {}
    $scope.processorSelectedModel = ValuesDefaultServices.valueProcessorDefault
    $scope.graphicModel = {}
    $scope.graphicSelectedModel = ValuesDefaultServices.valueGraphicDefault
    $scope.statusSettings = ComputerService.getSettingsStatus()
    $scope.statusShowInfo = ComputerService.getShowInfo()

    $scope.computerReturnPower = function(){
        $location.path('/power')
        var valuePowerButton = ComputerService.getComputerStatus()
        if (valuePowerButton === false) {
            ComputerService.toogleShowInfo()
            ComputerService.toogleSettings()
         } 
    }
    $scope.ram = function() {   
        RequestService[0].success(function(data){
            $scope.ramData = data.results                        
        })
    }
    $scope.hdd = function () {
        RequestService[1].success(function(data){
            $scope.hddData = data.results           
        })
    }
    $scope.processor = function () {
        RequestService[2].success(function(data){
            $scope.processorsData = data.results                  
        })
    }
   $scope.graphic = function () {
        RequestService[3].success(function(data){
            $scope.graphicData = data.results
        })
   }
   $scope.selectOption = function ($event) { 
      var componentSelect = event.target.id

      switch (componentSelect) {
        case 'select_ram':
            ValuesDefaultServices.valueRamDefault = $scope.ramModel
            $scope.ramSelectedModel = ValuesDefaultServices.valueRamDefault
                        
            break;
        case 'select_hdd':
            ValuesDefaultServices.valueHddDefault = $scope.hddModel
            $scope.hddSelectedModel = ValuesDefaultServices.valueHddDefault
                        
            break;
        case 'select_processor':
            ValuesDefaultServices.valueProcessorDefault = $scope.processorModel
            $scope.processorSelectedModel = ValuesDefaultServices.valueProcessorDefault
                         
            break;
        case 'select_graphic':
            ValuesDefaultServices.valueGraphicDefault = $scope.graphicModel
            $scope.graphicSelectedModel = ValuesDefaultServices.valueGraphicDefault
                       
            break; 
          default:
              break;
      }                 
    }
});