const crypto = require("crypto");

// Criptografia de dados
const criptografarMensagem = (texto, chaveSecreta) => {
  const algorithm = "aes-256-cbc";
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(chaveSecreta),
    iv
  );
  let encrypted = cipher.update(texto, "utf8", "hex");
  encrypted += cipher.final("hex");
  // Retorna o IV junto com o texto criptografado
  return `${iv.toString("hex")}:${encrypted}`;
};

// Função para descriptografar dados
const decritografar = (textoCriptografado, chaveSecreta) => {
  const algorithm = "aes-256-cbc";
  const [ivHex, encrypted] = textoCriptografado.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(chaveSecreta),
    iv
  );
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

processarNumeros = (numeros, callbackFunction) => {
  const pares = numeros.filter((numero) => numero % 2 === 0);
  const result = pares.map((par) =>
    callbackFunction(par.toString(), "eu_vou_tirar_nota10:D_na_atv_eba")
  );
  return result;
};

const valoresCriptografados = processarNumeros([1, 2, 3, 4, 5, 6], criptografarMensagem)
console.log(valoresCriptografados);
console.log(valoresCriptografados.map(valor => decritografar(valor.toString(), "eu_vou_tirar_nota10:D_na_atv_eba")));
