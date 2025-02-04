<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars(strip_tags($_POST['nome']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $numero = htmlspecialchars(strip_tags($_POST['num']));
    $mensagem = htmlspecialchars(strip_tags($_POST['msg']));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("E-mail inválido.");
    }

    $para = "marlllonemanuel@gmail.com";
    $assunto = "Contato do Portfólio";

    $corpo = "Nome: $nome\n";
    $corpo .= "E-mail: $email\n";
    $corpo .= "Telefone: $numero\n";
    $corpo .= "Mensagem: \n$mensagem\n";

    $cabecalho = "From: marlllonemanuel@gmail.com\n"; // Agora usando seu próprio e-mail
    $cabecalho .= "Reply-To: $email\n";
    $cabecalho .= "Content-type: text/plain; charset=UTF-8\n";
    $cabecalho .= "X-Mailer: PHP/" . phpversion();

    if (mail($para, $assunto, $corpo, $cabecalho)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar mensagem.";
    }
} else {
    echo "Método inválido.";
}
?>
