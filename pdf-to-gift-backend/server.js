const express = require('express');
const multer = require('multer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

app.post('/convert', upload.single('pdf'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileBuffer = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(fileBuffer);
    let extractedText = '';

    const numPages = pdfDoc.getPageCount();
    for (let i = 0; i < numPages; i++) {
      const page = pdfDoc.getPage(i);
      const textContent = await page.getTextContent();
      textContent.items.forEach((item) => {
        extractedText += item.str + ' ';
      });
    }

    const giftFormat = convertToGift(extractedText);

    // Eliminar el archivo subido después de la conversión
    fs.unlinkSync(filePath);

    res.json({ gift: giftFormat });
  } catch (error) {
    res.status(500).json({ error: 'Error processing the PDF' });
  }
});

const convertToGift = (text) => {
  let giftFormat = '';
  const questions = text.split('\n');
  questions.forEach((question) => {
    if (question.includes('a)')) {
      const parts = question.split('a)');
      const questionText = parts[0].trim();
      const answers = parts[1].split(/[bcd]\)/);
      giftFormat += `${questionText} {\n= ${answers[0].trim()}\n~ ${answers[1].trim()}\n~ ${answers[2].trim()}\n~ ${answers[3].trim()}\n}\n\n`;
    }
  });
  return giftFormat;
};

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
