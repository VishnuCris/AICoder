import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { content } = req.body;
  res.status(200).json({'status':true,'msg':'Datas','content':'Success Metting'});
}

const generatePrompt = (keyword) =>{
  return `Give a breif description based on the keyword ${keyword}`
}