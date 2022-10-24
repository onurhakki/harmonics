plotting = document.getElementById('HarmonicPlot');
var frequency = 50;
var T = 1 / frequency;
var time_interval = 0.02;
var harmonic_order = 10;
var n_points = 1000;
var noise = 0;
var dc_component = 0;
var margin= {
            l: 50,
            r: 50,
            b: 50,
            t: 10,
            pad: 4
          }

var x_axis = Array.apply(null, Array(n_points)).map(function (x, i) {
    return i * time_interval / n_points;
})

var slider = document.getElementById("HarmonicOrder");
var sliders_section = document.getElementById("Sliders");
var output = document.getElementById("HarmonicOrderValue");
var radio_button = document.getElementsByName("Previous_Settings");
var check = {
    "sum": 0,
    "an0": 1,
    "bn0": 2
};



const stored_data = {"Reset": {
    "a_n" : [100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    "b_n" : [100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}, 

    "Square" :{ a_n : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] , b_n : [89.1, 0.0, 29.7, 0.0, 17.8, 0.0, 12.7, 0.0, 9.9, 0.0, 8.1, 0.0, 6.9, 0.0, 5.9, 0.0, 5.2, 0.0, 4.7, 0.0, 4.2, 0.0, 3.9, 0.0, 3.6, 0.0, 3.3, 0.0, 3.1, 0.0, 2.9, 0.0, 2.7, 0.0, 2.5, 0.0, 2.4, 0.0, 2.3, 0.0] },
    "Quasi-Square (120°)": { a_n : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] , b_n : [77.2, 0.0, 0.0, 0.0, -15.4, 0.0, -11.0, 0.0, 0.0, 0.0, 7.0, 0.0, 5.9, 0.0, 0.0, 0.0, -4.5, 0.0, -4.1, 0.0, 0.0, 0.0, 3.4, 0.0, 3.1, 0.0, 0.0, 0.0, -2.7, 0.0, -2.5, 0.0, 0.0, 0.0, 2.2, 0.0, 2.1, 0.0, 0.0, 0.0] },
    "Half Sine (R)": { a_n : [-22.3, 0.0, 22.3, 0.0, -7.4, 0.0, 7.4, 0.0, -4.5, 0.0, 4.5, 0.0, -3.2, 0.0, 3.2, 0.0, -2.5, 0.0, 2.5, 0.0, -2.0, 0.0, 2.0, 0.0, -1.7, 0.0, 1.7, 0.0, -1.5, 0.0, 1.5, 0.0, -1.3, 0.0, 1.3, 0.0, -1.2, 0.0, 1.2, 0.0] , b_n : [35.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
"Triangular":{ a_n : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] , b_n : [56.7, 0.0, -6.3, 0.0, 2.3, 0.0, -1.2, 0.0, 0.7, 0.0, -0.5, 0.0, 0.3, 0.0, -0.3, 0.0, 0.2, 0.0, -0.2, 0.0, 0.1, 0.0, -0.1, 0.0, 0.1, 0.0, -0.1, 0.0, 0.1, 0.0, -0.1, 0.0, 0.1, 0.0, -0.0, 0.0, 0.0, 0.0, -0.0, 0.0] }

}


Selection_setting = function(val){
    for (let n = 0; n < harmonic_order; n++) {
        document.getElementById("Slider_a_n".concat(n)).value = stored_data[val]["a_n"][n];
        document.getElementById("Slider_a_n".concat(n, "Value")).innerHTML = stored_data[val]["a_n"][n];
        document.getElementById("Slider_b_n".concat(n)).value = stored_data[val]["b_n"][n];
        document.getElementById("Slider_b_n".concat(n, "Value")).innerHTML = stored_data[val]["b_n"][n];
        
    }
    upload_data_and_plot(stored_data[val])
}

var store_html = {
    a_n: {
        nos: Array.apply(null, Array(40)).map(function (x, i) {
            return i;
        }),
        ids: Array.apply(null, Array(40)).map(function (x, i) {
            return "Slider_a_n".concat(i);
        }),
        texts: Array.apply(null, Array(40)).map(function (x, i) {
            return "Slider_a_n".concat(i, "Value");
        }),
        values: Array(40).fill(0),
        numeric_values: {}
    },
    b_n: {
        nos: Array.apply(null, Array(40)).map(function (x, i) {
            return i;
        }),
        ids: Array.apply(null, Array(40)).map(function (x, i) {
            return "Slider_b_n".concat(i);
        }),
        texts: Array.apply(null, Array(40)).map(function (x, i) {
            return "Slider_b_n".concat(i, "Value");
        }),
        values: Array(40).fill(0),
        numeric_values: {}
    }
};

function ft_an(horder) {
    let a_nth = [];
    for (let t = 0; t < x_axis.length; t++) {
        let mag = store_html["a_n"]["values"][horder];
        let val = mag * Math.cos(2 * Math.PI * (horder + 1) * x_axis[t] / T)
        a_nth.push(val);}
    store_html["a_n"]["numeric_values"][horder] = a_nth.copyWithin();
}

function ft_bn(horder) {
    let b_nth = [];
    for (let t = 0; t < x_axis.length; t++) {
        let mag = store_html["b_n"]["values"][horder];
        let val = mag * Math.sin(2 * Math.PI * (horder + 1) * x_axis[t] / T)
        b_nth.push(val);}
    store_html["b_n"]["numeric_values"][horder] = b_nth.copyWithin();
}




slider.oninput = function () {
    output.innerHTML = this.value;
    while (sliders_section.firstChild) {
        sliders_section.removeChild(sliders_section.firstChild);
    }
    update_sliders()
}

sliderChangeMain = function (e) {
    let name = e.id.concat("Value");
    document.getElementById(name).innerHTML = e.value;
    if (e.id == "Frequency") {
        frequency = Number(e.value);
        T = 1 / frequency;
        update_create_and_plot();
    };
    if (e.id == "HarmonicOrder") {
        harmonic_order = Number(e.value);
        update_create_and_plot();
    };
    if (e.id == "TimeInterval") {
        time_interval = Number(e.value);
        x_axis = Array.apply(null, Array(n_points)).map(function (x, i) {
            return i * time_interval / n_points;
        })
        update_create_and_plot();
    };
    if (e.id == "DCComponent") {
        dc_component = Number(e.value);
        update_create_and_plot();
    };

    if (e.id == "Noise") {
        noise = Number(e.value);
        update_create_and_plot();
    };
}


sliderChange = function (e) {
    let name = e.id.concat("Value");
    let no = Number(e.id.slice(10));
    document.getElementById(name).innerHTML = e.value
    if (name[7] == "a") {
        store_html["a_n"]["values"][no] = Number(e.value);
        let truth = store_html["a_n"]["numeric_values"].hasOwnProperty(no)
        ft_an(no);
        if (truth == true) {
            update = {
                'y': [store_html["a_n"]["numeric_values"][no]]
            };
            Plotly.update(plotting, update, {}, [check["an".concat(no)]]);
        } else {
            check["an".concat(no)] = Object.keys(check).length
            Plotly.addTraces(plotting, {
                x: x_axis,
                y: store_html["a_n"]["numeric_values"][no],
                mode: "lines",
                type: "scatter",
                name: 'An '.concat(no + 1)
            });
        }

    } else if (name[7] == "b") {
        store_html["b_n"]["values"][no] = Number(e.value);
        let truth = store_html["b_n"]["numeric_values"].hasOwnProperty(no)
        ft_bn(no);
        if (truth == true) {
            update = {
                'y': [store_html["b_n"]["numeric_values"][no]]
            };
            Plotly.update(plotting, update, {}, [check["bn".concat(no)]]);
        } else {
            check["bn".concat(no)] = Object.keys(check).length
            Plotly.addTraces(plotting, {
                x: x_axis,
                y: store_html["b_n"]["numeric_values"][no],
                mode: "lines",
                type: "scatter",
                name: 'Bn '.concat(no + 1)
            });
        }


    }
    var summation = Array(n_points).fill(0);
    for (let t = 0; t < x_axis.length; t++) {
        // summation[t] = store_html['a_n']["numeric_values"][0][t] + store_html['b_n']["numeric_values"][0][t]
        for (let n = 0; n < harmonic_order; n++) {
            let truth_a = store_html["a_n"]["numeric_values"].hasOwnProperty(n)
            let truth_b = store_html["b_n"]["numeric_values"].hasOwnProperty(n)
            if (truth_a == true) {
                summation[t] += store_html['a_n']["numeric_values"][n][t]
            }
            if (truth_b == true) {
                summation[t] += store_html['b_n']["numeric_values"][n][t]
            }
        }
    }
    
    if (dc_component !=0){
        for (let i = 0; i<summation.length; i++){
            summation[i] = summation[i] + dc_component
        }}
    if (noise !=0){
        for (let i = 0; i<summation.length; i++){
            summation[i] = summation[i]*(1+noise*Math.random()/100)
        }
    }

    Plotly.update(plotting, {
        'y': [summation]
    }, {}, [0]);


}




update_sliders = function () {
    for (let n = 0; n < slider.value; n++) {
        var row = document.createElement("div");
        row.className = "row";

        for (let c = 0; c < 5; c++) {
            var col = document.createElement("div");
            col.className = "col"
            if (c == 0) {
                col.innerHTML = n + 1
            }
            if (c == 1) {
                var s = document.createElement("input");
                s.className = "slider";
                s.setAttribute('type', 'range');
                s.setAttribute('min', '-100');
                s.setAttribute('max', '100');
                s.setAttribute('id', store_html["a_n"]["ids"][n]);
                s.setAttribute('value', store_html["a_n"]["values"][n]);
                s.setAttribute("onChange", "sliderChange(this)");
                col.appendChild(s)
            }
            if (c == 2) {
                let name = store_html["a_n"]["texts"][n];
                var p = document.createElement("p");
                p.setAttribute("id", name);
                p.innerHTML = store_html["a_n"]["values"][n]
                col.appendChild(p)
            }

            if (c == 3) {
                var s = document.createElement("input");
                s.className = "slider";
                s.setAttribute('type', 'range');
                s.setAttribute('min', '-100');
                s.setAttribute('max', '100');
                s.setAttribute('id', store_html["b_n"]["ids"][n]);
                s.setAttribute('value', store_html["b_n"]["values"][n]);
                s.setAttribute("onChange", "sliderChange(this)");
                col.appendChild(s)
            }

            if (c == 4) {
                let name = store_html["b_n"]["texts"][n];
                var p = document.createElement("p");
                p.setAttribute("id", name);
                p.innerHTML = store_html["b_n"]["values"][n]
                col.appendChild(p)
            }

            row.appendChild(col)
        }

        sliders_section.appendChild(row);
    }
}
store_html["a_n"]["values"][0] = 100;
store_html["b_n"]["values"][0] = 100;
update_sliders()

function update_create_and_plot() {
    var summation = Array(n_points).fill(0);
    var data = [];
    var ans = [];
    var bns = [];
    for (let n = 0; n < harmonic_order; n++) {
        if (store_html['a_n']["values"][n] != 0) {
            ft_an(n);
            for (let t = 0; t < x_axis.length; t++) {
                summation[t] += store_html['a_n']["numeric_values"][n][t]
            }
            ans.push({
                x: x_axis,
                y: store_html['a_n']["numeric_values"][n],
                mode: "lines",
                type: "scatter",
                name: 'An '.concat(n + 1)
            })
        }
        if (store_html['b_n']["values"][n] != 0) {
            ft_bn(n);
            for (let t = 0; t < x_axis.length; t++) {
                summation[t] += store_html['b_n']["numeric_values"][n][t]
            }
            bns.push({
                x: x_axis,
                y: store_html['b_n']["numeric_values"][n],
                mode: "lines",
                type: "scatter",
                name: 'Bn '.concat(n + 1)
            })
        }
    }
    if (dc_component !=0){
        for (let i = 0; i<summation.length; i++){
            summation[i] = summation[i] + dc_component
        }}
    if (noise !=0){
        for (let i = 0; i<summation.length; i++){
            summation[i] = summation[i]*(1+noise*Math.random()/100)
        }
    }
    data.push({
        x: x_axis,
        y: summation,
        mode: "lines",
        type: "scatter",
        name: 'Total'
    });
    data = data.concat(ans, bns);

    var layout = {
        xaxis: {
            range: [0, time_interval],
            title: "Time"
        },
        yaxis: {
            title: "Magnitude"
        },

          margin: margin

    };

    // Display using Plotly
    Plotly.newPlot(plotting, data, layout);

}


function upload_data_and_plot(e) {    
    for (var variableKey in store_html['a_n']["numeric_values"]){
        if (store_html['a_n']["numeric_values"].hasOwnProperty(variableKey)){
            delete store_html['a_n']["numeric_values"][variableKey];
        }}
    
    for (var variableKey in store_html['b_n']["numeric_values"]){
        if (store_html['b_n']["numeric_values"].hasOwnProperty(variableKey)){
            delete store_html['b_n']["numeric_values"][variableKey];
        }}    


    check = {
        "sum": 0,
    };
    var summation = Array(n_points).fill(0);
    var others = [];
    for (let nth = 0; nth < 40; nth++) {
        store_html["a_n"]["values"][nth] = e["a_n"][nth]
        store_html["b_n"]["values"][nth] = e["b_n"][nth]
        }
    
    for (let nth = 0; nth < harmonic_order; nth++) {
        
        if (e["a_n"][nth]!=0){
            ft_an(nth);
            check["an".concat(nth)] = Object.keys(check).length
            others.push({
                x: x_axis,
                y: store_html['a_n']["numeric_values"][nth],
                mode: "lines",
                type: "scatter",
                name: 'An '.concat(nth+1)})
            }
        if (e["b_n"][nth]!=0){
            ft_bn(nth);
            check["bn".concat(nth)] = Object.keys(check).length
            others.push({
                x: x_axis,
                y: store_html['b_n']["numeric_values"][nth],
                mode: "lines",
                type: "scatter",
                name: 'Bn '.concat(nth+1)})
        }

    for (let t = 0; t < x_axis.length; t++) {
        if (e["a_n"][nth]!=0){summation[t] += store_html['a_n']["numeric_values"][nth][t]}
        if (e["b_n"][nth]!=0){summation[t] += store_html['b_n']["numeric_values"][nth][t]}
    }
    }
    for (let t = 0; t < x_axis.length; t++) {
        if (dc_component !=0){summation[t] = summation[t] + dc_component}
        if (noise !=0){summation[t] = summation[t]*(1+noise*Math.random()/100)}
    }



    

    
    var data = [{
            x: x_axis,
            y: summation,
            mode: "lines",
            type: "scatter",
            name: 'Total'
        }].concat(others)
    
        
        // Define Layout
    var layout = {
        xaxis: {
            range: [0, time_interval],
            title: "Time"
        },
        yaxis: {
            title: "Magnitude"
        },
          margin: margin

    };

    // Display using Plotly
    Plotly.newPlot(plotting, data, layout);
}

function create_and_plot() {
    check = {
        "sum": 0,
        "an0": 1,
        "bn0": 2
    };
    ft_an(0);
    ft_bn(0);

    var summation = Array(n_points).fill(0);
    for (let t = 0; t < x_axis.length; t++) {
        summation[t] = store_html['a_n']["numeric_values"][0][t] + store_html['b_n']["numeric_values"][0][t]
    }

    var data = [{
            x: x_axis,
            y: summation,
            mode: "lines",
            type: "scatter",
            name: 'Total'
        },
        {
            x: x_axis,
            y: store_html['a_n']["numeric_values"][0],
            mode: "lines",
            type: "scatter",
            name: 'An '.concat(1)
        },
        {
            x: x_axis,
            y: store_html['b_n']["numeric_values"][0],
            mode: "lines",
            type: "scatter",
            name: 'Bn '.concat(1)
        }
    ];





    // Define Layout
    var layout = {
        xaxis: {
            range: [0, time_interval],
            title: "Time"
        },
        yaxis: {
            title: "Magnitude"
        },
          margin: margin

    };

    // Display using Plotly
    Plotly.newPlot(plotting, data, layout);
}

create_and_plot();



function evalulate_magnitudes(){
    let summ = []
    for (let nth = 0; nth < harmonic_order; nth++) {
        let a = store_html["a_n"]["values"][nth]
        let b = store_html["b_n"]["values"][nth]
        summ.push(Math.pow(Math.pow(a,2)+Math.pow(b,2), 0.5)/Math.pow(2,0.5))
    }
    rms_val = 0;
    thd_val = 0;

    for (let nth = 0; nth < summ.length; nth++) {
        rms_val += Math.pow(summ[nth], 2)
        if (nth != 0){
            thd_val += Math.pow(summ[nth], 2) ///
        }
    }
    rms_val = Number((Math.abs(dc_component) + Math.pow(rms_val,0.5)).toFixed(2)); /// dc_component i buraya ekleyemezsin
    thd_val = Number((100*Math.pow(thd_val,0.5) / summ[0]).toFixed(2)); 
    return rms_val, thd_val;

}
var rms_val = 0;
var thd_val = 0;
document.body.addEventListener('click', function(e) {
 rms_val, thd_val= evalulate_magnitudes();
 document.getElementById("RMSValueofPlot").innerHTML = rms_val
 document.getElementById("THDValueofPlot").innerHTML = thd_val
});
