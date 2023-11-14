function enviarFormulario() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("telefone");

    if (nameInput && emailInput && telefoneInput) {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            telefone: telefoneInput.value
        };

        fetch("https://apigenerator.dronahq.com/api/zQXrg3GU/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro de rede - ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Resposta da API", data);
        })
        .catch(error => {
            console.log("Erro ao enviar o formulário", error);
        });
    }
}