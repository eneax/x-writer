# 📝 X-Writer

X-Writer is your own AI writing assistant that takes a title as input and generates a full blog post for you.

## ⚠️ Disclaimer

This project is intended for personal and educational experimentation with text generation technology.
This project was created following the "GPT3 Writer" tutorial from [buildspace](https://github.com/buildspace/buildspace-projects).

## 🦄 Features

- Next.js 13
- React 18
- TypeScript 4
- Tailwind CSS 3
- Path Mapping (for absolute imports)
- GPT-3 and OpenAI

## 🗄️ Environment Variables

Create a `.env.local` file in your root directory with the [OpenAI API key](https://beta.openai.com/account/api-keys).

```
OPENAI_API_KEY=GET_YOUR_OWN_KEY_FROM_OPENAI
```

## 🚀 Quick start

To run this project locally:

```shell
npm i
npm run dev
```

## 🎓 Learning Next.js

Looking for more guidance? Full documentation available on the official [Next.js website](https://nextjs.org).

## 💫 Deploy

**_Note_**: The maximum execution timeout for [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions) is `10 seconds` when deployed on a Personal Account (Hobby plan). For Teams, the execution timeout is `60 seconds` (Pro plan) or `900 seconds` (Enterprise plan).
