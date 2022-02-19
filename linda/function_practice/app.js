function add_section(function_name) {
    let div = document.getElementById("generated-from-javascript");
    div.appendChild(document.createElement("hr"));
    let h2 = document.createElement("h2");
    h2.className = "monospace";
    h2.innerHTML = function_name;
    div.appendChild(h2);

    let test_case_div = document.createElement("div");
    test_case_div.className = "tests";
    test_case_div.id = function_name + "-tests";
    div.appendChild(test_case_div);
}

function display_tests(tuples, function_name) {

    add_section(function_name);

    let function_handle = this[function_name];
    let ol = document.createElement("ol");
    for (test_case of tuples) {
        let li = document.createElement("li");
        let status = "";
        if (function_handle(test_case[0]) === test_case[1]) {
            li.className = "test-passed";
            status = "✅ PASSED"
        } else {
            li.className = "test-failed";
            status = "❌ FAILED"
        }
        let common_part = function_name + "(" + test_case[0] + 
        ") == ";

        li.innerHTML = status + ": Expected " + common_part + test_case[1] + ". " + 
            "Got " + common_part + function_handle(test_case[0]) + ". ";
        ol.appendChild(li);
    }
    let div = document.getElementById(function_name + "-tests");
    div.appendChild(ol);
}

var numeropositivo_test_cases = [
    [-7, false],
    [8, true],
    [0, false],
    [-3.4, false],
    [100001, true]
]

var isEven_test_cases = [
    [6, true],
    [0, true],
    [6.4, false],
    [7, false],
    [100001, false],
    [100, true]
]

var findMax_test_cases = [
    [[0,1], 1],
    [[1,2,3,4,0,10,15,2], 15],
    [[1,2,-33,4,0,10,15,2], 15],
    [[-10, -4, -4, -3, -200], -3],
    [[-100001, 0,1], 1]
]

var sumUpTo_test_cases = [
    [6, 21],
    [7, 28],
    [4, 10],
    [56, 1596]
]


var isOdd_test_cases = [
    [6, false],
    [0, false],
    [6.4, false],
    [7, true],
    [100001, true],
    [100, false]
]

var containsA_test_cases = [
    ["xkcd", false],
    ["Marek", true],
    ["Amy", true],
    ["Linda", true],
    ["Simon", false]
]

var sumUpToForLoop_test_cases = sumUpTo_test_cases;

let function_names = ["containsA", "isOdd", "numeropositivo", "isEven", "findMax",
    "sumUpTo", "sumUpToForLoop"]

for (fn of function_names) {
    display_tests(this[fn + "_test_cases"], fn);
}
