  var app = angular.module("addrBook",[]);
  
  
        app.controller('myCtrl',function($scope,$http){
									
            $http.get("/content/seed.json").then(function (res){				
				$scope.info = res.data.contacts;
			});
			          
            
            $scope.addMe = function(){
                return {
					id:$scope.newId,
                    name: $scope.newName,
                    phone:$scope.newPhone,
					email:$scope.newEmail,
					birthday:$scope.newBirthday,
					avatar:$scope.newAvatar
					
                }
            }
            $scope.addItem = function(){
             for(var i=0;i<$scope.info.length;i++){
                 
                 if(($scope.info[i].name == $scope.addMe().name)||
                    ($scope.info[i].phone == $scope.addMe().phone) ||
					($scope.info[i].email == $scope.addMe().email)){
                     alert("Contact already exists !");
                     return false;
                 }
             }
             $scope.info.push($scope.addMe());
              }
                
            
            $scope.removeItem = function(){
                $scope.info.splice(this.$index,1)
            }
                  
            $scope.change = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return true;                 
                  }
              }    
            }
            $scope.save = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return false;                 
                  }
              }    
            }            
        })