var getHotelRoom = function (hotelRoom) {
    if (hotelRoom.occupied) {
        console.log("occupied");
        console.log("the facility is " + hotelRoom.facility);
    }
    else {
        console.log('vacant');
    }
};
getHotelRoom({ occupied: false, vacant: true, price: 2000, facility: ["soap", 'tv', 'towel', 'twin-bed'] });
var myBox = {
    contents: 'My Box',
    height: '200px',
    width: '200px',
    size: 300
};
// 2 ways check the generic object type is a string
if (myBox.contents === "string") {
    console.log(myBox.contents.toLocaleUpperCase());
}
console.log(myBox.contents.toLocaleUpperCase());
var box = {
    contents: 'new box'
};
// generic function
function setContents(box, newContents) {
    box.contents = newContents;
    console.log(box.contents);
}
setContents({ contents: 'boxes' }, 'new contents');
// generic array types;
// tuple types
var toples;
var str = toples[0], num = toples[1];
console.log(str = 'my str');
