const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'brunopena454@gmail.com',
        pass: 'kywa mkfc acwv plwy'
    }
});

app.post('/enviar-email', (req, res) => {
    const { nome, email, assunto, texto } = req.body;

    const mailOptions = {
        from: 'brunopena454@gmail.com',
        to: 'brunopena454@gmail.com',
        subject: assunto,
        text: `Mensagem de: ${nome} <${email}>\n\n${texto}`,
        html: `<p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong><br/>${texto}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro:', error);
        return res.status(500).send('Erro ao enviar e-mail');
        }
        console.log('E-mail enviado:', info.response);
        res.status(200).send('E-mail enviado com sucesso!');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
