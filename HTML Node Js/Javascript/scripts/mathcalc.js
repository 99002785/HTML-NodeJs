function add(v1, v2) {
    return v1 + v2;
}

function sub(v1, v2) {
    return v1 - v2;
}

function mul(v1, v2) {
    return v1 * v2;
}

function div(v1, v2) {
    return v1 / v2;
}

function sqr(v1) {
    return mul(v1, v1);
}

function sqrt(v1) {
    return Math.sqrt(v1);
}

function performOperation(v1, v2, Operation) {
    switch (Operation) {
        case "Addition":
            return add(v1, v2);
        case "Substraction":
            return sub(v1, v2);
        case "Multiplication":
            return mul(v1, v2);
        case "Division":
            return div(v1, v2);
        case "Square":
            return sqr(v1);
        case "Squareroot":
            return sqrt(v1);
        default:
            alert("Invalid Operation");
    }
}