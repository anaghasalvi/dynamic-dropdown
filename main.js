
var treeObj = [
    {
        "name": "A",
        "value": "A",
        "child": [
            {
                "name": "A1",
                "value": "A1"
            },
            {
                "name": "A2",
                "value": "A2",
                "child": [
                    {
                        "name": "A2.1",
                        "value": "A2.1"
                    },
                    {
                        "name": "A2.2",
                        "value": "A2.2",
                        "child": [
                            {
                                "name": "A2.2.1",
                                "value": "A2.2.1"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "A3",
                "value": "A3"
            }
        ]
    },
    {
        "name": "B",
        "value": "B",
        "child": [
            {
                "name": "B1",
                "value": "B1"
            },
            {
                "name": "B2",
                "value": "B2"
            },
            {
                "name": "B3",
                "value": "B3"
            }
        ]
    },
    {
        "name": "C",
        "value": "C",
        "child": [
            {
                "name": "C1",
                "value": "C1"
            },
            {
                "name": "C2",
                "value": "C2"
            }
        ]
    },
    {
        "name": "D",
        "value": "D",
        "child": [
            {
                "name": "D1",
                "value": "D1",
                "child": [
                    {
                        "name": "D1.1",
                        "value": "D1.1"
                    },
                    {
                        "name": "D1.2",
                        "value": "D1.2"
                    }
                ]
            }
        ]
    }
];
window.onload = function () {
    var parentNode = document.getElementById("parentEle");
    var childNode = document.getElementById("childEle");
    var childWrap = document.getElementsByClassName("child-wrap");
    childWrap[0].style.display = "none";

    for (var parents of treeObj) {
        parentNode.options[parentNode.options.length] = new Option(parents['name'], parents['value']);

        if (parents.hasOwnProperty('child')) {
            parentNode.onchange = function () {
                let selIndex = parentNode.selectedIndex;
                let pOptions = parentNode.options;
                var parentIndex = pOptions[selIndex].index;
                childNode.length = 1;
                if (this.selectedIndex < 1) return;
                var treeIndex = {}
                treeIndex = treeObj[parentIndex - 1];
                if (treeIndex.hasOwnProperty('child')) {
                    childWrap[0].style.display = "block";
                    for (var childData of treeIndex['child']) {
                        childNode.options[childNode.options.length] = new Option(childData['name'], childData['value']);
                    }
                }

            }
            parentNode.onchange();
        }
    }
}
