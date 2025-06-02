document.addEventListener("DOMContentLoaded", function () {
    const chartData = document.getElementById("chart-data");

    if (chartData) {
        console.log("Raw labels:", chartData.dataset.labels);
        console.log("Raw sales:", chartData.dataset.sales);
        const labels = JSON.parse(chartData.dataset.labels);
        const salesData = JSON.parse(chartData.dataset.sales);

        const ctx = document.getElementById("salesChart").getContext("2d");

        new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Sales",
                    data: salesData,
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {beginAtZero: true}
                }
            }
        });
    }
});