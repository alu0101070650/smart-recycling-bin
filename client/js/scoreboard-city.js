$(document).ready(function () {
    const laLagunaChartCtx = document.getElementById("laLagunaChart").getContext('2d');
    const laLagunaChart = new Chart(laLagunaChartCtx, {
        type: 'pie',
        data: {
            labels: ["Capital", "La Cuesta", "Bajamar", "Guamasa", "Taco", "Tejina", "Gracia"],
            datasets: [
                {
                    data: [123, 53, 23, 89, 43, 56, 21],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#d747d4", "#70cb6a", "#4D5360"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#f948f6", "#94f08e", "#7c8491"]
                }
            ]
        },
        options: {
            responsive: true
        }
    });

    const laLagunaHistoryChartCtx = document.getElementById("laLagunaHistoryChart").getContext('2d');
    const laLagunaHistoryChart = new Chart(laLagunaHistoryChartCtx, {
        type: 'line',
        data: {
            labels: ["July", "August", "September", "October", "November", "December", "January"],
            datasets: [
                {
                    label: "Capital",
                    fillColor: "rgba(255, 99, 132, 0.2)",
                    strokeColor: "rgba(255,99,132,1)",
                    pointColor: "rgba(255,99,132,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(255,99,132,1)",
                    data: [106, 98, 101, 123, 115, 120, 123]
                },
                {
                    label: "La Cuesta",
                    fillColor: "rgba(54, 162, 235, 0.2)",
                    strokeColor: "rgba(54, 162, 235, 1)",
                    pointColor: "rgba(54, 162, 235, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(54, 162, 235, 1)",
                    data: [50, 52, 48, 50, 50, 47, 53]
                },
                {
                    label: "Bajamar",
                    fillColor: "rgba(255, 206, 86, 0.2)",
                    strokeColor: "rgba(255, 206, 86, 1)",
                    pointColor: "rgba(255, 206, 86, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(255, 206, 86, 1)",
                    data: [34, 40, 45, 35, 30, 20, 23]
                },
                {
                    label: "Guamasa",
                    fillColor: "rgba(75, 192, 192, 0.2)",
                    strokeColor: "rgba(75, 192, 192, 1)",
                    pointColor: "rgba(75, 192, 192, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(75, 192, 192, 1)",
                    data: [42, 56, 63, 78, 75, 85, 89]
                },
                {
                    label: "Taco",
                    fillColor: "rgba(153, 102, 255, 0.2)",
                    strokeColor: "rgba(153, 102, 255, 1)",
                    pointColor: "rgba(153, 102, 255, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(153, 102, 255, 1)",
                    data: [25, 20, 15, 20, 45, 32, 43]
                },
                {
                    label: "Tejina",
                    fillColor: "rgba(153, 102, 255, 0.2)",
                    strokeColor: "rgba(153, 102, 255, 1)",
                    pointColor: "rgba(153, 102, 255, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(153, 102, 255, 1)",
                    data: [62, 71, 65, 73, 72, 65, 56]
                },
                {
                    label: "Gracia",
                    fillColor: "rgba(153, 102, 255, 0.2)",
                    strokeColor: "rgba(153, 102, 255, 1)",
                    pointColor: "rgba(153, 102, 255, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(153, 102, 255, 1)",
                    data: [21, 17, 16, 17, 21, 20, 21]
                }
            ]
        },
        options: {
            responsive: true
        }
    });
});