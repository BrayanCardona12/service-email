const express = require("express");
const transporter = require("./configEmails");


const app = express();
const port = process.env.PORT || 4055

app.get("/", (req, res) => {
    res.send("<h1>Servicio Send Email. 📫</h1>")
})

app.post("/send/:email/:cod", async function (req, res) {

    res.header('Access-Control-Allow-Origin', '*')
    const { email, cod } = req.params

    try {
        await transporter.sendMail(
            {
                from: "SGVC Company <ivancardona435@gmail.com>",
                to: email,
                subject: 'Código de Verificación',
                html: `<div style="padding: 0; box-sizing: border-box; margin: 0; font-family: Arial, Helvetica, sans-serif;">
                <h2 style="text-align: center;max-width: 676px;width: 90%;margin: 0 auto;background-color: #f5f5f5;padding: 10px 0;border-bottom: 1px solid #000;">Código de Seguridad</h2>
                <div style="background-color: #cacaca8e;padding: 20px;text-align: justify;max-width: 635px;width: 90%;margin: 0 auto;">
                    <div>
                        <h3 style="color: #1c1d1f;">Estimado Usuario</h3>
                        <p style="color: #1c1d1f; font-size: 16px;">Para garantizar la seguridad de tu cuenta y proteger tus
                            datos, hemos
                            iniciado un proceso de verificación.</p>
                        <p>Por favor, utiliza el siguiente código de seguridad de 5 dígitos en el formulario correspondiente
                            para completar la
                            verificación: </p>
                        <h3 style="color: #212121;font-size: 15px;text-transform: uppercase;">Código de Seguridad: <span style="color: #000;background-color: #f7f7f7;">${cod}</span></h3>
                    </div>
                    <div>
                        <p style="font-size: 14px;">Este código es de uso único y estará vigente durante los próximos 30
                            minutos. Si no has iniciado
                            este proceso o tienes alguna pregunta, contáctanos de inmediato.</p>
                        <p style="font-size: 14px;">Gracias por tu cooperación esto nos ayuda a mantener la seguridad de tu
                            cuenta.</p>
                        <p>Atentamente,</p>
                        <p style="color: #808080; font-weight: 700;">SGVC Company</p>
                    </div>
                </div>
            </div>`
            }
        )
    } catch (error) {
        console.log(error.message);
    }

    res.status(200).json({ ok: true, message: 'Código enviado con exito' })

})

app.listen(port, () => {
    console.log("Listening...")
})


