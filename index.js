const usuarios = [
    {
      nombre: "facundo",
      mail: "facundo@mail.com",
      pass: "123456789",
    },
    {
      nombre: "Ana",
      mail: "ana@mail.com",
      pass: "987654321",
    },
    {
      nombre: "Juan",
      mail: "juan@mail.com",
      pass: "juanjuan",
    },
  ];
  
  
  const mailLogin = document.getElementById("emailLogin"),
    passLogin = document.getElementById("passwordLogin"),
    nombreUsuario = document.getElementById("nombreUsuario"),
    recordar = document.getElementById("recordarme"),
    btnLogin = document.getElementById("login"),
    modalEl = document.getElementById("modalLogin"),
    modal = new bootstrap.Modal("modalEl"),
    toggles = document.querySelectorAll(".toggles");
  
  function guardarDatos(usuario, storage) {
    const user = {
      name: usuario.nombre,
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
  
        modal.hide();
  
      }
    }
  });