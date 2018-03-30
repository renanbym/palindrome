(function () {

    angular.module('palindrome')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope, $http) {

        $scope.form = { text: '' }

        $scope.submit = () => {
            let { text } = $scope.form;

            if (text !== null && text) {
                $http.post('/api/v1/palindrome', { txt: text} )
                    .then((result) => {
                        swal("Is a palindrome", "", "success");
                    })
                    .catch((err) => {
                        swal("Is not a palindrome", "", "error");
                    });
            } else {
                swal("Oops", "You need to type a word, phrase, number or another sequence of characters", "error");
            }
        }

        $scope.value = angular.copy($scope.form);

    }

})()