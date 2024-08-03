var table = [];

function Update() {
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[0].length; j++) {
            table[i][j].id = `${table[i][j].id[0]}${i}`;
        }
    }
}

function DeleteRow(elem) {
    var row = parseInt(elem.id.substring(1));
    elem.parentNode.parentNode.remove();
    table.splice(row, 1);
    Update();
}

function LockRow(elem) {
    if (elem.innerText == "Lock") {
        var row = parseInt(elem.id.substring(1));
        document.getElementById(`a${row}`).disabled=true;
        document.getElementById(`g${row}`).disabled=true;
        document.getElementById(`m${row}`).disabled=true;
        elem.innerText = "Unlock";
    }
    else {
        var row = parseInt(elem.id.substring(1));
        document.getElementById(`a${row}`).disabled=false;
        document.getElementById(`g${row}`).disabled=false;
        document.getElementById(`m${row}`).disabled=false;
        elem.innerText = "Lock";
    }
}

function AddRows(rows) {
    var calcbody = document.getElementById("calcbody");
    for (let i = 0; i < rows; i++) {
        var row = [];

        var r = document.createElement("tr");
        r.id = `r${i}`
        calcbody.appendChild(r);
        row.push(r);

        var cell0 = document.createElement("td");
        var a = document.createElement("input");
        a.type = "text";
        a.id = `a${i}`
        r.appendChild(cell0);
        cell0.appendChild(a);
        row.push(a);

        var cell1 = document.createElement("td");
        var g = document.createElement("input");
        g.type = "number";
        g.id = `g${i}`
        r.appendChild(cell1);
        cell1.appendChild(g);
        row.push(g);

        var cell2 = document.createElement("td");
        var m = document.createElement("input");
        m.type = "number";
        m.id = `m${i}`
        r.appendChild(cell2);
        cell2.appendChild(m);
        row.push(m);

        var cell3 = document.createElement("td");
        var t = document.createElement("button");
        t.type = "button";
        t.id = `t${i}`
        t.innerText = "Trash";
        t.addEventListener("click", function() {DeleteRow(this);});
        r.appendChild(cell3);
        cell3.appendChild(t);
        row.push(t);

        var cell4 = document.createElement("td");
        var l = document.createElement("button");
        l.type = "button";
        l.id = `l${i}`
        l.innerText = "Lock";
        l.addEventListener("click", function() {LockRow(this);});
        r.appendChild(cell4);
        cell4.appendChild(l);
        row.push(l);

        table.push(row);
    }

    Update();
}