import cors from "cors";

const allowedOrigins = [
  "https://localhost",
  "https://www.google.com",
  "https://www.facebook.com",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

export default cors(corsOptions);
