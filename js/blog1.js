let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let project = document.getElementById("input-project").value;
  let startDate = new Date(document.getElementById("input-date1").value);
  let endDate = new Date(document.getElementById("input-date2").value);
  let description = document.getElementById("description").value;
  let image1 = document.getElementById("upload-image").files;

  if (project === "") {
    return alert("Mohon projeknya diisi dulu ya..");
  } else if (startDate === "") {
    return alert("Mohon tanggalnya diisi dulu ya...");
  } else if (endDate === "") {
    return alert("Mohon tanggalnya diisi dulu ya...");
  } else if (description === "") {
    return alert("Mohon deskripsinya diisi dulu ya...");
  } else if (image1 == 0) {
    return alert("Mohon fotonya diupload ya...");
  }

  const nodeJs = '<i class="fa-brands fa-node-js" style="color: #000000;"></i>';
  const reactJs = '<i class="fa-brands fa-react" style="color: #000000;"></i>';
  const nextJs =
    '<i class="fa-brands fa-jsfiddle" style="color: #050505;"></i>';
  const typeScript =
    '<i class="fa-brands fa-html5" style="color: #000000;"></i>';

  let Nodejscek = document.getElementById("checkbox1").checked ? nodeJs : "";
  let Nextjscek = document.getElementById("checkbox2").checked ? nextJs : "";
  let Reactjscek = document.getElementById("checkbox3").checked ? reactJs : "";
  let Typescriptcek = document.getElementById("checkbox4").checked
    ? typeScript
    : "";

  console.log(Nodejscek, Nextjscek, Reactjscek, Typescriptcek);

  let waktu = Math.abs(endDate - startDate);
  let bulan = Math.floor(waktu / (1000 * 60 * 60 * 24 * 30));
  let hari = Math.floor(waktu / (1000 * 60 * 60 * 24)) % 30;

  image1 = URL.createObjectURL(image1[0]);
  console.log(image1);

  let cobaa = {
    project,
    startDate,
    endDate,
    description,
    image1,
    Nodejscek,
    Nextjscek,
    Reactjscek,
    Typescriptcek,
    bulan,
    hari,
  };

  console.log(cobaa);

  dataBlog.push(cobaa);
  console.log(dataBlog);

  rendercobaa();
}

function rendercobaa() {
  document.getElementById("blog-under").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("blog-under").innerHTML += `
    <div class="bawah">
      <div class="under">
        <div class="list1">
         <img src="${dataBlog[index].image1}" alt="anak kecil" />
        </div>
        <div class="list2">
         <h4><a href="#web">${dataBlog[index].project}</a></h4>
          <p>Durasi : ${dataBlog[index].bulan} Bulan, ${dataBlog[index].hari} Hari</p>
          <p>
            ${dataBlog[index].description}
          </p>
        </div>
        <div class="list3">
          ${dataBlog[index].Nodejscek}
          ${dataBlog[index].Nextjscek}
          ${dataBlog[index].Reactjscek}
          ${dataBlog[index].Typescriptcek}
        </div>
        <div class="list4">
         <button>Edit</button>
         <button>Delete</button>
       </div>
      </div>
    </div>
    `;
  }
}
