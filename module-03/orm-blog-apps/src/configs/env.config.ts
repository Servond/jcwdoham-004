import "dotenv/config";

const PORT = process.env.PORT || 8000;
const SECRET_KEY = process.env.SECRET_KEY || "";
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "";
const GMAIL_EMAIL = process.env.GMAIL_EMAIL || "";
const GMAIL_APP_PASS = process.env.GMAIL_APP_PASS || "";

export {
  PORT,
  SECRET_KEY,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
  GMAIL_EMAIL,
  GMAIL_APP_PASS,
};
