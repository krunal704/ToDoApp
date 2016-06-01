/// <reference path="/g:/AngularJs/angular.js" />
angular.module("todoApp",[])
		.controller("todoController",function($scope){
			var tasks = [
					{name:"Learn Angular", status:true},
					{name:"Learn NodeJs", status:false}
			];
			$scope.tasks = tasks;
			$scope.taskName = "";
			$scope.addTask = function()
			{
				tasks.push({name:tasks.name, status:false});
				console.log("Pushed successfully");
				$scope.taskName = "";
			}
			
			 $scope.remaining = function()
			{
				var count = 0;
				for (var i = tasks.length - 1; i >= 0; i--) {
					count += tasks[i].status ? 0 : 1;
				}
				return count;
			}
			$scope.archive = function(){
				var oldtask = tasks;
				tasks = [];
				for (var i = 0; i < oldtask.length; i++) {
						if(!oldtask[i].status) tasks.push(oldtask[i]);
					}	
				$scope.tasks = tasks;
			}
			
			
		});
