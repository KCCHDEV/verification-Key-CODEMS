const express = require('express');
const app = express();
const keys = [
    { id: 'Key1', verificationKey: '123' },
    { id: 'Key2', verificationKey: '125' },
    { id: 'Key3', verificationKey: '101' }
];
const ids = [
    { id: 'Id1', verificationKey: '123' },
    { id: 'Id2', verificationKey: '125' },
    { id: 'Id3', verificationKey: '101' }
];


function getVerificationKeyByKeyId(keyId) {
    const key = keys.find(k => k.id === keyId);
    return key ? key.verificationKey : null;
}
function getVerificationKeyById(Id) {
    const id = ids.find(i => i.id === Id);
    return id ? id.verificationKey : null;
}
// Определить конечную точку API для проверки ключа и идентификатора
app.get('/api/key/:keyId/:Id', (req, res) => {
    const verificationKey = getVerificationKeyByKeyId(req.params.keyId);
    if (!verificationKey) {
        return res.status(404).json({ error: 'Key not found | Bot ใช้ code MS เถื่อน' });
    }
    const verificationId = getVerificationKeyById(req.params.Id);
    if (!verificationId) {
        return res.status(404).json({ error: 'ID not found | Bot ใช้ code MS เถื่อน' });
    }
    res.status(200).json({ pass: 'Bot is Verification' });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});