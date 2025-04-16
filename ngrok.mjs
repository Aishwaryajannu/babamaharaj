import ngrok from 'ngrok';

(async function () {
  try {
    const url5173 = await ngrok.connect(5173);
    console.log(`Ngrok is running on port 5173: ${url5173}`);

    const url8000 = await ngrok.connect(8000);
    console.log(`Ngrok is running on port 8000: ${url8000}`);
  } catch (error) {
    console.error('❌ Error starting Ngrok:', error.message || error);
  }
})();
