var a = "Prakash";
console.log(a);
var arr = ["XYZ", "ABC"];
console.log(arr);
var list = [1, 2, 3, 4, 5];
console.log(list[0]);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var C;
C = Color.green;
console.log(C);
// tuple
var tup = ["hello", "1,2,3,4"];
console.log(tup);
