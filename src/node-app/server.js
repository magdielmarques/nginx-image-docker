const PORT = 3000;

const runServer = async () => {
  const application = await createApp();

  return application.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

runServer();
