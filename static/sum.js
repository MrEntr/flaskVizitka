document.addEventListener("DOMContentLoaded", function() {
    var weightInput = document.getElementById("weight");
    var shippingCostParagraph = document.getElementById("shippingCost");

    weightInput.addEventListener("input", function() {
        var weight = parseFloat(weightInput.value);
        var shippingCost = calculateShippingCost(weight);
        shippingCostParagraph.textContent = "Стоимость доставки: " + shippingCost + " руб.";
    });

    function calculateShippingCost(weight) {
        if (weight >= 1 && weight < 5) {
            return 100 * weight;
        } else if (weight >= 5 && weight < 20) {
            return 125 * weight;
        } else if (weight >= 20) {
            return 150 * weight;
        } else {
            return 0;
        }
    }
});
