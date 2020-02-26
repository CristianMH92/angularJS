app.factory('ComputerService', function(){
    return {
        showInfo: false,
        toogleShowInfo: function () {
            this.showInfo = !this.showInfo            
        },
        getShowInfo: function () {
            return this.showInfo
        },
        computerStatus: false,
        toogleComputer: function () {
            this.computerStatus = !this.computerStatus 
                       
        },
        getComputerStatus: function () {
            return this.computerStatus
        },
        settingsStatus: false,
        toogleSettings: function () {
            this.settingsStatus = !this.settingsStatus            
        },
        getSettingsStatus: function () {
            return this.settingsStatus
        }
    }
});