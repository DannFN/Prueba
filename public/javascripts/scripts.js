(function() {
    const ctx_1 = document.querySelector("#all-calls").getContext("2d");
    const all_calls_chart = new Chart(ctx_1, {
        type: "doughnut",
        data: {
            labels: [
                "Human answers", 
                "No answers", 
                "Another answer type"
            ],
            datasets: [{
                label: "All calls",
                data: [295, 148, 956],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)", 
                    "rgba(54, 162, 235, 0.5)", 
                    "rgba(255, 206, 86, 0.5)"
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)", 
                    "rgba(54, 162, 235, 1)", 
                    "rgba(255, 206, 86, 1)"
                ],
                labels: [
                    "Human answers", 
                    "No answers", 
                    "Another answer type"
                ]
            }, {
                label: "Human answer calls DROP rate",
                data: [114, 181],
                backgroundColor: [
                    "rgba(75, 192, 192, 0.5)", 
                    "rgba(153, 102, 255, 0.5)"
                ],
                labels: [
                    "Drops", 
                    "Stable"
                ]
            }]
        }, 
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                labels: {
                    fontSize: 20
                }
            }, 
            tooltips: {
                titleFontSize: 20,
                bodyFontSize: 20,
                callbacks: {
                    label: function(tooltipItem, data) {
                        let dataset = data.datasets[tooltipItem.datasetIndex];
                        let index = tooltipItem.index;
                        return dataset.labels[index] + ": " + dataset.data[index];
                    }
                }
            }
        }
    });

    var ctx_2 = document.querySelector("#call-hangup-reasons");
    var call_hangup_reasons = new Chart(ctx_2, {
        type: "bar",
        data: {
            labels: [
                "Customer", 
                "Agent", 
                "Queue timeout", 
                "Abandon", 
                "No answer"
            ],
            datasets: [{
                label: "Hangups",
                data: [642, 492, 99, 15, 151],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)", 
                    "rgba(54, 162, 235, 0.5)", 
                    "rgba(255, 206, 86, 0.5)", 
                    "rgba(75, 192, 192, 0.5)", 
                    "rgba(153, 102, 255, 0.5)"
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)", 
                    "rgba(54, 162, 235, 1)", 
                    "rgba(255, 206, 86, 1)", 
                    "rgba(75, 192, 192, 1)", 
                    "rgba(153, 102, 255, 1)", 
                    "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false,
            }, 
            tooltips: {
                titleFontSize: 20,
                bodyFontSize: 20
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontSize: 20
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 20,
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var ctx_3 = document.querySelector("#list-id-stats");
    var list_id_stats = new Chart(ctx_3, {
        type: "pie",
        data: {
            labels: ["995 -", 
                "998 -", 
                "202004009142900 - Lista1", 
                "202006002115718 - Lista 2", 
                "202006002124434 - Lista 3", 
                "202006002124925 - Lista 4", 
                "202006003131836 - Lista 5", 
                "202006004113333 - Lista 6"
            ],
            datasets: [{
                label: "calls",
                data: [13, 1, 9, 5, 1, 2, 580, 788  ],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(83, 204, 61, 0.5)",
                    "rgba(212, 70, 193, 0.5)"
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(83, 204, 61, 1)",
                    "rgba(212, 70, 193, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                labels: {
                    fontSize: 16
                }
            }, 
            tooltips: {
                titleFontSize: 20,
                bodyFontSize: 20
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var ctx_4 = document.querySelector("#custom-status-category-stats");
    var custom_status_category_stats = new Chart(ctx_4, {
        type: "horizontalBar",
        data: {
            labels: [
                "Categoria1", 
                "Categoria5", 
                "Categoria6", 
                "Categoria7", 
                "Categoria2",
                "Categoria3",
                "Categoria4"
            ],
            datasets: [{
                label: "calls",
                data: [1129, 0, 0, 0, 0, 0, 0],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)", 
                    "rgba(54, 162, 235, 0.5)", 
                    "rgba(255, 206, 86, 0.5)", 
                    "rgba(75, 192, 192, 0.5)", 
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(83, 204, 61, 0.5)",
                    "rgba(212, 70, 193, 0.5)"
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)", 
                    "rgba(54, 162, 235, 1)", 
                    "rgba(255, 206, 86, 1)", 
                    "rgba(75, 192, 192, 1)", 
                    "rgba(153, 102, 255, 1)", 
                    "rgba(255, 159, 64, 1)",
                    "rgba(83, 204, 61, 1)",
                    "rgba(212, 70, 193, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false,
            }, 
            tooltips: {
                titleFontSize: 20,
                bodyFontSize: 20
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontSize: 20
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 20,
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var ctx_5 = document.querySelector("#calls-per-status");
    var calls_per_status = new Chart(ctx_5, {
        type: "horizontalBar",
        data: {
            labels: [
                "Numero ocupado", 
                "Número desconectado", 
                "ACLARACION", 
                "CON CONTACTO TT", 
                "Disponible",
                "Abandonado",
                "FAX-AVISO EN BUZON",
                "FUERA DE SERVICIO",
                "GESTION TERCERO",
                "ILOCALIZABLE",
                "Registro en llamada",
                "No trabaja Ahi",
                "No Vive Ahí",
                "NO CONTESTAN",
                "No Calificado",
                "PAGADA",
                "PROMESA DE DACION",
                "PROMESA DE PAGO",
                "RENUENTE"
            ],
            datasets: [{
                label: "calls",
                data: [50, 
                    98, 
                    1, 
                    59, 
                    4, 
                    114,
                    436,
                    2,
                    41,
                    3,
                    4,
                    1,
                    20,
                    420,
                    90,
                    5,
                    4,
                    23,
                    24 
                ],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)", 
                    "rgba(54, 162, 235, 0.5)", 
                    "rgba(255, 206, 86, 0.5)", 
                    "rgba(75, 192, 192, 0.5)", 
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(83, 204, 61, 0.5)",
                    "rgba(212, 70, 193, 0.5)",
                    "rgba(255, 99, 132, 0.5)", 
                    "rgba(54, 162, 235, 0.5)", 
                    "rgba(255, 206, 86, 0.5)", 
                    "rgba(75, 192, 192, 0.5)", 
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(83, 204, 61, 0.5)",
                    "rgba(212, 70, 193, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(83, 204, 61, 0.5)",
                    "rgba(212, 70, 193, 0.5)",
                    "rgba(255, 99, 132, 0.5)", 
                    "rgba(54, 162, 235, 0.5)"

                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)", 
                    "rgba(54, 162, 235, 1)", 
                    "rgba(255, 206, 86, 1)", 
                    "rgba(75, 192, 192, 1)", 
                    "rgba(153, 102, 255, 1)",
                    "rgba(83, 204, 61, 1)",
                    "rgba(212, 70, 193, 1)",
                    "rgba(255, 99, 132, 1)", 
                    "rgba(54, 162, 235, 1)", 
                    "rgba(255, 206, 86, 1)", 
                    "rgba(75, 192, 192, 1)", 
                    "rgba(153, 102, 255, 1)",
                    "rgba(83, 204, 61, 1)",
                    "rgba(212, 70, 193, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(83, 204, 61, 1)",
                    "rgba(212, 70, 193, 1)",
                    "rgba(255, 99, 132, 1)", 
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false,
            }, 
            tooltips: {
                titleFontSize: 20,
                bodyFontSize: 20
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontSize: 20
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 20,
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    /**
     * TODO charts de tiempo de llamada
     */

    var ctx_6 = document.querySelector("#calls-per-agent");
    var calls_per_agent = new Chart(ctx_6, {
        type: "scatter",
        data: {
            datasets: [{
                label: "Calls per agent",
                data: [
                    {x: 1, y: 3}, 
                    {x: 2, y: 2}, 
                    {x: 3, y: 1}, 
                    {x: 4, y: 1}, 
                    {x: 5, y: 2}, 
                    {x: 6, y: 49}, 
                    {x: 7, y: 1}, 
                    {x: 8, y: 64}, 
                    {x: 9, y: 117}, 
                    {x: 10, y: 68}, 
                    {x: 11, y: 45}, 
                    {x: 12, y: 92}, 
                    {x: 13, y: 68}, 
                    {x: 14, y: 105}, 
                    {x: 15, y: 96}, 
                    {x: 16, y: 75}, 
                    {x: 17, y: 34}, 
                    {x: 18, y: 66}, 
                    {x: 19, y: 67}, 
                    {x: 20, y: 38}, 
                    {x: 21, y: 36}, 
                    {x: 22, y: 83}, 
                    {x: 23, y: 15}, 
                    {x: 24, y: 1}, 
                    {x: 25, y: 5}, 
                    {x: 26, y: 262}
                ],
                pointBackgroundColor: "rgba(255, 99, 132, 1)",
                pointBorderColor: "rgba(255, 99, 132, 1)",
                pointRadius: 6,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false,
            },
            tooltips: {
                titleFontSize: 20,
                bodyFontSize: 20,
                callbacks: {
                    label: function(tooltipItem, data) {
                        return "Agent " + tooltipItem.xLabel + ": " + tooltipItem.yLabel;
                    }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontSize: 20
                    },
                    scaleLabel: {
                        display: true,
                        fontSize: 20,
                        labelString: "Calls"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 20
                    },
                    scaleLabel: {
                        display: true,
                        fontSize: 20,
                        labelString: "Agent"
                    },
                    type: "linear",
                    position: "bottom"
                }]
            }
        }
    });

    var ctx_7 = document.querySelector("#time-per-agent");
    var time_per_agent = new Chart(ctx_7, {
        type: "scatter",
        data: {
            datasets: [{
                label: "Calls per agent",
                data: [
                    {x: 1, y: moment("00:02:52", "HH:mm:ss")},
                    {x: 2, y: moment("00:00:18", "HH:mm:ss")}, 
                    {x: 3, y: moment("00:00:13", "HH:mm:ss")}, 
                    {x: 4, y: moment("00:00:15", "HH:mm:ss")}, 
                    {x: 5, y: moment("00:00:46", "HH:mm:ss")}, 
                    {x: 6, y: moment("01:12:09", "HH:mm:ss")}, 
                    {x: 7, y: moment("00:00:08", "HH:mm:ss")}, 
                    {x: 8, y: moment("00:51:22", "HH:mm:ss")}, 
                    {x: 9, y: moment("01:31:05", "HH:mm:ss")}, 
                    {x: 10, y: moment("00:52:16", "HH:mm:ss")}, 
                    {x: 11, y: moment("00:43:29", "HH:mm:ss")}, 
                    {x: 12, y: moment("02:18:39", "HH:mm:ss")}, 
                    {x: 13, y: moment("01:17:17", "HH:mm:ss")}, 
                    {x: 14, y: moment("01:20:52", "HH:mm:ss")}, 
                    {x: 15, y: moment("01:03:46", "HH:mm:ss")}, 
                    {x: 16, y: moment("01:49:41", "HH:mm:ss")}, 
                    {x: 17, y: moment("00:44:40", "HH:mm:ss")}, 
                    {x: 18, y: moment("01:37:52", "HH:mm:ss")}, 
                    {x: 19, y: moment("01:18:05", "HH:mm:ss")}, 
                    {x: 20, y: moment("00:48:12", "HH:mm:ss")}, 
                    {x: 21, y: moment("02:17:29", "HH:mm:ss")}, 
                    {x: 22, y: moment("01:18:43", "HH:mm:ss")}, 
                    {x: 23, y: moment("00:05:20", "HH:mm:ss")}, 
                    {x: 24, y: moment("00:00:20", "HH:mm:ss")}, 
                    {x: 25, y: moment("00:02:33", "HH:mm:ss")}, 
                    {x: 26, y: moment("00:22:06", "HH:mm:ss")}
                ],
                pointBackgroundColor: "rgba(54, 162, 235, 0.5)",
                pointBorderColor: "rgba(54, 162, 235, 1)",
                pointRadius: 6,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false,
            },
            tooltips: {
                titleFontSize: 20,
                bodyFontSize: 20,
                callbacks: {
                    label: function(tooltipItem, data) {
                        return "Agent " + tooltipItem.xLabel + ": " + new Date(tooltipItem.yLabel).toLocaleTimeString("it-IT", {
                            hour: "numeric", 
                            minute: "numeric", 
                            second: "numeric"
                        });
                    }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        callback: (value) => {
                            return new Date(value).toLocaleTimeString("it-IT", {
                                hour: "numeric", 
                                minute: "numeric", 
                                second: "numeric"
                            });
                        },
                        fontSize: 20,
                        min: 1593579600000,
                        max: 1593588600000,
                        stepSize: 1000000
                    },
                    scaleLabel: {
                        display: true,
                        fontSize: 20,
                        labelString: "Time"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 20
                    },
                    scaleLabel: {
                        display: true,
                        fontSize: 20,
                        labelString: "Agent"
                    },
                    type: "linear",
                    position: "bottom"
                }]
            }
        }
    });

    var ctx_8 = document.querySelector("#avg-time-per-agent");
    var avg_time_per_agent = new Chart(ctx_8, {
        type: "scatter",
        data: {
            datasets: [{
                label: "Calls per agent",
                data: [
                    {x: 1, y: moment("0:00:57", "HH:mm:ss")},
                    {x: 2, y: moment("0:00:09", "HH:mm:ss")}, 
                    {x: 3, y: moment("0:00:13", "HH:mm:ss")}, 
                    {x: 4, y: moment("0:00:15", "HH:mm:ss")}, 
                    {x: 5, y: moment("0:00:23", "HH:mm:ss")}, 
                    {x: 6, y: moment("0:01:28", "HH:mm:ss")}, 
                    {x: 7, y: moment("0:00:08", "HH:mm:ss")}, 
                    {x: 8, y: moment("0:00:48", "HH:mm:ss")}, 
                    {x: 9, y: moment("0:00:47", "HH:mm:ss")}, 
                    {x: 10, y: moment("0:00:46", "HH:mm:ss")}, 
                    {x: 11, y: moment("0:00:58", "HH:mm:ss")}, 
                    {x: 12, y: moment("0:01:30", "HH:mm:ss")}, 
                    {x: 13, y: moment("0:01:08", "HH:mm:ss")}, 
                    {x: 14, y: moment("0:00:46", "HH:mm:ss")}, 
                    {x: 15, y: moment("0:00:40", "HH:mm:ss")}, 
                    {x: 16, y: moment("0:01:28", "HH:mm:ss")}, 
                    {x: 17, y: moment("0:01:19", "HH:mm:ss")}, 
                    {x: 18, y: moment("0:01:29", "HH:mm:ss")}, 
                    {x: 19, y: moment("0:01:10", "HH:mm:ss")}, 
                    {x: 20, y: moment("0:01:16", "HH:mm:ss")}, 
                    {x: 21, y: moment("0:03:49", "HH:mm:ss")}, 
                    {x: 22, y: moment("0:00:57", "HH:mm:ss")}, 
                    {x: 23, y: moment("0:00:21", "HH:mm:ss")}, 
                    {x: 24, y: moment("0:00:20", "HH:mm:ss")}, 
                    {x: 25, y: moment("0:00:31", "HH:mm:ss")}, 
                    {x: 26, y: moment("0:00:05", "HH:mm:ss")}
                ],
                pointBackgroundColor: "rgba(255, 206, 86, 0.5)",
                pointBorderColor: "rgba(255, 206, 86, 1)",
                pointRadius: 6,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            legend: {
                display: false,
            },
            tooltips: {
                titleFontSize: 20,
                bodyFontSize: 20,
                callbacks: {
                    label: function(tooltipItem, data) {
                        return "Agent " + tooltipItem.xLabel + ": " + new Date(tooltipItem.yLabel).toLocaleTimeString("it-IT", {
                            hour: "numeric", 
                            minute: "numeric", 
                            second: "numeric"
                        });
                    }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        callback: (value) => {
                            return new Date(value).toLocaleTimeString("it-IT", {
                                hour: "numeric", 
                                minute: "numeric", 
                                second: "numeric"
                            });
                        },
                        fontSize: 20,
                        min: 1593579600000,
                        stepSize: 100000
                    },
                    scaleLabel: {
                        display: true,
                        fontSize: 20,
                        labelString: "Time"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 20
                    },
                    scaleLabel: {
                        display: true,
                        fontSize: 20,
                        labelString: "Agent"
                    },
                    type: "linear",
                    position: "bottom"
                }]
            }
        }
    });
})();