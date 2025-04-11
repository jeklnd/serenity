import sg from "@sendgrid/mail";
import fetch from 'node-fetch'; // Changed to import

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { recaptcha_token, first, last, email, phone, message } = req.body;

        // Step 1: Validate the reCAPTCHA token with Google
        const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify`;
        const recaptchaParams = new URLSearchParams({
            secret: RECAPTCHA_SECRET_KEY,
            response: recaptcha_token,
        });

        try {
            const recaptchaResponse = await fetch(recaptchaUrl, {
                method: "POST",
                body: recaptchaParams,
            });
            const recaptchaData = await recaptchaResponse.json();

            if (!recaptchaData.success) {
                return res.status(400).json({ message: "reCAPTCHA validation failed." });
            }

            // Step 2: Proceed with SendGrid email if reCAPTCHA is valid
            sg.setApiKey(process.env.SENDGRID_API_KEY);
            const date = new Date();
            const today = date.toLocaleDateString("en-US");
            const emailMessage = {
                to: "robert@serenityhomerepair.com", // Your email address
                from: "robert@serenityhomerepair.com", // Your email address
                subject: `New Lead: ${first} ${last} – ${today}`,
                html: `
                    <h2>New Lead: ${first} ${last} – ${today}</h2>
                    <p>A lead submitted the following information:<br/><br/>
                    First: <strong>${first}</strong><br/>
                    Last: <strong>${last}</strong><br/>
                    Email: <strong>${email}</strong><br/>
                    Phone: <strong>${phone}</strong><br/>
                    Message: <strong>${message}</strong><br/><br/>`,
            };

            await sg.send(emailMessage);
            console.log("Sent message");

            // Step 3: Respond with success after email is sent
            res.status(200).json({ message: "Form submitted successfully!" });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
