
        function logar() {
            var login = document.getElementById('login').value;
            var senha = document.getElementById('senha').value;
            var email = document.getElementById('email').value;
            var telefone = document.getElementById('telefone').value;

            if (login === "" || senha === "" || email === "" || telefone === "") {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("insira um e-mail válido. (Precisa possuir o @ e o .)");
                return;
            }

            if (telefone.length < 8 || isNaN(telefone)) {
                alert("O telefone precisa ter pelo menos 8 digitos.");
                return;
            }
        }


        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js"; 
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyAqKdK-yofAnIMdvI4erZGS2IwPsSH3ZBw",
            authDomain: "d-sistemas-site.firebaseapp.com",
            databaseURL: "https://d-sistemas-site-default-rtdb.firebaseio.com",
            projectId: "d-sistemas-site",
            storageBucket: "d-sistemas-site.firebasestorage.app",
            messagingSenderId: "597708102995",
            appId: "1:597708102995:web:3a10a128bdec503faed5a6",
            measurementId: "G-MWDLL5YWHB"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        set(ref(db, 'usuários/' + login), {
            login: login,
            senha: senha,
            email: email,
            telefone: telefone
        })
        then(() => {
            alert('Cadastro realizado com sucesso!');
            location.href = "home.html";

        })
            .catch((error) => {
                console.error("erro ao salvar.", error);
                Alert("erro ao cadastrar.");
            }
            )

