$(document).ready(function() {

    var dinosaurs = [];


    function writeDOM() {
        var domString = "";
        for (var i = 0; i < dinosaurs.length; i++) {
            domString += `<h1>${dinosaurs[i].type}</h1>`;
        }
        $("#promises").append(domString);
    }


    // $.ajax("./db/dinosaurs1.json").done(function(data1){
    //     console.log("data1", data1.dinosaurs1);
    //     dinosaurs = data1.dinosaurs1
    //     $.ajax("./db/dinosaurs2.json").done(function(data2){
    //         console.log("data2", data2.dinosaurs2);
    //         data2.dinosaurs2.forEach(function(dino){
    //             dinosaurs.push(dino);
    //         })
    //         $.ajax("./db/dinosaurs3.json").done(function(data3){
    //         console.log("data3", data3.dinosaurs3);
    //         data3.dinosaurs3.forEach(function(dino){
    //             dinosaurs.push(dino);
    //         })
    //         writeDOM(); 
    //     }).fail(function(error3){
    //         console.log(error3);
    //     })
    //     }).fail(function(error2){
    //         console.log(error2);
    //     })
    // }).fail(function(error1){
    //     console.log(error1);
    // })


    var firstDinosaurJSON = function() { // This goes in a IIFE, like a getter
        return new Promise(function(resolve, reject) {
            $.ajax("./db/dinosaurs1.json").done(function(data1) {
                resolve(data1.dinosaurs1);
            }).fail(function(error) {
                reject(error1);
            })
        })
    }

    var secondDinosaurJSON = function() { // This goes in a IIFE, like a getter
        return new Promise(function(resolve, reject) {
            $.ajax("./db/dinosaurs2.json").done(function(data2) {
                resolve(data2.dinosaurs2);
            }).fail(function(error) {
                reject(error2);
            })
        })
    }

    var thirdDinosaurJSON = function() { // This goes in a IIFE, like a getter
        return new Promise(function(resolve, reject) {
            $.ajax("./db/dinosaurs3.json").done(function(data3) {
                resolve(data3.dinosaurs3);
            }).fail(function(error) {
                reject(error3);
            })
        })
    }

    firstDinosaurJSON().then(function(jsonData1) { // .then grabs resolve		// This goes in a DOMhandler, like a setter
        console.log(jsonData1);
        dinosaurs = jsonData1;
        writeDOM();
    }).catch(function(jsonDataFail1) {
        console.log(jsonDataFail1); // .catch grabs reject
    });


    // More class notes go here...



});