export async function onRequestPost({ request, env }) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") || "No name";
    const email = formData.get("_replyto");
    const message = formData.get("message");

    if (!email || !message) {
      return new Response(JSON.stringify({ status: "error", message: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const apiResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Shayra ProTech <onboarding@resend.dev>",
        to: ["shayraprotech@gmail.com", "m_shaira@yahoo.fr"],
        subject: `New message from ${name}`,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `
      })
    });

    const data = await apiResponse.json();
    if (!apiResponse.ok) throw new Error(JSON.stringify(data));

    return new Response(JSON.stringify({ status: "success", message: "Email sent" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ status: "error", message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
