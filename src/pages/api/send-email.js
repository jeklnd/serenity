import sg from "@sendgrid/mail";

export default async function handler(req, res) {
    sg.setApiKey(process.env.SENDGRID_API_KEY);
    const body = req.body;
    const date = new Date();
    const today = date.toLocaleDateString("en-US");
    const message = {
        to: "robert@serenityhomerepair.com",
        from: "robert@serenityhomerepair.com",
        subject: `New Lead: ${body.first} ${body.last} – ${today}`,
        html: `<h2>New Lead: ${body.first} ${body.last} – ${today}</h2>
        <p>A lead submitted the following information:<br/><br/>
        First: <strong>${body.first}</strong> <br/>
        Last: <strong>${body.last}</strong><br/>
        Email: <strong>${body.email}</strong><br/>
        Message: <strong>${body.message}</strong><br/><br/>`,
    };
    await sg
        .send(message)
        .then(() => {
            console.log("Sent message");
            res.redirect(303, "/success");
        })
        .catch((error) => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body);
            }
            res.status(500).send("Failed to send email");
        });
}
