function Person(first, last) {
    //this.first = first;
    //this.last = last;
    this.fullName = function() {
        // return this.first + ' ' + this.last;
        return first + ' ' + last;
    };
    this.fullNameReversed = function() {
        // return this.last + ' ' + this.first;
        return last + ' ' + first;
    };
}

var s = new Person("Simon", "Willison");
s.fullName();