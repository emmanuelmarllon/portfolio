<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $numero = addslashes($_POST['num']);
    $mensagem = addslashes($_POST['msg']);
    
    $para = "marlllonemanuel@gmail.com";
    $assunto = "Contato do Portfólio";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$numero";

    $cabecalho = "From: $email"."\n"."Reply-to: ".$email."\n"."X-Mailer:PHP/".phpversion();

    if (mail($para, $assunto,$corpo,$cabecalho)) {
        echo ("Mensagem enviada com sucesso!");
    } else {
        echo "Erro ao enviar mensagem.";
    }
?>