"use strict";

(function () {

    var kid =

        '<div <div class="kids col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2">\n ' +
        '  <div class="thumbnail">\n' +
        '    <img src="PUT-HERE-kid-IMAGE" alt="">\n' +
        '<h5><p>PUT-HERE-kid-name</p></h5>\n' +
        '    </div>\n' +
        '    <div class="caption">\n' +
        '      <h5 class="pull-right">$PUT-HERE-kid-age</h4>\n' +

        '      <h5><p>PUT-HERE-kid-color</p></h5>\n' +
        '   <p>PUT-HERE-kid-food</p>\n'
    '       </div>\n' +

    '    </div>\n' +
    '  </div>\n' +
    '</div>';

    function Kid(obj) {
        this.url = obj.url;
        this.name = obj.name;
        this.age = obj.age;
        this.color = obj.color;
        this.food = obj.food;

    }
    Kid.prototype.toHTML = function () {
        var model = kid
            .replace("PUT-HERE-kid-IMAGE", this.url)
            .replace("PUT-HERE-kid-name", this.name)
            .replace("PUT-HERE-kid-age", this.age)
            .replace("PUT-HERE-kid-color", this.color)
            .replace("PUT-HERE-kid-food", this.food)

        return model;

    }

    function dsiplayKids(kidsList) {
        kidsList.forEach(function (kid) {
            $('#container').append(kid.toHTML());

        });
    }

    $.getJSON("kids.json", function (data) {
        var kids = [];

        data.forEach(function (obj) {
            var kid = new Kids(obj);
            kids.push(kid);
        })
        dsiplayKids(kids);
    });




});