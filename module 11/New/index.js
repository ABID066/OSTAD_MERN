class myClass {
     myMethod(p1, p2, p3) {
        if (arguments.length === 1) {
            console.log('Received one argument:', p1);
        } else if (arguments.length === 2) {
            console.log('Received two arguments:', p1, p2);
        } else if (arguments.length === 3) {
            console.log('Received three arguments:', p1, p2, p3);
        }
    }

}

let obj = new myClass();
obj.myMethod("name");
obj.myMethod(1000);
obj.myMethod(true);