const usuarios = [
    {
      mail: "facundo@gmail.com",
      pass: "123456789",
    },
    {
      mail: "ana@gmail.com",
      pass: "987654321",
    },
    {
      mail: "juan@gmail.com",
      pass: "juanjuan",
    },
  ];
  
  
  const mailLogin = document.getElementById("emailLogin");
  const  passLogin = document.getElementById("passwordLogin");
  const  recordar = document.getElementById("recordarme");
  const  btnLogin = document.getElementById("login");
  const  modalEl = document.getElementById("modalLogin");
  const  modal = new bootstrap.Modal("modalEl");
  const  toggles = document.querySelectorAll(".toggles");
  
  function guardarDatos(usuario, storage) {
    const user = {
      user: usuario.mail,
      pass: usuario.pass,   
    };
  
    storage.setItem("user", JSON.stringify(user));
  }
  
  function logOut() {
    localStorage.clear();
    sessionStorage.clear();
  }
  
  function datoGuardado(storage) {
    return JSON.parse(storage.getItem("user"));
  }

  function validacion(userMail, user, pass) {
    let encontrar = userMail.find((userMail) => userMail.mail == user);
  
    if (typeof encontrar === "undefined") {
      return false;
    } else {
      if (encontrar.pass != pass) {
        return false;
      } else {
        return encontrar;
      }
    }
  }

  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (!mailLogin.value || !passLogin.value) {
      alert("Todos los campos deben ser completados");
    } else {
      let data = validacion(usuarios, mailLogin.value, passLogin.value);
      if (!data) {
        alert("Usuario y/o contraseña incorrectos");
      } else {
        
        if (recordar.checked) {
          guardarDatos(data, localStorage);
        } else {
          guardarDatos(data, sessionStorage);
        }
  
        console.log(data)
  
      }
    }
  });

  btnLogout.addEventListener("click", () => {
    logOut();
    cambiarClass(toggles, "d-none");
  });
  
  existe(datoGuardado(localStorage));
