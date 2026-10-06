import { d as defineEventHandler, s as setResponseHeader, g as getHeader, a as getRequestURL, c as createError, r as readRawBody, b as getRequestIP, u as useRuntimeConfig } from '../../nitro/nitro.mjs';
import { Resend } from 'resend';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

function validateContact(input) {
  const source = input && typeof input === "object" && !Array.isArray(input) ? input : {};
  const values = Object.fromEntries(["name", "email", "subject", "phone", "message", "website"].map((key) => [key, typeof source[key] === "string" ? source[key].trim() : ""]));
  const errors = {};
  if (!values.name) errors.name = "Please enter your name.";
  else if (values.name.length > 100 || /[\r\n\x00-\x1f]/.test(values.name)) errors.name = "Use a name of up to 100 characters.";
  if (!values.email || values.email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.message) errors.message = "Please enter a message.";
  else if (values.message.length > 5e3) errors.message = "Keep your message within 5,000 characters.";
  if (values.subject.length > 150 || /[\r\n\x00-\x1f]/.test(values.subject)) errors.subject = "Use a subject of up to 150 characters on one line.";
  if (values.phone.length > 40 || values.phone && !/^[+\d\s().-]+$/.test(values.phone)) errors.phone = "Please enter a valid phone number.";
  return { values, errors };
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function contactEmail(values) {
  const entries = [["Name", values.name], ["Email", values.email], ["Phone", values.phone || "Not provided"], ["Subject", values.subject || "Portfolio inquiry"], ["Message", values.message]];
  return {
    subject: "Portfolio Contact \u2014 " + (values.subject || values.name),
    text: "New Portfolio Message\n\n" + entries.map(([label, value]) => label + "\n" + value).join("\n\n"),
    html: '<!doctype html><html><body style="font-family:Arial,sans-serif;background:#f2efe6;color:#171a18;padding:32px"><h1 style="font-size:24px">New Portfolio Message</h1>' + entries.map(([label, value]) => '<h2 style="font-size:14px;margin-top:24px">' + label + '</h2><p style="white-space:pre-wrap;line-height:1.6">' + escapeHtml(value) + "</p>").join("") + "</body></html>"
  };
}

const attempts = /* @__PURE__ */ new Map();
const contact_post = defineEventHandler(async (event) => {
  setResponseHeader(event, "Cache-Control", "no-store");
  const origin = getHeader(event, "origin");
  if (origin && origin !== getRequestURL(event).origin) throw createError({ statusCode: 403, statusMessage: "Request not allowed" });
  if (!(getHeader(event, "content-type") || "").startsWith("application/json")) throw createError({ statusCode: 415, statusMessage: "JSON required" });
  if (Number(getHeader(event, "content-length") || 0) > 32768) throw createError({ statusCode: 413, statusMessage: "Message too large" });
  const raw = await readRawBody(event);
  if (!raw || Buffer.byteLength(raw) > 32768) throw createError({ statusCode: 413, statusMessage: "Message too large" });
  let input;
  try {
    input = JSON.parse(raw);
  } catch {
    throw createError({ statusCode: 400, statusMessage: "Invalid payload" });
  }
  if (!input || typeof input !== "object" || Array.isArray(input)) throw createError({ statusCode: 400, statusMessage: "Invalid payload" });
  const { values, errors } = validateContact(input);
  if (values.website) return { ok: true };
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const ip = getRequestIP(event) || "unknown";
  const current = attempts.get(ip) || { count: 0, expires: now + 6e4 };
  if (current.count >= 5) {
    setResponseHeader(event, "Retry-After", 60);
    throw createError({ statusCode: 429, statusMessage: "Please wait a minute before trying again" });
  }
  current.count++;
  attempts.set(ip, current);
  if (Object.keys(errors).length) throw createError({ statusCode: 400, statusMessage: "Check the highlighted fields", data: { errors } });
  const config = useRuntimeConfig();
  const apiKey = process.env.RESEND_API_KEY || config.resendApiKey;
  const from = process.env.CONTACT_FROM || config.contactFrom;
  const to = process.env.CONTACT_EMAIL || config.contactEmail;
  if (!apiKey || !from) throw createError({ statusCode: 503, statusMessage: "Email service is unavailable. Please use WhatsApp." });
  try {
    const { error, data } = await new Resend(apiKey).emails.send({ from, to, replyTo: values.email, ...contactEmail(values) });
    if (error || !(data == null ? void 0 : data.id)) throw new Error("Provider rejected the message");
  } catch {
    throw createError({ statusCode: 502, statusMessage: "Unable to send your message. Please try again or use WhatsApp." });
  }
  return { ok: true };
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
