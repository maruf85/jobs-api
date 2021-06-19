export const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  databaseUri: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?retryWrites=true`,
});
