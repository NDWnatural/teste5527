const express = require('express');
const ytdl = require('ytdl-core');
const app = express();

app.use(express.static('public')); // Para servir arquivos estáticos, como o index.html

app.get('/download', (req, res) => {
    const videoUrl = req.query.url; // Recupere o URL do vídeo do usuário

    if (ytdl.validateURL(videoUrl)) {
        // Use ytdl-core para baixar o vídeo
        res.setHeader('Content-Disposition', `attachment; filename=video.mp4`);
        ytdl(videoUrl, { format: 'mp4' }).pipe(res);
    } else {
        res.send('URL do vídeo inválido.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
