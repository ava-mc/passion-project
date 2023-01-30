- react-ar-js-web-version-app

  Successful attempt of adding AR.js image tracking functionalities to my existing Mystery Mail web application, made with Next.js. To run it, do npm install, then npm run dev to test the full app. (You can also do npm start, however, I added a server.js file that redirects my http localhost to a https, so that I could test it easily with my phone. I did this before I realised I could easily forward my ports if my phone was connected to my computer via USB.)
  
  There is also a [live demo](https://passion-project-y4sr.vercel.app/) version of this:
  
  <img width="254" alt="image" src="https://user-images.githubusercontent.com/91590248/215576037-283e07b3-7b14-4409-a6fd-b03d494ea0be.png">
  
  The idea is that you create your post card first, this will create a pdf you can save and/or print out with your secret AR message, contained in a scannable QR code, and with the chosen target image on the front of your card.

  If you just want to scan an already made example, try this one:
  
  <img width="710" alt="image" src="https://user-images.githubusercontent.com/91590248/215576117-41e093b8-1e69-4ff3-aba3-1d1bf2812982.png">
  
  
-----


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
