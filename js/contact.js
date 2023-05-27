// validasi

let name = "hilman";

function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  if (name == "") {
    return alert("Mohon nama diisi dulu ya...");
  } else if (email == "") {
    return alert("Emailnya diisi juga ya...");
  } else if (phone == "") {
    return alert("Jangan lupa no telp nya ya..");
  } else if (subject == "") {
    return alert("Silahkan dipilih sunbjectnya..");
  } else if (message == "") {
    return alert("Mohon pesannya diisi ya...");
  }

  let emailReceiver = "hilmanimaduddin179@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Silakan kontak saya di nomor ${phone}, terima kasih.`;
  a.click();

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);

  let emailer = {
    name,
    email,
    phone,
    subject,
    message,
  };

  console.log(emailer);
  console.log(a);
}
