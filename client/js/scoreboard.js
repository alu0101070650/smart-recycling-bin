$(document).ready(function () {
    const top5ChartCtx = document.getElementById("top5Chart").getContext('2d');
    const top5Chart = new Chart(top5ChartCtx, {
        type: 'bar',
        data: {
            labels: ["Oslo", "Amsterdam", "Stockholm", "København", "Bergen"],
            datasets: [{
                label: '# of CO2 grams saved (person/week)',
                data: [1044, 876, 765, 382, 376],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    const top5HistoryChartCtx = document.getElementById("top5HistoryChart").getContext('2d');
    const top5HistoryChart = new Chart(top5HistoryChartCtx, {
        type: 'line',
        data: {
            labels: ["July", "August", "September", "October", "November", "December", "January"],
            datasets: [
                {
                    label: "Oslo",
                    fillColor: "rgba(255, 99, 132, 0.2)",
                    strokeColor: "rgba(255,99,132,1)",
                    pointColor: "rgba(255,99,132,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(255,99,132,1)",
                    data: [880, 840, 912, 1010, 970, 1020, 1044]
                },
                {
                    label: "Amsterdam",
                    fillColor: "rgba(54, 162, 235, 0.2)",
                    strokeColor: "rgba(54, 162, 235, 1)",
                    pointColor: "rgba(54, 162, 235, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(54, 162, 235, 1)",
                    data: [804, 810, 730, 865, 850, 900, 876]
                },
                {
                    label: "Stockholm",
                    fillColor: "rgba(255, 206, 86, 0.2)",
                    strokeColor: "rgba(255, 206, 86, 1)",
                    pointColor: "rgba(255, 206, 86, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(255, 206, 86, 1)",
                    data: [704, 698, 710, 753, 747, 750, 765]
                },
                {
                    label: "København",
                    fillColor: "rgba(75, 192, 192, 0.2)",
                    strokeColor: "rgba(75, 192, 192, 1)",
                    pointColor: "rgba(75, 192, 192, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(75, 192, 192, 1)",
                    data: [325, 370, 385, 378, 350, 380, 382]
                },
                {
                    label: "Bergen",
                    fillColor: "rgba(153, 102, 255, 0.2)",
                    strokeColor: "rgba(153, 102, 255, 1)",
                    pointColor: "rgba(153, 102, 255, 1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(153, 102, 255, 1)",
                    data: [321, 298, 318, 354, 350, 390, 376]
                }
            ]
        },
        options: {
            responsive: true
        }
    });

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

    const santaCruzChartCtx = document.getElementById("santaCruzChart").getContext('2d');
    const santaCruzChart = new Chart(santaCruzChartCtx, {
        type: 'pie',
        data: {
            labels: ["Capital", "El Sobradillo", "San Andrés", "Añaza", "Valleseco", "Barranco Grande", "Alisios"],
            datasets: [
                {
                    data: [104, 34, 56, 34, 23, 45, 65],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#d747d4", "#70cb6a", "#4D5360"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#f948f6", "#94f08e", "#7c8491"]
                }
            ]
        },
        options: {
            responsive: true
        }
    });

    const puertoCruzChartCtx = document.getElementById("puertoCruzChart").getContext('2d');
    const puertoCruzChart = new Chart(puertoCruzChartCtx, {
        type: 'pie',
        data: {
            labels: ["Capital", "La Paz", "La Vera", "El Tope", "Las Arenas"],
            datasets: [
                {
                    data: [98, 74, 54, 67, 49],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#d747d4"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#f948f6"]
                }
            ]
        },
        options: {
            responsive: true
        }
    });

    const candelariaChartCtx = document.getElementById("candelariaChart").getContext('2d');
    const candelariaChart = new Chart(candelariaChartCtx, {
        type: 'pie',
        data: {
            labels: ["Capital", "Las Caletillas", "Igueste", "Barranco Hondo"],
            datasets: [
                {
                    data: [140, 98, 96, 65],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
                }
            ]
        },
        options: {
            responsive: true
        }
    });
});