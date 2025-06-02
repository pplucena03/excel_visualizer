document.addEventListener("DOMContentLoaded", function () {
    const chartElements = document.querySelectorAll('.chart-data');

    chartElements.forEach((element) => {
        const labels = JSON.parse(element.dataset.labels);
        const data = JSON.parse(element.dataset.sales);

        // Pegamos o canvas seguinte ao bloco .chart-data
        const canvas = element.nextElementSibling;
        const ctx = canvas.getContext("2d");

        // Define o tipo de gráfico baseado no ID do canvas
        let chartType = "bar";
        if (canvas.id.includes("doughnut")) {
            chartType = "doughnut";
        }

        new Chart(ctx, {
            type: chartType,
            data: {
                labels: labels,
                datasets: [{
                    label: "Sales",
                    data: data,
                    backgroundColor: chartType === "bar"
                        ? "rgba(75, 192, 192, 0.6)"
                        : ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: chartType === "bar" ? {
                    y: {
                        beginAtZero: true
                    }
                } : {}
            }
        });
    });
});