function Max_out_of_three(A, B, C) {
    if (A === B && B === C) {
        return -1;
    }
    return Math.max(A, B, C);
}
function findSndSmallest(X, Y, Z) {
    // Method 1: Sort them and get the index 1 element
    const arr = [X, Y, Z];
    arr.sort((a, b) => a - b);
    return arr[1];
}
function Triangle_Check(A, B, C) {
    if (A > 90 || B > 90 || C > 90) {
        return "obtuse";
    } else {
        return "acute";
    }
}
