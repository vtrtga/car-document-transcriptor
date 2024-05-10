import fs from 'fs';

// Função para ler o arquivo de imagem e converter em JSON
function imageFileToJson(filePath: string): any {
    try {
        // Lendo o arquivo de imagem
        const imageBuffer = fs.readFileSync(filePath);

        // Convertendo os dados binários para base64
        const imageData = imageBuffer.toString('base64');

        // Obtendo informações sobre o arquivo
        const fileInfo = fs.statSync(filePath);

        // Construindo o objeto JSON
        const imageJson = {
            filename: filePath.split('/').pop(), // Obtendo apenas o nome do arquivo
            type: 'image', // Você pode adicionar lógica para determinar o tipo de arquivo com base na extensão
            size: fileInfo.size,
            data: imageData
        };

        return imageJson;
    } catch (error) {
        console.error('Erro ao processar o arquivo de imagem:', error);
        return null;
    }
}

// Exemplo de uso
const imagePath = '../../documents/doccaminhao.jpg';
const imageJson = imageFileToJson(imagePath);
if (imageJson) {
    const bytes = Buffer.from(imageJson.data, 'base64');

    const jsonString = bytes.toJSON();

    console.log('JSON gerado:', jsonString);

    
} else {
    console.log('Erro ao processar o arquivo de imagem.');
}
