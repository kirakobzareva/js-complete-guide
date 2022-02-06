class Course {
    title;
    length;
    #price;

    get price() {
    return "$" + this.#price ;
    }

    set price(value) {
        if (value < 0) {
            throw "Invalid input";
        }
        this.#price = value;
    }
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    calculate() {
        return this.length / this.#price;
    }

    summory() {
        console.log(`${this.title} lasts ${this.length} weeks and costs ${this.price}`);
    }
}

let cource = new Course("HTML", 5, 10500);
let cource1 = new Course("CSS", 4, 8400);

// console.log(cource);
// console.log(cource1);

 cource.summory();
// cource1.summory();
// console.log(cource.calculate());
// console.log(cource1.calculate());


class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}


let cource2 = new PracticalCourse("JS", 9, 15400, 9);
// console.log(cource2);
// cource2.summory();

class TheoreticalCourse extends Course {
    //конструктор не нужен, потому что будет конструктор с Cource

    publish() {
        console.log("Print something to the console");
    }
}


let cource3 = new TheoreticalCourse("C++", 19, 5400);
// cource3.publish();
// cource3.summory();
