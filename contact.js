function getId() {
  
}

function setAppoint() {
  const name= document.getElementById("name")
  const email= document.getElementById("email")
  const doctor= document.getElementById("doctor")
  const date= document.getElementById("date")
  const detail= document.getElementById("detail")
  const hospital= document.getElementById("hospital")
  const appointDiv=document.getElementById("appointDiv")
  const article=document.createElement("article")
  article.innerHTML=` <h2><span class="value">Name:</span> ${name.value}</h2>
                      <p><span class="value">Email:</span> ${email.value} <br>
                      <span class="value">Doctor:</span> ${doctor.value}  <br>
                      <span class="value">Hospital:</span> ${hospital.value} <br>
                      <span class="value">Date:</span> ${date.value}<br>
                      <span class="value">Details:</span> ${detail.value}</p>  `
  appointDiv.appendChild(article)
  article.className="appointmentText"
  name.value=""
  email.value=""
  date.value=""

}

document.getElementById("appoint").addEventListener("click",function () {
    getId();
      setAppoint();               
})