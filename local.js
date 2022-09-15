let t1 = document.getElementById("tou-form");
const t2 = () => {
  let t3 = localStorage.getItem("tou-ent");
  if (t3) {
    t3 = JSON.parse(t3);
  } else {
    t3 = [];
  }
  return t3;
};

let t4 = t2();
const t5 = () => {
  const t6 = t2();
  const t7 = t6
    .map((entry) => {
      const nametou = `<td class='border px-4 py-2'>${entry.name}</td>`;
      const emailtou = `<td class='border px-4 py-2'>${entry.email}</td>`;
      const passwordtou = `<td class='border px-4 py-2'>${entry.password}</td>`;
      const dobtou = `<td class='border px-4 py-2'>${entry.dob}</td>`;
      const acceptTermstou = `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
      const rowtou = `<tr>${nametou} ${emailtou} ${passwordtou} ${dobtou} ${acceptTermstou}</tr>`;
      return rowtou;
    })
    .join("\n");
  const table = `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${t7} </table>`;
  let details = document.getElementById("tou-ent");
  details.innerHTML = table;
};
const t8 = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndConditions =
    document.getElementById("acceptTerms").checked;
  const entry = {
    name,
    email,
    password,
    dob,
    acceptedTermsAndConditions,
  };
  t4.push(entry);
  localStorage.setItem("tou-ent", JSON.stringify(t4));
  t5();
};
t1.addEventListener("submit", t8);
t5();
//----------------------------------------------------------DATE VALIDATION-----------------------------------------

function valdatecondition() {
  let element = document.getElementById("dob");
  const dob = document.getElementById("dob").value;
  let tou1 = new Date(dob);
  var todaydate = new Date();
  var age = parseInt(todaydate.getFullYear()) - parseInt(tou1.getFullYear());
  if (
    todaydate.getMonth() < tou1.getMonth() ||
    (todaydate.getMonth() === tou1.getMonth() &&
      todaydate.getDate() < tou1.getDate())
  )
    age--;
  if (!(age > 18 && age < 55)) {
    element.setCustomValidity("age must be in between 18 and 55");
    element.reportValidity();
  } else {
    element.setCustomValidity("");
  }
}

//=======================================email=========================================
const t9 = document.getElementById("email");

t9.addEventListener("input", () => validate(t9));

function validate(t10) {
  if (t10.validity.typeMismatch) {
    t10.setCustomValidity("Wrong email format");
    t10.reportValidity();
  } else {
    t10.setCustomValidity("");
  }
}
