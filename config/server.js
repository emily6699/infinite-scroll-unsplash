module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "297dc6deac2c057e19e7f0eebc6cd465969d23ff265147ba81105e7bf2917fa0",
  SECRET:
    process.env.SECRET ||
    "2dcf049292c7a91715a81a3cececdac5a619bc085cc4feaef3c0a9780cced7a0",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
