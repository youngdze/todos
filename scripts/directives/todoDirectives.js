var todoDirective = angular.module('todoApp.todoDirectives', []);

todoDirective.directive('editForm', function() {
	return {
		restrict: 'EA',
		templateUrl: 'views/editForm.html',
		replace: true,
		link: function(scope, element, attrs) {
			element.parent().bind('dblclick', function() {
				element.find('input')[0].focus();
			});
		}
	};
});