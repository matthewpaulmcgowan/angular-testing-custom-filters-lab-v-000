describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it("filter by fav food", function(){
		var listOfPeople = [
			{
				name: "Adam",
				favoriteFood: "Grapes"
			},
			{
				name: "Shauna",
				favoriteFood: "Tacos"
			}
		];

		var outcome = $filter("favoriteFood")(listOfPeople, "Tacos");

		expect(outcome.length).toBe(1);
		expect(outcome[0].name).toBe("Shauna");

	});
});
