(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    
    echarts.registerTheme('feng1', {
        "color": [
            "#ff0000","#0000ff","#00ff00",
 		"#5ab1ef","#715c87",
            "#ffaf51",
"#ff715e",
            "#ffee51",
            "#8c6ac4",

		 "#2ec7c9",
                "#b6a2de",
               
                "#ffb980",
                "#d87a80",
                "#8d98b3",
                "#e5cf0d",
                "#97b552",
                "#95706d",
                "#dc69aa",
                "#07a2a4",
                "#9a7fd1",
                "#588dd5",
                "#f5994e",
                "#c05050",
                "#59678c",
                "#c9ab00",
                "#7eb00a",
                "#6f5553",
                "#c14089",
          	 "#fcce10",
            "#e87c25",
            "#b5c334",
            "#fe8463",
            "#9bca63",
            "#fad860",
            "#f3a43b",
            "#60c0dd",
            "#d7504b",
            "#c6e579",
            "#f4e001",
            "#f0805a",
            "#26c0c0"
        ],

        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {},
        "title": {
        	 x: 'center',  
        	 
            "textStyle": {fontSize: 28,fontFamily:'simhei',padding:50,
            	
            fontWeight: 'bolder',
                "color": "#333333"
            },
            "subtextStyle": {
                "color": "#aaaaaa"
            }
        },
        "line": {

            "itemStyle": {
                "normal": {
                    "borderWidth": 1
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "9",
            "symbol": "circle",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 1
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "9",
            "symbol": "circle",
            "smooth": true
        },
        "bar": { barGap:'15%',  barCategoryGap:'30%',
            "itemStyle": {
                "normal": {
                    "barBorderWidth": 0,
                   
                    "barBorderColor": "#ccc"
                   
                },
                "emphasis": {
                    "barBorderWidth": 0,
                    
                    "barBorderColor": "#ccc"
                },
               
            }
        },
        "pie": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#c1232b",
                    "color0": "#b5c334",
                    "borderColor": "#c1232b",
                    "borderColor0": "#b5c334",
                    "borderWidth": 1
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 0,
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "color": "#aaaaaa"
                }
            },
            "symbolSize": "7",
            "symbol": "circle",
            "smooth": true,
            "color": [
                "#c1232b",
                "#27727b",
                "#fcce10",
                "#e87c25",
                "#b5c334",
                "#fe8463",
                "#9bca63",
                "#fad860",
                "#f3a43b",
                "#60c0dd",
                "#d7504b",
                "#c6e579",
                "#f4e001",
                "#f0805a",
                "#26c0c0"
            ],
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#dddddd",
                    "borderColor": "#eeeeee",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(254,153,78,1)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#c1232b"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#dddddd",
                    "borderColor": "#eeeeee",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(254,153,78,1)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#c1232b"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#dddddd"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
        	show : true,
        				feature : { dataView : {show: false, readOnly: true},
            						magicType : {show: true, type: ['line', 'bar']},
            						restore : {show: false},
            						saveAsImage : {show: true}
        						 },
        	
            "iconStyle": {
                "normal": {
                    "borderColor": "#0000ff"
                },
                "emphasis": {
                    "borderColor": "#ff0000"
                }
            }
        },
        "legend": {orient:'vertical', left:'right',y:70,
            "textStyle": {
                "color": "#333333"
            },itemGap:15
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#27727b",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#27727b",
                    "width": 1
                }
            },
            
        },
        "timeline": {
            "lineStyle": {
                "color": "#293c55",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#27727b",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#72d4e0"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#27727b",
                    "borderColor": "#27727b",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#27727b",
                    "borderColor": "#27727b",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#c1232b",
                "borderColor": "rgba(194,53,49,0.5)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#293c55"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#293c55"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#c1232b",
                "#fcce10"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(0,0,0,0)",
            "dataBackgroundColor": "rgba(181,195,52,0.3)",
            "fillerColor": "rgba(181,195,52,0.2)",
            "handleColor": "#27727b",
            "handleSize": "100%",
            "textStyle": {
                "color": "#999999"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#eeeeee"
                    }
                }
            }
        }
    });

}));
