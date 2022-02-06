
function display_isPositive_tests(tuples) {
    let ol = document.createElement("ol");
    for (test_case of tuples) {
        let li = document.createElement("li");
        let status = "";
        if (isPositive(test_case[0]) === test_case[1]) {
            li.className = "test-passed";
            status = "✅ PASSED"
        } else {
            li.className = "test-failed";
            status = "❌ FAILED"
        }
        let common_part = "isPositive(" + test_case[0] + 
        ") == ";

        li.innerHTML = status + ": Expected " + common_part + test_case[1] + ". " + 
            "Got " + common_part + isPositive(test_case[0]) + ". ";
        ol.appendChild(li);
    }
    let div = document.getElementById("isPositive-tests");
    div.appendChild(ol);
}

test_cases = [
    [-7, false],
    [8, true],
    [0, false],
    [-3.4, false],
    [100001, true]
]

display_isPositive_tests(test_cases);
