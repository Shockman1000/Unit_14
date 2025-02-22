// from data.js
const tableData = data;

// YOUR CODE HERE!
const pageData = d3.select("tbody");

function Build_table_data(data,colums){
    pageData.html("");

    data.forEach((dataRow) =>{
        const row = pageData.append("tr");

        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
              cell.text(val);
        }); 
    });
};


function handleClick() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("datetime");
  filter = input.value.toUpperCase();
  table = document.getElementById("pageData");
  console.log(table)
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

d3.selectAll("#filter-btn").on("click", handleClick);
Build_table_data(tableData);