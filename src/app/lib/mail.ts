const ENDPOINT = "api/sendEmail";

interface Mail {
  name: string;
  phoneNumber?: string;
  cities: "City1" | "City2" | "City3";
  token: string;
}

export async function sendMail(mail: Mail) {
  const body = JSON.stringify({
    name: mail.name,
    // email: mail.email,
    // subject: mail.subject,
    // message: mail.message,
    phoneNumber: mail.phoneNumber,
    cities: mail.cities,
  });

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${mail.token}`,
      },
    });
    return res.status === 200;
  } catch (error) {
    console.log(error);
    return false;
  }
}
