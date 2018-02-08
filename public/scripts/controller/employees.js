app.controller('employeesController', function($scope, $http, API_URL) {
    //retrieve employees listing from API
    $http.get(API_URL + "employees")
            .then(function(employees) {
                $scope.employees = employees.data; 
               console.log(employees.data);  
            });

             $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }



      //Add Employee 
	   $scope.save = function(addEmp) {
	        var url = API_URL + "employees";
	        $http({
	            method: 'POST',
	            url: url,
	            data: $.param($scope.employee),
	            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	        }).then(function(response) {
	            console.log(response);
	            location.reload();
			   swal({
				  position: 'center',
				  type: 'success',
				  title: 'Employee Details Has Been added Successfully',
				  showConfirmButton: false,
				  timer: 1500
				})

	  
	        });
	    }

	    //delete record
    $scope.confirmDelete = function(id) {
        var isConfirmDelete = confirm('Are you sure you want this record?');

        if (isConfirmDelete) {
            $http({
                method: 'DELETE',
                url: API_URL + 'employees/' + id
            }).
                    then(function(data) {
                        console.log(data);
                        swal({
                                  title: "",
                                  text: 'Employee Details Has Been Deleted Successfully',
                                  type: "success"
                                  // timer:1000          
                                });
                        location.reload();
                    }).
                    error(function(data) {
                        console.log(data);
                        alert('Unable to delete');
                    });
        } else {
            return false;
        }
    }

    // initialize update action
 	$scope.initTask = function (id) {
        // console.log(id);
        $http.get(API_URL + "employees/show/" + id)
            .then(function(employees) {
               $scope.employee = employees.data;
               console.log(employees.data);  
            });
        		$("#edit_task").modal('show');
    
    }

    
    $scope.updateTask = function(id){

        console.log(id);
        var url = API_URL + 'employees/update/' + id;
	        $http({
	            method: 'POST',
	            url: url,
	            data: $.param($scope.employee),
	            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	        }).then(function(response) {
	            console.log(response);
	            location.reload();
			   swal({
				  position: 'center',
				  type: 'success',
				  title: 'Employee Details Has Been updated Successfully',
				  showConfirmButton: false,
				  timer: 1500
				})

	  
	        });


    }


});