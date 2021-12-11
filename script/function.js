var UserName = "dyaa"
var PassWord = 1998;

function login(userName, passWord) {
    if (userName == UserName) {
        if (passWord == PassWord) {
            console.log("login sucessfully")
        } else {
            console.log("wrong password");
        }
    } else {
        console.log("does not exist")
    }
}
login("jaafer , 1998")
login("dyaa", 468798)
login("dyaa", 1998)

var a = 5
var b = 10
var c = 15
var list = [];

function storevariables() {
    console.log("before =>", list);
    list[0] = a;
    list[1] = b;
    list[2] = c;
    console.log("after =>", list);
}

function fillarray() {
    var anotherlist = [];
    for (var x = 1; x <= 10; x++) {
        //anotherlist[x] = x * 2 + 2;
        //anotherlist;push[x] = x*2;
        anotherlist.push(x)


    }
    console.log(anotherlist);
}
fillarray()