
class Coordinates {
    constructor(name, coordinates, elementId) {

        this.name = name;
        this.coordinates = coordinates;
        this.elementId = elementId;

        this.showElementCoordinates = function () {
            const objectTable = document.getElementById(this.elementId);
            for (let coord of this.coordinates.geometry.coordinates) {
                objectTable.innerHTML += "<tr>" + "<td>" + coord[0] + "</td>" + "<td>" + coord[1] + "</td>" + "</tr>";
            }
        };

        this.deleteElementCoordinates = function () {
            const element = document.getElementById(this.elementId);
            element.innerHTML = "";
        };

        this.setStorageCoordinates = function () {
            localStorage.setItem(this.name, JSON.stringify(this.coordinates));
        };

        this.getStorageCoordinates = function () {
            localStorage.getItem(this.name);
        };

        this.deleteStorageCoordinates = function () {
            localStorage.removeItem(this.name);
        };

    }
}


var coordinates = {
    "type": "Feature",
    "properties": {
        "name": "José Carlos Fortunato dos Reis Júnior",
        "address": "Rua Antônio Fernandes Primo, 605",
        "city": "Guanambi",
        "state": "Bahia"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [
            [793921.517, 8468772.592],
            [793914.089, 8468771.559],
            [793910.125, 8468769.437],
            [793882.095, 8468746.523],
            [793856.669, 8468723.533],
            [793839.983, 8468707.319],
            [793837.458, 8468700.283],
            [793904.810, 8468596.813],
            [794023.283, 8468730.406],
            [794026.035, 8468732.418],
            [794028.939, 8468734.621],
            [794032.446, 8468737.011],
            [794034.765, 8468739.327],
            [794037.629, 8468741.723],
            [794046.293, 8468746.543],
            [794047.649, 8468748.177],
            [794048.823, 8468750.409],
            [794049.865, 8468753.119],
            [794050.748, 8468756.254],
            [794051.545, 8468758.835],
            [794051.511, 8468760.143],
            [794047.543, 8468767.878],
            [794050.445, 8468772.131],
            [794051.926, 8468778.306],
            [794053.784, 8468783.894],
            [794057.210, 8468787.616],
            [794057.865, 8468793.722],
            [794058.565, 8468797.734],
            [794062.279, 8468802.887],
            [794062.033, 8468805.636],
            [794058.303, 8468807.204],
            [794055.667, 8468808.360],
            [794053.023, 8468810.185],
            [794052.598, 8468811.394],
            [794053.809, 8468815.410],
            [794055.430, 8468820.517],
            [794057.383, 8468825.950],
            [794059.394, 8468830.359],
            [794061.659, 8468835.376],
            [794063.318, 8468839.904],
            [794064.740, 8468842.510],
            [794067.680, 8468846.610],
            [794069.938, 8468849.857],
            [794072.363, 8468852.901],
            [794074.232, 8468855.905],
            [794071.196, 8468858.038],
            [794067.398, 8468860.132],
            [794064.595, 8468861.785],
            [794062.556, 8468863.403],
            [794060.094, 8468864.739],
            [794047.094, 8468867.857],
            [794024.019, 8468870.502],
            [794011.511, 8468862.201],
            [794005.495, 8468858.931],
            [794000.112, 8468856.684],
            [793995.102, 8468854.571],
            [793992.510, 8468853.191],
            [793990.570, 8468851.531],
            [793988.685, 8468849.766],
            [793986.817, 8468847.288],
            [793985.293, 8468844.872],
            [793970.738, 8468831.650],
            [793966.302, 8468828.518],
            [793961.163, 8468825.363],
            [793954.760, 8468820.270],
            [793946.541, 8468813.040],
            [793941.915, 8468808.802],
            [793937.132, 8468804.997],
            [793931.424, 8468799.805],
            [793927.901, 8468796.596],
            [793923.828, 8468792.758],
            [793919.762, 8468788.746],
            [793916.228, 8468785.358],
            [793917.581, 8468782.436],
            [793918.849, 8468779.933],
            [793921.517, 8468772.592]
        ]
    }
}

var coordinates1 = new Coordinates('coordinates', coordinates, 'table');

function show () {
    coordinates1.showElementCoordinates();
}

function setStorage(){
    coordinates1.setStorageCoordinates();
}

function clearElement(){
    coordinates1.deleteElementCoordinates();
}

function clearStorage(){
    coordinates1.deleteStorageCoordinates();
}
