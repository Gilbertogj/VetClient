$(document).ready(async() => {
    const data = await fetch("http://localhost:8000/api/owners/",{
        headers:{
            Authorization: "Token f5a370739f4a49877ede7c9233428de427829f9e",
        },
    });
    const json = await data.json();
    const owners = json.map((owner) => {
    console.log(owner);
    return `
      <tr>
        <th scope="row">${owner.id}</th>
        <td>${owner.first_name}</td>
        <td>${owner.last_name}</td>
      </tr>
    `;
  });
  console.log(owners);
  $("#owners-list").append(owners);
  console.log(data, json);
});