app.controller('PowerController', function ($scope, ComputerService, $location) {   
    $scope.valueTextPowerButton = 'POWER'
    $scope.computerStatusOne = function(){  
        var valuePowerButton = ComputerService.getComputerStatus()
        var valueShowInfo = ComputerService.getShowInfo()
        var elementos = document.getElementById("button_settings")      
        elementos.disabled = false 
        elementos.className = "mystyle";

        if (valuePowerButton) {        
            
            ComputerService.settingsStatus = false    
            ComputerService.toogleComputer()
        } else if (valuePowerButton === false && valueShowInfo === false) {
            
            ComputerService.toogleComputer() 
            $location.path('/settings')            
            ComputerService.toogleShowInfo()                       
        } else { 
            
            ComputerService.toogleComputer()
            
            $location.path('/settings')
        } 
    },
    $scope.goSettings = function () {
        var valuePowerButton = ComputerService.getComputerStatus()
        if (valuePowerButton === false) {
            $location.path('/settings')
            ComputerService.toogleSettings()
            ComputerService.toogleShowInfo()
        }                            
    },
    $scope.change_inner = function () {        
        if ($scope.valueTextPowerButton = 'POWER') {
            
            $scope.valueTextPowerButton = 'I / O'
        } else {
            $scope.valueTextPowerButton = ' '
        }
        
        
    },
    /* Watch */
    $scope.$watch('valueTextPowerButton', function(newValue,oldValue){
        console.log(newValue, oldValue);
        
        var botonEncendido = document.getElementById("power_button_id")
        if(newValue === 'POWER'){
            botonEncendido.className = "power_button"
        } else if(newValue === 'I / O') {            
            botonEncendido.className = "mystyle"         
        }
    })
});
