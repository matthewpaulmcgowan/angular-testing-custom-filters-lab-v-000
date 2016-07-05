describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

it('should remove vowels', function(){
	var outcome = $filter("removeAllVowels")("atom");
	expect(outcome).toEqual("tm");
});

});
