

angular.module('app',[])
    .constant('socket', io())
    .controller('mainCtrl', function($scope, socket){
        
        // var socket = io();
        
        $scope.$on("homerun", function(ev, message){
            socket.emit('homerun', message);
        })
        
        //Listen for socket events
        socket.on('grand slam', function(msg){
           $scope.$broadcast("grand slam", msg);
        })
    })
    .controller('insideUiRouterController', function($scope, socket){
        $scope.messages = [];
        
        $scope.sendMessage = function(messageText){
            $scope.$emit("homerun", messageText);
        }
        
        $scope.$on("grand slam", function(ev, message){
            $scope.messages.push(message);
            // $scope.$apply();
        })
    })