console.log("Welcome to fetch API......");

async function printData() {
    console.log("Inside printData");
    let response;
    let obj;
    try {
        response = await fetch('https://api.github.com/users');
        obj = await response.json();
        show(obj);
    } catch (error) {
        console.error(error);
    }
}
// printData();

function show(users) {
    console.log("Inside show method");
    let table = document.getElementById("tbl");
    for (let i = 0; i < users.length; i++) {

        let x = users[i];
        console.log(x);
        let row = document.createElement("tr");
        let ulogin = document.createElement("td");
        let uid = document.createElement("td");
        let usite_admin = document.createElement("td");
        let uhtml_url = document.createElement("td");
        let utype = document.createElement("td");

        ulogin.innerHTML = x.login;
        uid.innerHTML = x.id;
        usite_admin.innerHTML = x.site_admin;
        uhtml_url.innerHTML = x.html_url;
        utype.innerHTML = x.type;

        row.appendChild(ulogin)
        row.appendChild(uid)
        row.appendChild(usite_admin)
        row.appendChild(uhtml_url)
        row.appendChild(utype)

        table.appendChild(row)
        if (i == users.length - 1) {
            console.log(typeof(x));
        }

    }
    console.log('show method ends here.....');
}